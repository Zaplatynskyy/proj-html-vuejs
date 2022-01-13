
// Put this into /vue.config.js
module.exports = {
	chainWebpack: config => {
	  config
		.plugin('html')
		.tap(args => {
		args[0].title = 'MaxCoach';	// Replace your title here
		return args;
	  });
	},

	publicPath: './'
};