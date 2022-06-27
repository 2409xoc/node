var express = require("express");
var fs = require("fs");
var fm = require("front-matter");
var path = require("path");
var { marked } = require("marked");
var count = require("html-word-count");
var ejs = require("ejs");
var fse = require("fs-extra");
const config = require("./config");
const { callbackify } = require("util");
const { createBrotliCompress } = require("zlib");
var app = express();

var headers = __dirname + "/views/partials/header.html"
var hostname = "localhost", port=3000;
var lists, bdir;

app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "public")));

// index
app.get("/", function(req, res) {
    res.render("index.html");
})

function read(_cb) {
    var ll = [], dates = [], tmp=[];
    fs.readdir(config.dev.blogdir, (err, files) => {
        if (err) {
            throw err;
        }
        else {
            files.forEach(function(post) {
                fs.readFile(config.dev.blogdir + post, "utf8", function(e, data) {
                    if (e) {
                        throw e;
                    }
                    else {
                        var c = fm(data);
                        c.attributes.link = "/blog/" + post.split(".md")[0];
                        dates.push(c.attributes.date)
                        ll.push(c);
                    }
                    if (ll.length == files.length) {
                        dates.sort(function(a,b){return Date.parse(a) - Date.parse(b)});
                        dates.reverse();
                        dates.forEach(function(d) {
                            ll.forEach(function(p) {
                                if (p.attributes.date == d) {
                                    if (tmp.indexOf(p) <= -1) {
                                        tmp.push(p);
                                        lists = tmp.slice();
                                    }
                                }
                            })
                        })
                    }
                    _cb();
                })
            })
        }
    })
}

// posts
app.use("/blog/*", (req,res) => {
    if (req.baseUrl == "/blog") {
        res.render("blog.html", {lists:lists, headers: headers});
    }
    else {
        var path = "." + req.baseUrl + ".md";
        fs.readFile(path, "utf8", function(err, data) {
            if (err) {
                throw err;
            }
            else {
                var c = fm(data);
                var body = marked.parse(c.body);
                if (c.attributes.layout && (fs.existsSync(`views/blog/${c.attributes.layout}.html`))) {
                        res.render(`blog/${c.attributes.layout}.html`, {title: c.attributes.title, date: c.attributes.date, body: body, count: count(body), headers: headers});
                    }
                else {
                    res.render("blog/post.html", {title: c.attributes.title, date: c.attributes.date, body: body, count: count(body), headers: headers});
                }
            }
        })
    }
})


// other
app.use("*", (req, res) => {
    if (req.baseUrl == "/blog") {
        res.render("blog.html", {lists:lists, headers: headers});
    }
    else if (res.status(404)) {
        let fdata = fs.readFileSync("./views/partials/404.html", "utf-8")
        let error = ejs.render(fdata, {link: req.baseUrl});
        res.render("partials/404.html", {link: req.baseUrl});
    }
})


function moddir(_cb) {
    if (fs.existsSync(bdir)) {
        fs.rm(bdir, {recursive: true}, (err) => {
            if (err) {
                throw err;
            }
        });
    } 
    setTimeout(function() {
        fs.mkdir(bdir, (err) => {
            if (err) {
                throw err;
            }
        })
    }, 300);
    _cb();
}

function subpages(_cb) {
    builds = config.build;
    vals = Object.values(builds);
    keys = Object.keys(builds);
    for (var i=0; i<vals.length; ++i) {
        var nn = vals[i][0], subpage=keys[i], vsend={}, bpath=`${bdir}/${subpage}`, rpath=`${__dirname}${nn}`;
        if (subpage == "") {
            subpage = "home";
        }
        if ((!!path.extname(rpath)) == true) {
            if (!fs.existsSync(bpath)) {
                fs.mkdir(bpath, {recursive: true}, err => {});
            }
            if (fs.existsSync(rpath)) {
                console.log(`creating subpage: ${subpage}`);
                if (vals[i].length > 1) {
                    const loadvars = (vals[i][1]);
                    for (var j=0; j<loadvars.length; ++j) {
                        if (loadvars[j] == "lists") {
                            vsend[loadvars[j]] = lists;
                        }
                        else {
                            vsend[loadvars[j]] = `${eval(loadvars[j])}`;
                        }
                    }
                }
                var tdata = fs.readFileSync(rpath, "utf-8");
                var contents = ejs.render(tdata, vsend);
                fs.writeFile(`${bpath}/index.html`, contents, err => {
                    if (err) {
                        throw err;
                    }
                })
            }
        }
        else {
            console.log(`copying src from public: ${nn}`);
            fse.copySync(rpath, bpath, {overwrite: true, recursive: true}, (err) => {
                if (err) {
                    throw err;
                }
            })
        }
    }
    _cb();
}

function posts(_cb) {
    lists.forEach(function(post) {
        const path = (`${bdir}${post.attributes.link}`);
        if (!fs.existsSync(path)) {
            fs.mkdir(path, {recursive: true}, err => {});
        }

        if (post.attributes.layout && (fs.existsSync(`./views/blog/${post.attributes.layout}.html`))) {
            var tdata = fs.readFileSync(`./views/blog/${post.attributes.layout}.html`, "utf-8");
        }
        else {
            var tdata = fs.readFileSync(`./views/blog/post.html`, "utf-8");
        }
        var contents = ejs.render(tdata, {title: post.attributes.title, date: post.attributes.date, body: marked.parse(post.body), count: count(post.body), headers:headers});
        fs.writeFile(`${path}/index.html`, contents, err => {
            if (err) {
                throw err;
            }
            console.log(`creating blog file: ${post.attributes.title}`);
        });
    });
    _cb();
}

async function build() {
    read(function() {
        moddir(function() {
            console.log(`directory ${config.dev.builddir.split("./")[1]} already exists, rebuilding.`);
            console.log(`creating directory ${config.dev.builddir.split("./")[1]}.`);
            setTimeout(function() {
                    subpages(function() {
                    console.log(`subpages finished.`);
                    posts(function() {
                        console.log(`${lists.length} blog post(s) finished compiling.`)
                    })
                })
            }, 500);
        })
    })
}

if (process.argv.length > 1) {
    if (process.argv[process.argv.length-1] == "build") {
        var bdir = __dirname + config.dev.builddir.split(".")[1];
        build();
    }
    else {
        read(function() {
            app.listen(port, () => { console.log(`Server running at http://${hostname}:${port}/`)})
        })
    }
}
