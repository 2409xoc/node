var express = require("express");
var fs = require("fs");
var fse = require("fs-extra");
var fm = require("front-matter");
var path = require("path");
var { marked } = require("marked");
var count = require("html-word-count");
var ejs = require("ejs");

const config = require("./config.js");

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
          })
      })
  }
})

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
			res.render(`blog/${c.attributes.layout}.html`, {post: c, body: body, count: count(body), headers:headers});
                    }
                else {
		    res.render(`blog/post.html`, {post: c, body: body, count: count(body), headers:headers}); 
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
        res.render("partials/404.html", {link: req.baseUrl, headers:headers});
    }
})

if (process.argv.length > 1) {
    if (process.argv[process.argv.length-1] == "build") {
		console.log("BUILD");
    }
    else {
    app.listen(port, () => { console.log(`Server running at http://${hostname}:${port}/`)})
  }
}

