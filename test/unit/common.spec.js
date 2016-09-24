define(function (require, exports, module) {
    var expect = chai.expect;

    var common = require('common.js');

    describe("src/common.js",function(){
        it("返回两个操作数的和",function(){
            expect(common.add(2,5)).to.equal(7);
        })

        it("判断是否为对象", function(){
        	expect(common.isObject('string')).to.equal(false);
        	expect(common.isObject(null)).to.equal(false);
        	expect(common.isObject({})).to.equal(true);
        })
    })
})
