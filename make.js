var fs = require("fs");
var fse = require("fs-extra");
var path = require("path");
var ejs = require("ejs");
var fmatter = require("front-matter");
var marked = require("marked");
var count = require("html-word-count");
const config = require("./config.js");
const { create } = require("domain");
const { getStatusMapping } = require("cucumber/lib/status.js");
const headers = `${__dirname}/views/partials/header.html`;
var ll, tags, wait=300;

function swap(arr, i, j) {
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}

function read() {
    return new Promise((resolve, reject) => {
        ll=[];
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
                    ll.push(content);
                    if (ll.length == files.length) {
						setTimeout(resolve, wait);
                    }
                });
            });
        });
    });
}

function bubblesort() {
    return new Promise((resolve, reject) => {
        var i,j, n=ll.length;
            for (i=0; i<n-1;i++) {
                for (j=0;j<n-i-1; j++) {
                    if (Date.parse(ll[j].attributes.date) > Date.parse(ll[j+1].attributes.date)) {
                    ll = swap(ll, j, j+1);
                }
            }
        }
		ll = ll.reverse();
        setTimeout(resolve, wait);
    })
}

function getTags() {
	return new Promise((resolve, reject) => {
		tags = {};
		ll.forEach(function(post) {
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
							if (loadvars[j] == "lists") {
								metadata_dict[loadvars[j]] = ll;
							}
							else if (loadvars[j] == "tags") {
								metadata_dict[loadvars[j]] = tags;
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
					buildpath = `${config.dev.builddir}/${subpath.split("/public/")[1]}`;
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
		ll.forEach(function(post) {
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
		ll.forEach(function(post) {
			if (post.attributes.layout && (fs.existsSync(`./views/blog/${post.attributes.layout}.html`))) {
				template_path = `./views/blog/${post.attributes.layout}.html`;
			}
			else {
				template_path = `./views/blog/post.html`;
			}
			
			ejs_template = fs.readFileSync(template_path, "utf-8");
			rendering = ejs.render(ejs_template, {post: post, body: marked.parse(post.body), count: count(post.body), headers:headers});
			fs.writeFile(`${config.dev.builddir}${post.attributes.link}/index.html`, rendering, err => {
				if (err) {
					throw err;
				}
			})
			console.log(`creating blog file: ${post.attributes.title}`);
		})
		setTimeout(resolve, wait);
	})
}

async function print() {
    await read();
    await bubblesort();
	await getTags();
    await delBuild();
    await createBuild();
	await createSubs();
    await subpages();
	await createBlogs();
	await writePosts();
}

print();
