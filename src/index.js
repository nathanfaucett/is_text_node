var isNode = require("is_node");


module.exports = isTextNode;


function isTextNode(value) {
    return isNode(value) && value.nodeType === 3;
}
