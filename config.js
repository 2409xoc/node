const config = {
	dev: { 
		blogdir: './blog/', 
		base2dir: './base2/', 
		builddir: './build/', 
		headers: './views/partials/header.html',
	},
	build: { 
		'': [['/views/pages/index.html'], ["headers"]],
		'blog': ['/views/pages/blog.html', ['lists', 'headers', 'tags']],
		'category': ['/views/pages/category.html', ['headers', 'tags']],
		'about': [['/views/pages/about.html'], ["headers"]],
		'css': ['/public/src/css'], 
		'assets': ['/public/src/assets'], 
	}
}


module.exports = config;
