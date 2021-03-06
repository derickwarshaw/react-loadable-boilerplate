(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./source/client/App/App.js":
/*!**********************************!*\
  !*** ./source/client/App/App.js ***!
  \**********************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet-async */ \"./node_modules/react-helmet-async/lib/index.js\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var universal_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/App */ \"./source/universal/App/index.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    react_helmet_async__WEBPACK_IMPORTED_MODULE_2__[\"HelmetProvider\"],\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"BrowserRouter\"],\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n    )\n  );\n};\n\nvar _default = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, 'App', '/home/username/Projects/react-loadable-boilerplate/source/client/App/App.js');\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/client/App/App.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/client/App/App.js?");

/***/ }),

/***/ "./source/client/App/index.js":
/*!************************************!*\
  !*** ./source/client/App/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./source/client/App/App.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./source/client/App/index.js?");

/***/ }),

/***/ "./source/client/entry/clientSideRender.entry.development.js":
/*!*******************************************************************!*\
  !*** ./source/client/entry/clientSideRender.entry.development.js ***!
  \*******************************************************************/
/*! exports provided: clientSideRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clientSideRender\", function() { return clientSideRender; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var client_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/App */ \"./source/client/App/index.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\nvar containerId = \"react-container\" != undefined ? \"react-container\" : 'react-container';\n\nvar clientSideRender = function clientSideRender() {\n  var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : client_App__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.getElementById(containerId);\n  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {\n    return console.log('clientSideRender');\n  };\n  return Object(react_loadable__WEBPACK_IMPORTED_MODULE_2__[\"preloadReady\"])().then(function () {\n    return container !== null && Object(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_hot_loader__WEBPACK_IMPORTED_MODULE_3__[\"AppContainer\"],\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, null)\n    ), container, callback);\n  });\n};\n\nif ('hot' in module && 'accept' in module.hot) {\n  module.hot.accept(/*! client/App/index.js */ \"./source/client/App/index.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ client_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! client/App/index.js */ \"./source/client/App/index.js\");\n(function () {\n    var ClientApp = __webpack_require__(/*! client/App */ \"./source/client/App/index.js\").default;\n    console.log('hmr clientSideRender');\n    clientSideRender(ClientApp);\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}\n\nclientSideRender();\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(containerId, 'containerId', '/home/username/Projects/react-loadable-boilerplate/source/client/entry/clientSideRender.entry.development.js');\n  reactHotLoader.register(clientSideRender, 'clientSideRender', '/home/username/Projects/react-loadable-boilerplate/source/client/entry/clientSideRender.entry.development.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/client/entry/clientSideRender.entry.development.js?");

/***/ }),

/***/ "./source/universal/App/App.js":
/*!*************************************!*\
  !*** ./source/universal/App/App.js ***!
  \*************************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var universal_Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/Routes */ \"./source/universal/Routes/index.js\");\n/* harmony import */ var universal_components_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/Page */ \"./source/universal/components/Page/index.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\nvar App = function App() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    universal_components_Page__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(universal_Routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  );\n};\n\nvar _default = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, 'App', '/home/username/Projects/react-loadable-boilerplate/source/universal/App/App.js');\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/universal/App/App.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/universal/App/App.js?");

/***/ }),

/***/ "./source/universal/App/index.js":
/*!***************************************!*\
  !*** ./source/universal/App/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./source/universal/App/App.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./source/universal/App/index.js?");

/***/ }),

/***/ "./source/universal/Routes/Routes.js":
/*!*******************************************!*\
  !*** ./source/universal/Routes/Routes.js ***!
  \*******************************************/
/*! exports provided: Routes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Routes\", function() { return Routes; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var universal_pages_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/pages/IndexPage */ \"./source/universal/pages/IndexPage/index.js\");\n/* harmony import */ var universal_pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/pages/NotFoundPage */ \"./source/universal/pages/NotFoundPage/index.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\nvar Routes = function Routes() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n    null,\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { exact: true, path: '/', component: universal_pages_IndexPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], { component: universal_pages_NotFoundPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"] })\n  );\n};\n\nvar _default = Routes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Routes, 'Routes', '/home/username/Projects/react-loadable-boilerplate/source/universal/Routes/Routes.js');\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/universal/Routes/Routes.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/universal/Routes/Routes.js?");

/***/ }),

/***/ "./source/universal/Routes/index.js":
/*!******************************************!*\
  !*** ./source/universal/Routes/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routes */ \"./source/universal/Routes/Routes.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./source/universal/Routes/index.js?");

/***/ }),

/***/ "./source/universal/components/Center/Center.js":
/*!******************************************************!*\
  !*** ./source/universal/components/Center/Center.js ***!
  \******************************************************/
/*! exports provided: Center, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Center\", function() { return Center; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\nvar Center = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: 'Center',\n  componentId: 's1591g59-0'\n})(['position:relative;text-align:center;top:50%;transform:perspective(1px) translateY(-50%);']);\n\nvar _default = Center;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Center, 'Center', '/home/username/Projects/react-loadable-boilerplate/source/universal/components/Center/Center.js');\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/universal/components/Center/Center.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/universal/components/Center/Center.js?");

/***/ }),

/***/ "./source/universal/components/Center/index.js":
/*!*****************************************************!*\
  !*** ./source/universal/components/Center/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Center__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Center */ \"./source/universal/components/Center/Center.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Center__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./source/universal/components/Center/index.js?");

/***/ }),

/***/ "./source/universal/components/Page/Page.js":
/*!**************************************************!*\
  !*** ./source/universal/components/Page/Page.js ***!
  \**************************************************/
