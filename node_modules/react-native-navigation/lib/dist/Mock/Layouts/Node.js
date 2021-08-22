"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(layout, type, parentNode) {
        this.nodeId = layout.id;
        this.data = layout.data;
        // this.options = layout.data.options;
        this.parentNode = parentNode;
        this.type = type;
    }
}
exports.default = Node;
