var express = require("express");
var fs = require("fs");
var fse = require("fs-extra");
var path = require("path");

var ejs = require("ejs");
var marked = require("marked");
var count = require("html-word-count");
var fmatter = require("front-matter");

const config = require("./config.js");
const { getStatusMapping } = require("cucumber/lib/status.js");
var headers = `${__dirname}/${config.dev.headers.split("./")[1]}`;
var all, dirlist, blog, sci, tags, wait=200;

var app = express(), hostname="http://127.0.0.1", port=3000;
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "public")));

function read() {
	return new Promise((resolve, reject) => {
		all = [];
		dirlist = Object.values(config.readdirs);
		dirlist.forEach(function(dir) {
			fs.readdir(dir, (err, files) => {
				if (err) {
					throw err;
				}
				files.forEach(function(post) {
					fs.readFile(`${dir}${post}`, "utf8", function(err, data) {
						if (err) {
							throw err;
						}
						var content = fmatter(data);
						content.attributes.link = `${dir.slice(0, 0) + dir.slice(1)}${post.split(".md")[0]}`;
						content.type = `${(dir.slice(0, 0) + dir.slice(2)).split("/")[0]}`;
						all.push(content);
						if (all.length == files.length) {
							setTimeout(resolve, wait);
						}
					});
				});
			});	
		});	
	})
}

function swap(arr,i,j) {
	tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
	return arr;
}

function bubblesort() {
	return new Promise((resolve, reject) => {
		var i,j, n=all.length;
		for (i=0; i<n-1; i++) {
			for (j=0; j<n-i-1; j++) {
				if (Date.parse(all[j].attributes.date) > Date.parse(all[j+1].attributes.date)) {
					all = swap(all, j, j+1);
				}
			}
		}
		all = all.reverse();
		setTimeout(resolve, wait);
	})
}

function addMarked() {
	return new Promise((resolve, reject) => {
		all.forEach(function(post) {
			post.htmlbody = marked.parse(post.body);
		})	
		setTimeout(resolve, wait);
	})
}

function getTags() {
	return new Promise((resolve, reject) => {
		tags = {};
		all.forEach(function(post) {
			var existing;
			if (post.attributes.tags) {
				post.attributes.tags.split(" ").forEach(function(tag) {
					tag = String(tag);
					if (tags[tag]) {
						existing = tags[tag];
					}
					else {
						existing = [];
					}
					existing.push([post.attributes.title, post.attributes.link, post.attributes.date])
					tags[tag] = existing;
				})
			}
		})
		setTimeout(resolve, wait);
	})
}

function split() {
	return new Promise((resolve, reject) => {
		blog = [], sci = [];
		all.forEach(function(post) {
			if (post.type == "blog") {
				blog.push(post);
			}
			else if (post.type == "sci") {
				sci.push(post);
			}
		})
		setTimeout(resolve, wait);
	})
}

async function getinfo() {
	await read();
	await bubblesort();
	await addMarked();
	await getTags();
	await split();
	app.listen(port, () => { console.log(`Running: ${hostname}:${port}`)});
}

app.use("/blog/*", (req, res) => {
	if (req.baseUrl == "/blog") {
		res.render("pages/blog.html", {blog:blog, headers: headers, tags: tags});
	}
	else {
		var template;
		var relative = `.${req.baseUrl}.md`;
		if (fs.existsSync(relative)) {
			fs.readFile(relative, "utf8", function(err, data) {
				if (err) {
					throw err;
				}
				var content = fmatter(data);
				var body = marked.parse(content.body);
				if (content.attributes.layout && (fs.existsSync(`views/blog/${content.attributes.layout}.html`))) {
					template = `blog/${content.attributes.layout}.html`;
				}
				else {
					template = `blog/post.html`;
				}
				res.render(template, {post: content, body: body, count: count(body), headers:headers, tags: tags});
			})
		}
		else {
			res.render("partials/404.html", {link: req.baseUrl, headers:headers});
		}
	}
})

app.use("/sci/*", (req, res) => {
	if (req.baseUrl == "/sci") {
		res.render("pages/sci.html", {sci: sci, headers:headers})
	}
	else {
		var template;
		var relative = `.${req.baseUrl}.md`;
		if (fs.existsSync(relative)) {
			fs.readFile(relative, "utf8", function(err, data) {
				if (err) {
					throw err;
				}
				var content = fmatter(data);
				var body = marked.parse(content.body);
				res.render("blog/sci.html", {post: content, body: body, headers:headers});
			})
		}
		else {
			res.render("partials/404.html", {link: req.baseUrl, headers:headers});
		}
	}
})

app.use("*", (req, res) => {
	var url, metadata_dict={}, args;
	if (req.baseUrl == "") {
		url = req.baseUrl;
	}
	else {
		url = req.baseUrl.split("/")[1];
	}
	var config_exist = config.build[url] !== undefined;
	if (config_exist && (fs.existsSync(`${__dirname}${config.build[url][0]}`))) {
		if (config.build[url].length >= 2) {
			args = config.build[url][1];
			var i;
			for (i=0; i<args.length; ++i) {
				metadata_dict[args[i]] = eval(args[i]);
			}
		}
		else {
			metadata_dict = {};
		}
		if (url == "") {
			url = "index";
		}
		res.render(`pages/${url}.html`, metadata_dict);
	}
	else {
		res.render("partials/404.html", {link: req.baseUrl, headers: headers});
	}
})

getinfo();
