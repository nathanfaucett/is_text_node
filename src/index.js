var isNode = require("is_node");


module.exports = function isTextNode(obj) {
    return isNode(obj) && obj.nodeType === 3;
};
