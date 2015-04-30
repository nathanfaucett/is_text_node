var isNode = require("is_node");


module.exports = isTextNode;


function isTextNode(obj) {
    return isNode(obj) && obj.nodeType === 3;
}
