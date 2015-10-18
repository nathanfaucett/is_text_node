var tape = require("tape"),
    isFunction = require("is_function"),
    isTextNode = require("..");


tape("isTextNode(value) should return true when the value is a TextNode", function(assert) {
    var node;

    if (typeof(Node) !== "undefined" && isFunction(Node)) {
        node = document.createTextNode("");
        assert.equal(isTextNode(node), true);
    } else {
        assert.equal(isTextNode({
            nodeName: "#text",
            nodeType: 3
        }), true);
    }

    assert.end();
});
