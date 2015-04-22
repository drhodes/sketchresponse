module.exports = function(config) {
  config.set({
    autoWatch: true,
    frameworks: ['jspm', 'jasmine', 'phantomjs-shim'],
    browsers: ['Chrome', 'PhantomJS'],
    jspm: {
      loadFiles: [
        'test/**/*.js',
        'jspm_packages/babel-polyfill.js'
      ],
      serveFiles: ['lib/**/*.js']
    }
  });
};
