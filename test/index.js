var tape = require("tape"),
    isTextNode = require("..");


tape("isTextNode(value) should return true when the value is a TextNode", function(assert) {
    assert.equal(isTextNode({
        nodeName: "div",
        nodeType: 3
    }), true);
    assert.end();
});
