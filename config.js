const config = {
	dev: { 
		blogdir: './blog/', 
		builddir: './build/', 
		headers: './views/partials/header.html',
	},
	build: { 
		'': [['/views/pages/index.html'], ["headers"]],
		'blog': ['/views/pages/blog.html', ['blog', 'headers', 'tags']],
		'sci': ['/views/pages/sci.html', ['sci', 'headers']],
		'category': ['/views/pages/category.html', ['headers', 'tags']],
		'about': [['/views/pages/about.html'], ["headers"]],
		'css': ['/public/src/css'], 
		'assets': ['/public/src/assets'], 
	},
	readdirs: {
		blog: './blog/', 
		sci: './sci/',
	}
}


module.exports = config;
