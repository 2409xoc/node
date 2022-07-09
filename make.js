var fs = require("fs");
var fse = require("fs-extra");
var path = require("path");
var ejs = require("ejs");
var fmatter = require("front-matter");
var marked = require("marked");
var count = require("html-word-count");
const config = require("./config.js");
const ffs = require('fast-folder-size')
const { create } = require("domain");
const { getStatusMapping } = require("cucumber/lib/status.js");
const headers = `${__dirname}/views/partials/header.html`;
var all, dirlist, blog, sci, tags, wait=300;


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

function delBuild() {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(config.dev.builddir)) {
            fs.rm(config.dev.builddir, {recursive: true}, (err) => {
                if (err) {
                    throw err;
                }
                console.log(`directory exists: ${config.dev.builddir}... removing.`);
            });
        }
        setTimeout(resolve, wait);
    })
}

function createBuild() {
    return new Promise((resolve, reject) => {
        fs.mkdir(config.dev.builddir, (err) => {
            if (err) {
                throw err;
            }
            console.log(`building directory: ${config.dev.builddir}`);
            resolve();
        })
    })
}

function createSubs() {
	return new Promise((resolve, reject) => { 
		var i;
		builds=config.build, vals=Object.values(builds), keys=Object.keys(builds);
		for (i=0; i<vals.length; ++i) {
			var subpath = vals[i][0], subpage=keys[i], metadata_dict={}, buildpath = `${config.dev.builddir}/${subpage}`, readpath=`${__dirname}${subpath}`;
			if (!fs.existsSync(buildpath)) {
				fs.mkdir(buildpath, {recursive: true}, err => {});
			}	
		}
		setTimeout(resolve, wait);
	})	
}

function subpages() {
    return new Promise((resolve, reject) => {
        var i, ejs_template, rendering;
        builds = config.build, vals=Object.values(builds), keys=Object.keys(builds);
        for (i=0; i<vals.length; ++i) {
            var subpath = vals[i][0], subpage=keys[i], metadata_dict={}, buildpath = `${config.dev.builddir}/${subpage}`, readpath=`${__dirname}${subpath}`;
            // check if file or dir
            if (!!path.extname(readpath) == true) {
				if (fs.existsSync(readpath)) {
					if (subpage == "") {
						subpage = "home";
					}
					console.log(`creating subpage: ${subpage}`);
					if (vals[i].length >= 2) {
						var j;
						var loadvars = vals[i][1];
						for (j=0; j<loadvars.length; ++j) {
							if (loadvars[j] == "blog") {
								metadata_dict[loadvars[j]] = blog;
							}
							else if (loadvars[j] == "tags") {
								metadata_dict[loadvars[j]] = tags;
							}
							else if (loadvars[j] == "sci") {
								metadata_dict[loadvars[j]] = sci;
							}
							else {
								metadata_dict[loadvars[j]] = `${eval(loadvars[j])}`;
							}
						}
					}
					ejs_template = fs.readFileSync(readpath, "utf-8");
					rendering = ejs.render(ejs_template, metadata_dict);
					fs.writeFile(`${buildpath}/index.html`, rendering, err => {
						if (err) {
							throw err;
						}
					})
				}
				else {
					console.log(`subpage: ${subpage} is non-existent`);
				}
            }
            else {
				if (subpath.includes("/public/")) {
					buildpath = `${config.dev.builddir}${subpath.split("/public/")[1]}`;
				}
				console.log(`copying folder from .${subpath} to ${buildpath}`);
				fse.copySync(readpath, buildpath, {overwrite: true, recursive: true}, err => {
					if (err) {
						throw err;
					}
				})
            }
        }
		setTimeout(resolve, wait);
    })
}

function createBlogs() {
	return new Promise((resolve, reject) => {
		var postpath;
		all.forEach(function(post) {
			postpath = `${config.dev.builddir}${post.attributes.link}`;
			if (!fs.existsSync(postpath)) {
				fs.mkdir(postpath, {recursive: true}, err => {});
			}
		})
		setTimeout(resolve, wait);
	})
}

function writePosts() {
	return new Promise((resolve, reject) => {
		var ejs_template, rendering, template_path;
		all.forEach(function(post) {
			if (post.attributes.layout && (fs.existsSync(`./views/blog/${post.attributes.layout}.html`))) {
				template_path = `./views/blog/${post.attributes.layout}.html`;
			}
			else if (post.type == "sci") {
				template_path = `./views/blog/sci.html`;
			}
			else {
				template_path = `./views/blog/post.html`;
			}
			ejs_template = fs.readFileSync(template_path, "utf-8");
			rendering = ejs.render(ejs_template, {post: post, body: marked.parse(post.body), count: count(post.body), tags: tags, headers:headers});
			fs.writeFile(`${config.dev.builddir}${post.attributes.link}/index.html`, rendering, err => {
				if (err) {
					throw err;
				}
			})
			console.log(`creating text file: ${post.attributes.title}`);
		})
		setTimeout(resolve, wait);
	})
}

function scanDirs(path) {
	return fs.readdirSync(path).filter(function (file) {
	  return fs.statSync(path+'/'+file).isDirectory();
	});
}

function cleanUp(dirs) {
	dirs.forEach(function(dir) {
		var path = `${config.dev.builddir}${dir}`;
		ffs(path, (err, bytes) => {
			if (err) {
				throw err;
			}
			if (bytes == 0) {
				fs.rm(path, { recursive: true }, (err) => {
					if (err) {
						throw err;
					}
					console.log(`deleting empty folder: ${path}`);
				})	
			}
		})
	})
}

async function make() {
    await read();
    await bubblesort();
	await addMarked();
	await getTags();
	await split();
    await delBuild();
    await createBuild();
	await createSubs();
    await subpages();
	await createBlogs();
	await writePosts(); 
	await cleanUp(await scanDirs(config.dev.builddir));

}

make();