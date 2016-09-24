/**
 * 重要
 * karma.conf.js中配置的basePath在运行过程中是映射到/base目录下的。
 * 换句话说，basePath目录下的所有文件最终都会放在/base目录下，
 * 因此在test/index.js中 seajs 的 base 属性设置必须以 /base 开头
 */

(function (__karma__, seajs) {
  var tests = [],
    file;
  var alias = {
    // "jquery": "/base/vendor/jquery",
    // "underscore": "/base/vendor/underscore"
  };
  for (file in __karma__.files) {
    if (__karma__.files.hasOwnProperty(file)) {
      // 所有的测试用例代码文件以spec结尾
      if (/spec\.js$/i.test(file)) {
        tests.push(file);
      }
      if (/\/src\//.test(file)) {
        // 获取src目录下的文件路径作为seajs模块的key
        var name = file.match(/\/src\/([^.]+)\.js/)[1];
        alias[name] = file;
      }
    }
  }

  seajs.config({
    base: '/base/src',
    alias: alias
  });

  var __start = __karma__.start;
  __karma__.start = function () {
  };
  seajs.use(tests, function () {
    //要在seajs模块载入后调用,否则会加载不到任何测试用例
    __start.call();
  });

})(window.__karma__, seajs);
