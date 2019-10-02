"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        _this.add = function (data) {
            var node = new Node(data);
            if (!_this.head) {
                _this.head = node;
                return;
            }
            var tail = _this.head;
            while (tail.next) {
                tail = tail.next;
            }
            tail.next = node;
        };
        _this.at = function (index) {
            if (!_this.head) {
                throw new Error('Index out of bounds');
            }
            var counter = 0;
            var node = _this.head;
            while (node) {
                if (counter === index) {
                    return node;
                }
                counter++;
                node = node.next;
            }
            throw new Error('Index out of bounds');
        };
        _this.compare = function (leftIndex, rightIndex) {
            if (!_this.head) {
                throw new Error('list is empty');
            }
            return _this.at(leftIndex).data > _this.at(rightIndex).data;
        };
        _this.swap = function (leftIndex, rightIndex) {
            var leftNode = _this.at(leftIndex);
            var rightNode = _this.at(rightIndex);
            var temp = leftNode.data;
            leftNode.data = rightNode.data;
            rightNode.data = temp;
        };
        _this.print = function () {
            if (!_this.head) {
                return;
            }
            var node = _this.head;
            while (node) {
                console.log(node.data);
                node = node.next;
            }
        };
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            while (node.next) {
                length += 1;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
