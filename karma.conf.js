module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai', 'seajs'],


    // 配置需要加载到浏览器的js文件
    files: [
      // {pattern: 'vender/**/*.js',included: false,watched: false},
      {pattern: 'src/**/*.js', included: false},  // inclueed: false 不加载到浏览器
      {pattern: 'test/**/*.js', included: false}, // inclueed: false 不加载到浏览器
      'test/test-main.js'
    ],


    // 要排除的目录或文件
    exclude: [

    ],

    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['coverage']
    },

    reporters: ['spec', 'coverage'],

    // https://github.com/karma-runner/karma-coverage
    coverageReporter: {
      dir: './report',
      reporters: [
        {type: 'lcov', subdir: '.'},
        {type: 'text-summary'} // 可选: html,text-summary
      ]
    },

    colors: true,

    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // 只运行一次
    singleRun: true,
    concurrency: Infinity
  })
}
