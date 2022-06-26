var express = require("express");
var fs = require("fs");
var fm = require("front-matter");
var path = require("path");
var { marked } = require("marked");

var app = express();
var hostname = "localhost";
var port = 3000;

app.listen(port, () => { console.log(`Server running at http://${hostname}:${port}/`)})
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, "public")));

// index
app.get("/", function(req, res) {
    res.render("index.html");
})

function read(req, res) {
    var ll = [], dates = [], lists = [];
    fs.readdir("./blog/", (err, files) => {
        if (err) {
            console.log(err);
        }
        else {
            files.forEach(function(post) {
                fs.readFile("./blog/" + post, "utf8", function(e, data) {
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
                        console.log(dates);
                        dates.forEach(function(d) {
                            ll.forEach(function(p) {
                                if (p.attributes.date == d) {
                                    lists.push(p);
                                }
                            })
                        })
                        res.render("blog.html", {lists:lists});
                    }
                })
            })
        }
    })
}

// posts
app.use("/blog/*", (req,res) => {
    if (req.baseUrl == "/blog") {
        read(req, res);
    }
    else {
        console.log(req.baseUrl);
        var path = "." + req.baseUrl + ".md";
        fs.readFile(path, "utf8", function(err, data) {
            if (err) {
                console.log(err);
                return;
            }
            else {
                var c = fm(data);
                var body = marked.parse(c.body); 
                res.render("post.html", {title: c.attributes.title, data: body});
            }
        })
    }
})

// other
app.use("*", (req, res) => {
    if (req.baseUrl == "/blog") {
        read(req, res);
    }

    else if (res.status(404)) {
        res.render("partials/404.html")
    }
})