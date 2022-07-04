#!/usr/bin/node
var express = require("express");
var fs = require("fs");
var fse = require("fs-extra");
var path = require("path");

var ejs = require("ejs");
var marked = require("marked");
var count = require("html-word-count");
var fmatter = require("front-matter");

const config = require("./config.js");
var headers = `${__dirname}/${config.dev.headers.split("./")[1]}`;
var lists, wait=200;

var app = express(), hostname="localhost", port=3000;
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "public")));

function read() {
	return new Promise((resolve, reject) => {
		lists = [];
		fs.readdir(config.dev.blogdir, (err, files) => {
			if (err) {
				throw err;
			}
			files.forEach(function(post) {
				fs.readFile(`${config.dev.blogdir}${post}`, "utf8", function(err, data) {
					if (err) {
						throw err;
					}
					var content = fmatter(data);
					content.attributes.link = `/blog/${post.split(".md")[0]}`;
					lists.push(content);
					if (lists.length == files.length) {
						setTimeout(resolve, wait);
					}
				});
			});
		});	
	});	
}

function swap(arr,i,j) {
	tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
	return arr;
}

function bubblesort() {
	return new Promise((resolve, reject) => {
		var i,j, n=lists.length;
		for (i=0; i<n-1; i++) {
			for (j=0; j<n-i-1; j++) {
				if (Date.parse(lists[j].attributes.date) > Date.parse(lists[j+1].attributes.date)) {
					lists = swap(lists, j, j+1);
				}
			}
		}
		lists = lists.reverse();
		setTimeout(resolve, wait);
	})
}

async function readl() {
	await read();
	await bubblesort();
}

app.use("/blog/*", (req, res) => {
	if (req.baseUrl == "/blog") {
		res.render("pages/blog.html", {lists:lists, headers: headers});
	}
	else {
		var template;
		var relative = `.${req.baseUrl}.md`;
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
			res.render(template, {post: content, body: body, count: count(body), headers:headers});
		})
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

setInterval(function() {
	readl();
}, 2000);

app.listen(port, () => { console.log(`Running: ${hostname}:${port}/`)});
