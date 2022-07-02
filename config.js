const config = {
	dev: { blogdir: './blog/', base2dir: './base2/', builddir: './build/', headers: './views/partials/header.html' },
	build: { '': ['/views/pages/index.html'], 'blog': ['/views/pages/blog.html', ['lists', 'headers']], 'about': ['/views/pages/about.html'], 'css': ['/public/src/css'], }
}


module.exports = config;
