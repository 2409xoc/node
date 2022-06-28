const config = {
    dev: {
        blogdir: "./blog/",
        base2dir: "./base2/",
        builddir: "./build",
    },
    build: {
        "blog": ["/views/blog.html", ["lists", "headers"]],
        "": ["/views/index.html"],
        "about": ["/views/about.html"],
        "css": ["/public/src/css"],
    }
}

module.exports = config;
