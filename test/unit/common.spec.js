define(function (require, exports, module) {
  var expect = chai.expect;

  // 注意 common.js路径相对于我们 /test/index.js 里配置的 base: '/base/src'
  // 具体请看 /test/index.js 头部说明 重要
  var common = require('common.js');

  describe("src/common.js", function () {
    it("返回两个操作数的和", function () {
      expect(common.add(2, 5)).to.equal(7);
    })

    it("判断是否为对象", function () {
      expect(common.isObject('string')).to.equal(false);
      expect(common.isObject(null)).to.equal(false);
      expect(common.isObject({})).to.equal(true);
    })
  })
})
