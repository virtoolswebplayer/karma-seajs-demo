define(function (require, exports, module) {
  exports.add = function (a, b) {
    return a + b;
  }
  exports.isObject = function (v) {
    return toString.apply(v) === '[object Object]'
  }
})
