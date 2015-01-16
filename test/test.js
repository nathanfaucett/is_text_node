var assert = require("assert"),
    isTextNode = require("../src/index");


describe("isTextNode", function() {
    it("should return true when the value is a TextNode", function() {
        assert.equal(isTextNode({
            nodeName: "div",
            nodeType: 3
        }), true);
    });
});
