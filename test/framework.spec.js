define(function (require, exports, module) {
  var expect = chai.expect;
  var should = chai.should();

  var foo = 'bar';
  var beverages = {tea: ['chai', 'matcha', 'oolong']};

  describe("test/framework.js", function () {
    it("should test", function () {
      foo.should.be.a('string');
      foo.should.equal('bar');
      foo.should.have.length(3);
      beverages.should.have.property('tea').with.length(3);
    })

    it("expect test", function () {
      expect(foo).to.be.a('string');
      expect(foo).to.equal('bar');
      expect(foo).to.have.length(3);
      expect(beverages).to.have.property('tea').with.length(3);
    })
  })
})
