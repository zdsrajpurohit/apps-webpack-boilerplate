webpackJsonp([ 0 ], [ /* 0 */
, /* 1 */
/***/
function(module, exports, __webpack_require__) {
    /* styles */
    __webpack_require__(7);
    var Component = __webpack_require__(0)(/* script */
    __webpack_require__(4), /* template */
    __webpack_require__(12), /* scopeId */
    null, /* cssModules */
    null);
    module.exports = Component.exports;
}, /* 2 */
, /* 3 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(1);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
    __WEBPACK_IMPORTED_MODULE_0_vue__["a"].config.productionTip = false;
    new __WEBPACK_IMPORTED_MODULE_0_vue__["a"]({
        el: "#app",
        render: function render(h) {
            return h(__WEBPACK_IMPORTED_MODULE_1__App___default.a);
        }
    });
}, /* 4 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__components_Hello__ = __webpack_require__(10);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__components_Hello___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Hello__);
    /* harmony default export */
    __webpack_exports__["default"] = {
        name: "app",
        components: {
            Hello: __WEBPACK_IMPORTED_MODULE_0__components_Hello___default.a
        }
    };
}, /* 5 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__HelloAgain__ = __webpack_require__(11);
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__HelloAgain___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HelloAgain__);
    /* harmony default export */
    __webpack_exports__["default"] = {
        name: "hello",
        data: function data() {
            return {
                userName: ""
            };
        },
        components: {
            HelloAgain: __WEBPACK_IMPORTED_MODULE_0__HelloAgain___default.a
        },
        computed: {
            msg: function msg() {
                return "Hello " + this.userName + ", welcome to Zendesk Vue App.";
            }
        },
        methods: {
            getUser: function getUser() {
                var _this = this;
                client.get("currentUser").then(function(data) {
                    _this.userName = data["currentUser"]["name"];
                });
            }
        },
        mounted: function mounted() {
            this.getUser();
        }
    };
}, /* 6 */
/***/
function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: true
    });
    /* harmony default export */
    __webpack_exports__["default"] = {
        data: function data() {
            return {
                msg: "hello again"
            };
        }
    };
}, /* 7 */
/***/
function(module, exports) {}, /* 8 */
/***/
function(module, exports) {}, /* 9 */
/***/
function(module, exports) {}, /* 10 */
/***/
function(module, exports, __webpack_require__) {
    /* styles */
    __webpack_require__(8);
    var Component = __webpack_require__(0)(/* script */
    __webpack_require__(5), /* template */
    __webpack_require__(13), /* scopeId */
    "data-v-71fc82d6", /* cssModules */
    null);
    module.exports = Component.exports;
}, /* 11 */
/***/
function(module, exports, __webpack_require__) {
    /* styles */
    __webpack_require__(9);
    var Component = __webpack_require__(0)(/* script */
    __webpack_require__(6), /* template */
    __webpack_require__(14), /* scopeId */
    "data-v-7e853ffb", /* cssModules */
    null);
    module.exports = Component.exports;
}, /* 12 */
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
}, /* 13 */
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
}, /* 14 */
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
} ], [ 3 ]);