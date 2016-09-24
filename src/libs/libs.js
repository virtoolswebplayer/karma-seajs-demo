define(function (require, exports, module) {
  exports.add1 = function (a, b) {
    return a - b;
  }
  exports.isArray = function (v) {
    return toString.apply(v) === '[object Array]'
  }
})