/*! exports provided: Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Page\", function() { return Page; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\nvar Page = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: 'Page',\n  componentId: 's1tu64uk-0'\n})(['background-color:', ';height:100%;margin:0;padding:0;width:100%;'], function (props) {\n  return props.backgroundColor;\n});\n\nvar _default = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Page, 'Page', '/home/username/Projects/react-loadable-boilerplate/source/universal/components/Page/Page.js');\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/universal/components/Page/Page.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/universal/components/Page/Page.js?");

/***/ }),

/***/ "./source/universal/components/Page/index.js":
/*!***************************************************!*\
  !*** ./source/universal/components/Page/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page */ \"./source/universal/components/Page/Page.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./source/universal/components/Page/index.js?");

/***/ }),

/***/ "./source/universal/components/Text/Text.js":
/*!**************************************************!*\
  !*** ./source/universal/components/Text/Text.js ***!
  \**************************************************/
/*! exports provided: Text, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.es.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: 'Text',\n  componentId: 's4x4i9j-0'\n})(['font-size:', ';'], function (props) {\n  return props.fontSize;\n});\n\nvar _default = Text;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Text, 'Text', '/home/username/Projects/react-loadable-boilerplate/source/universal/components/Text/Text.js');\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/universal/components/Text/Text.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/universal/components/Text/Text.js?");

/***/ }),

/***/ "./source/universal/components/Text/index.js":
/*!***************************************************!*\
  !*** ./source/universal/components/Text/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text */ \"./source/universal/components/Text/Text.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _Text__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n//# sourceURL=webpack:///./source/universal/components/Text/index.js?");

/***/ }),

/***/ "./source/universal/pages/IndexPage/index.js":
/*!***************************************************!*\
  !*** ./source/universal/pages/IndexPage/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var universal_pages_LoadingPage_LoadingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/pages/LoadingPage/LoadingPage */ \"./source/universal/pages/LoadingPage/LoadingPage.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\nvar _default = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./IndexPage */ \"./source/universal/pages/IndexPage/IndexPage.js\"));\n  },\n  modules: ['./IndexPage'],\n  webpack: function webpack() {\n    return [/*require.resolve*/(/*! ./IndexPage */ \"./source/universal/pages/IndexPage/IndexPage.js\")];\n  },\n  loading: universal_pages_LoadingPage_LoadingPage__WEBPACK_IMPORTED_MODULE_1__[\"LoadingPage\"]\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/universal/pages/IndexPage/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/universal/pages/IndexPage/index.js?");

/***/ }),

/***/ "./source/universal/pages/LoadingPage/LoadingPage.js":
/*!***********************************************************!*\
  !*** ./source/universal/pages/LoadingPage/LoadingPage.js ***!
  \***********************************************************/
/*! exports provided: LoadingPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LoadingPage\", function() { return LoadingPage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ \"./node_modules/react-helmet-async/lib/index.js\");\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var universal_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! universal/components/Page */ \"./source/universal/components/Page/index.js\");\n/* harmony import */ var universal_components_Center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! universal/components/Center */ \"./source/universal/components/Center/index.js\");\n/* harmony import */ var universal_components_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! universal/components/Text */ \"./source/universal/components/Text/index.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\n\n\n\nvar LoadingPage = function LoadingPage() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n    universal_components_Page__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    { backgroundColor: '#4CAF50' },\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default.a,\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'title',\n        null,\n        'Loading...'\n      )\n    ),\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      universal_components_Center__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      null,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        universal_components_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        { fontSize: '10vw' },\n        'Loading...'\n      )\n    )\n  );\n};\n\nvar _default = LoadingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(LoadingPage, 'LoadingPage', '/home/username/Projects/react-loadable-boilerplate/source/universal/pages/LoadingPage/LoadingPage.js');\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/universal/pages/LoadingPage/LoadingPage.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/universal/pages/LoadingPage/LoadingPage.js?");

/***/ }),

/***/ "./source/universal/pages/NotFoundPage/index.js":
/*!******************************************************!*\
  !*** ./source/universal/pages/NotFoundPage/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ \"./node_modules/react-loadable/lib/index.js\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var universal_pages_LoadingPage_LoadingPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal/pages/LoadingPage/LoadingPage */ \"./source/universal/pages/LoadingPage/LoadingPage.js\");\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n\n\n\n\nvar _default = react_loadable__WEBPACK_IMPORTED_MODULE_0___default()({\n  loader: function loader() {\n    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./NotFoundPage */ \"./source/universal/pages/NotFoundPage/NotFoundPage.js\"));\n  },\n  modules: ['./NotFoundPage'],\n  webpack: function webpack() {\n    return [/*require.resolve*/(/*! ./NotFoundPage */ \"./source/universal/pages/NotFoundPage/NotFoundPage.js\")];\n  },\n  loading: universal_pages_LoadingPage_LoadingPage__WEBPACK_IMPORTED_MODULE_1__[\"LoadingPage\"]\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, 'default', '/home/username/Projects/react-loadable-boilerplate/source/universal/pages/NotFoundPage/index.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./source/universal/pages/NotFoundPage/index.js?");

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************************************************!*\
  !*** multi webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false ./source/client/entry/clientSideRender.entry.development.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false */\"./node_modules/webpack-hot-middleware/client.js?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false\");\nmodule.exports = __webpack_require__(/*! /home/username/Projects/react-loadable-boilerplate/source/client/entry/clientSideRender.entry.development.js */\"./source/client/entry/clientSideRender.entry.development.js\");\n\n\n//# sourceURL=webpack:///multi_webpack-hot-middleware/client?");

/***/ })

},[[0,"bootstrap","vendor"]]]);