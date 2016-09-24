define(function (require, exports, module) {
  var expect = chai.expect;

  var libs = require('libs/libs.js');

  describe("src/libs/libs.js", function () {
    it("add1 方法", function () {
      expect(libs.add1(2, 5)).to.equal(-3);
    })

    /**
     * 下面的不执行的话 覆盖率应该不到100%
     * 取消注释后,再运行 npm test 覆盖率即可达到100%
     */

    //it("isArray 方法", function(){
    //  expect(libs.isArray('string')).to.equal(false);
    //  expect(libs.isArray(null)).to.equal(false);
    //  expect(libs.isArray({})).to.equal(false);
    //  expect(libs.isArray([])).to.equal(true);
    //})

  })
})