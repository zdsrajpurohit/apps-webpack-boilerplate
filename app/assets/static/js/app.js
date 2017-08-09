webpackJsonp([ 0 ], [ /* 0 */
, /* 1 */
, /* 2 */
, /* 3 */
/***/
function(module, exports, __webpack_require__) {
    /* styles */
    __webpack_require__(18);
    var Component = __webpack_require__(1)(/* script */
    __webpack_require__(6), /* template */
    __webpack_require__(15), /* scopeId */
    null, /* cssModules */
    null);
    module.exports = Component.exports;
}, /* 4 */
, /* 5 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(3);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
    __WEBPACK_IMPORTED_MODULE_0_vue__["a"].config.productionTip = false;
    /* eslint-disable no-new */
    new __WEBPACK_IMPORTED_MODULE_0_vue__["a"]({
        el: "#app",
        render: function(h) {
            return h(__WEBPACK_IMPORTED_MODULE_1__App___default.a);
        }
    });
}, /* 6 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__components_Hello__ = __webpack_require__(13);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Hello__);
    //
    //
    //
    //
    //
    //
    /* harmony default export */
    __webpack_exports__["default"] = {
        name: "app",
        components: {
            Hello: __WEBPACK_IMPORTED_MODULE_0__components_Hello___default.a
        }
    };
}, /* 7 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__HelloAgain__ = __webpack_require__(14);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__HelloAgain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HelloAgain__);
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */
    __webpack_exports__["default"] = {
        name: "hello",
        data: function() {
            return {
                userName: ""
            };
        },
        components: {
            HelloAgain: __WEBPACK_IMPORTED_MODULE_0__HelloAgain___default.a
        },
        computed: {
            msg: function() {
                return "Hello " + this.userName + ", welcome to Zendesk Vue App.";
            }
        },
        methods: {
            getUser: function() {
                client.get("currentUser").then(function(data) {
                    this.userName = data["currentUser"]["name"];
                }.bind(this));
            }
        },
        mounted: function() {
            this.getUser();
        }
    };
}, /* 8 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */
    __webpack_exports__["default"] = {
        data: function() {
            return {
                msg: "hello again"
            };
        }
    };
}, /* 9 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(0)(undefined);
    // imports
    // module
    exports.push([ module.i, "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;color:#2c3e50}", "" ]);
}, /* 10 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(0)(undefined);
    // imports
    // module
    exports.push([ module.i, "p[data-v-71fc82d6]{color:#bd322c}", "" ]);
}, /* 11 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(0)(undefined);
    // imports
    // module
    exports.push([ module.i, "p[data-v-7e853ffb]{color:#000}", "" ]);
}, /* 12 */
, /* 13 */
/***/
function(module, exports, __webpack_require__) {
    /* styles */
    __webpack_require__(19);
    var Component = __webpack_require__(1)(/* script */
    __webpack_require__(7), /* template */
    __webpack_require__(16), /* scopeId */
    "data-v-71fc82d6", /* cssModules */
    null);
    module.exports = Component.exports;
}, /* 14 */
/***/
function(module, exports, __webpack_require__) {
    /* styles */
    __webpack_require__(20);
    var Component = __webpack_require__(1)(/* script */
    __webpack_require__(8), /* template */
    __webpack_require__(17), /* scopeId */
    "data-v-7e853ffb", /* cssModules */
    null);
    module.exports = Component.exports;
}, /* 15 */
/***/
function(module, exports) {
    module.exports = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                attrs: {
                    id: "app"
                }
            }, [ _c("hello") ], 1);
        },
        staticRenderFns: []
    };
}, /* 16 */
/***/
function(module, exports) {
    module.exports = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "hello"
            }, [ _c("p", [ _vm._v(_vm._s(_vm.msg)) ]), _vm._v(" "), _c("hello-again") ], 1);
        },
        staticRenderFns: []
    };
}, /* 17 */
/***/
function(module, exports) {
    module.exports = {
        render: function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "hello"
            }, [ _c("p", [ _vm._v(_vm._s(_vm.msg)) ]), _vm._v(" "), _c("hello-again") ], 1);
        },
        staticRenderFns: []
    };
}, /* 18 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(9);
    if (typeof content === "string") content = [ [ module.i, content, "" ] ];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(2)("77f95c0c", content, true);
}, /* 19 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(10);
    if (typeof content === "string") content = [ [ module.i, content, "" ] ];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(2)("3da695a2", content, true);
}, /* 20 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(11);
    if (typeof content === "string") content = [ [ module.i, content, "" ] ];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(2)("cdb331ae", content, true);
} ], [ 5 ]);