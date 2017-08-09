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
    Component.options.__file = "/Users/srajpurohit/Code/zendesk/apps-webpack-boilerplate/app/vuepack/src/App.vue";
    if (Component.esModule && Object.keys(Component.esModule).some(function(key) {
        return key !== "default" && key !== "__esModule";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
        console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var hotAPI = require("vue-hot-reload-api");
            hotAPI.install(require("vue"), false);
            if (!hotAPI.compatible) return;
            module.hot.accept();
            if (!module.hot.data) {
                hotAPI.createRecord("data-v-0f1924d6", Component.options);
            } else {
                hotAPI.reload("data-v-0f1924d6", Component.options);
            }
        })();
    }
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
    exports.push([ module.i, "\n#app {\n  font-family: 'Avenir', Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #2c3e50;\n}\n", "" ]);
}, /* 10 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(0)(undefined);
    // imports
    // module
    exports.push([ module.i, "\np[data-v-71fc82d6] {\n  color: #bd322c;\n}\n", "" ]);
}, /* 11 */
/***/
function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(0)(undefined);
    // imports
    // module
    exports.push([ module.i, "\np[data-v-7e853ffb] {\n  color: #000;\n}\n", "" ]);
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
    Component.options.__file = "/Users/srajpurohit/Code/zendesk/apps-webpack-boilerplate/app/vuepack/src/components/Hello.vue";
    if (Component.esModule && Object.keys(Component.esModule).some(function(key) {
        return key !== "default" && key !== "__esModule";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
        console.error("[vue-loader] Hello.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var hotAPI = require("vue-hot-reload-api");
            hotAPI.install(require("vue"), false);
            if (!hotAPI.compatible) return;
            module.hot.accept();
            if (!module.hot.data) {
                hotAPI.createRecord("data-v-71fc82d6", Component.options);
            } else {
                hotAPI.reload("data-v-71fc82d6", Component.options);
            }
        })();
    }
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
    Component.options.__file = "/Users/srajpurohit/Code/zendesk/apps-webpack-boilerplate/app/vuepack/src/components/HelloAgain.vue";
    if (Component.esModule && Object.keys(Component.esModule).some(function(key) {
        return key !== "default" && key !== "__esModule";
    })) {
        console.error("named exports are not supported in *.vue files.");
    }
    if (Component.options.functional) {
        console.error("[vue-loader] HelloAgain.vue: functional components are not supported with templates, they should use render functions.");
    }
    /* hot reload */
    if (false) {
        (function() {
            var hotAPI = require("vue-hot-reload-api");
            hotAPI.install(require("vue"), false);
            if (!hotAPI.compatible) return;
            module.hot.accept();
            if (!module.hot.data) {
                hotAPI.createRecord("data-v-7e853ffb", Component.options);
            } else {
                hotAPI.reload("data-v-7e853ffb", Component.options);
            }
        })();
    }
    module.exports = Component.exports;
}, /* 15 */
/***/
function(module, exports, __webpack_require__) {
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
    module.exports.render._withStripped = true;
    if (false) {
        module.hot.accept();
        if (module.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-0f1924d6", module.exports);
        }
    }
}, /* 16 */
/***/
function(module, exports, __webpack_require__) {
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
    module.exports.render._withStripped = true;
    if (false) {
        module.hot.accept();
        if (module.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-71fc82d6", module.exports);
        }
    }
}, /* 17 */
/***/
function(module, exports, __webpack_require__) {
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
    module.exports.render._withStripped = true;
    if (false) {
        module.hot.accept();
        if (module.hot.data) {
            require("vue-hot-reload-api").rerender("data-v-7e853ffb", module.exports);
        }
    }
}, /* 18 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(9);
    if (typeof content === "string") content = [ [ module.i, content, "" ] ];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(2)("ff85a132", content, false);
    // Hot Module Replacement
    if (false) {
        // When the styles change, update the <style> tags
        if (!content.locals) {
            module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0f1924d6!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
                var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0f1924d6!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
                if (typeof newContent === "string") newContent = [ [ module.id, newContent, "" ] ];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() {
            update();
        });
    }
}, /* 19 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(10);
    if (typeof content === "string") content = [ [ module.i, content, "" ] ];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(2)("77358701", content, false);
    // Hot Module Replacement
    if (false) {
        // When the styles change, update the <style> tags
        if (!content.locals) {
            module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-71fc82d6&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Hello.vue", function() {
                var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-71fc82d6&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Hello.vue");
                if (typeof newContent === "string") newContent = [ [ module.id, newContent, "" ] ];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() {
            update();
        });
    }
}, /* 20 */
/***/
function(module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag
    // load the styles
    var content = __webpack_require__(11);
    if (typeof content === "string") content = [ [ module.i, content, "" ] ];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    var update = __webpack_require__(2)("0a62792a", content, false);
    // Hot Module Replacement
    if (false) {
        // When the styles change, update the <style> tags
        if (!content.locals) {
            module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7e853ffb&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HelloAgain.vue", function() {
                var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-7e853ffb&scoped=true!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./HelloAgain.vue");
                if (typeof newContent === "string") newContent = [ [ module.id, newContent, "" ] ];
                update(newContent);
            });
        }
        // When the module is disposed, remove the <style> tags
        module.hot.dispose(function() {
            update();
        });
    }
} ], [ 5 ]);