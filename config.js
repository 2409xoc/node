const config = {
	dev: { blogdir: './blog/', base2dir: './base2/', builddir: './build/' },
	build: { '': ['/views/index.html'], 'blog': ['/views/blog.html', ['lists', 'headers']], 'about': ['/views/about.html'], 'css': ['/public/src/css'], }
}


module.exports = config;
