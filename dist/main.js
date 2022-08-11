/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Node {\n    constructor(data, next = null){ //list doesn't have a next node by default\n        this.data = data;\n        this.next = next;\n    }\n}\n\nclass LinkedList {\n    constructor() {\n        this.head = null; //list has no first node by default\n        this.size = 0; //list is empty by default\n    }\n\n    //insert first node\n    prependValue(data) {\n        this.head = new Node(data, this.head);\n        this.size++\n    }\n\n    //insert last node\n    appendValue(data){\n        let node = new Node(data);\n        let current;\n        //If empty, make head\n        if(!this.head){\n            this.head = node\n        } else {\n            current = this.head;\n            \n            while (current.next) {\n                current = current.next;\n            }\n\n            current.next = node;\n        }\n        this.size++\n    }\n\n    //insert at index\n    insertAt(data, index) {\n        //if index is out of range\n        if(index > 0 && index > this.size){\n            this.appendValue(data)\n            return\n        }\n\n        //if first index\n        if(index === 0){\n            this.prependValue(data)\n            return\n        }\n\n        const node = new Node(data);\n        let current, previous;\n\n        //set current to first\n        current = this.head\n        let count = 0\n\n        while(count < index) {\n            previous = current //node before index we want to insert\n            count++\n            current = current.next //node after index\n        }\n\n        node.next = current\n        previous.next = node\n        this.size++\n    }\n\n    //get at index\n    getAt(index){\n        let current = this.head;\n        let count = 0;\n\n        while(current){\n            if(count === index){\n                console.log(current.data)\n            }\n            count++\n            current = current.next\n        }\n        return null\n    }\n\n    //remove at index\n    removeAt(index) {\n        if(index > 0 && index > this.size) {\n            return\n        }\n\n        let current = this.head;\n        let previous;\n        let count = 0;\n\n        //Remove first\n        if(index === 0){\n            this.head = current.next\n        } else {\n            while(count < index){\n                count++\n                previous = current\n                current = current.next\n            }\n            \n            previous.next = current.next;\n        }\n        \n        this.size--\n    }\n\n    //clear list\n    clearList() {\n        this.head = null\n        this.size = 0\n    }\n\n    //print list data\n    printListData() {\n        let current = this.head;\n        while(current) {\n            console.log(current.data)\n            current = current.next;\n        }\n    }\n\n    getSize() {\n        console.log(this.size)\n    }\n}\n\nconst ll = new LinkedList();\nll.prependValue(100)\nll.prependValue(200)\nll.prependValue(300)\nll.appendValue(400)\nll.insertAt(500, 10)\nll.printListData()\n\nll.getSize()\n\n//# sourceURL=webpack://linkedlists/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;