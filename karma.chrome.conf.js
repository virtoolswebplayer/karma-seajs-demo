// Karma configuration
// Generated on Sun Sep 25 2016 04:03:46 GMT+0800 (CST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'seajs'],


    // list of files / patterns to load in the browser
    files: [
      // {pattern: 'vender/**/*.js',included: false,watched: false},
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/**/*.js', included: false},
      'test/index.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage', 'progress'],

    // https://github.com/karma-runner/karma-coverage
    coverageReporter: {
      dir: './report',
      reporters: [
        {type: 'lcov', subdir: '.'},
        {type: 'text-summary'}
      ]
    },

    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
