const config = {
	dev: { 
		builddir: './build/', 
		headers: './views/partials/header.html',
	},
	build: { 
		'': [['./views/pages/index.html'], ["headers"]],
		'blog': ['./views/pages/blog.html', ['blog', 'headers']],
		'sci': ['./views/pages/sci.html', ['sci', 'headers']],
		'about': [['./views/pages/about.html'], ["headers"]],
		'css': ['./public/src/css'], 
		'assets': ['./public/src/assets'], 
		'scripts': ['./public/src/scripts'], 
	},
	read: {
		blog: './blog/', 
		sci: './sci/',
	}
}

module.exports = config;
