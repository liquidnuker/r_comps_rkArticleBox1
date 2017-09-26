/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _Home = __webpack_require__(2);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

ReactDOM.render(React.createElement(_Home2.default, null), document.getElementById('root'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _RkArticleBox = __webpack_require__(5);

var _RkArticleBox2 = _interopRequireDefault(_RkArticleBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home(props) {
  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "h2",
      { className: "item-id" },
      "rkArticleBox101"
    ),
    React.createElement(
      "div",
      { className: "col-sm-3" },
      "39"
    ),
    React.createElement(
      "div",
      { className: "col-sm-9" },
      React.createElement(_RkArticleBox2.default, null)
    )
  );
}

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RkArticleBox101;
// use export default for async wrap
function RkArticleBox101(props) {
  return React.createElement(
    "div",
    { className: "rkarticlebox101" },
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        { className: "row" },
        React.createElement(
          "div",
          { className: "rkarticlebox101_img-holder" },
          React.createElement("img", { src: "img.jpg", alt: "img alt", title: "img title" })
        ),
        React.createElement(
          "article",
          { role: "article" },
          React.createElement(
            "h2",
            { className: "rkarticlebox101_heading" },
            "Article heading"
          ),
          React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ),
        React.createElement(
          "footer",
          { className: "row rkarticlebox101_extras" },
          React.createElement(
            "p",
            null,
            "extra text Lorem ipsum dolor sit amet"
          ),
          React.createElement(
            "button",
            { "data-message": "button1", className: "btn btn1-01", tabindex: "0" },
            "read more"
          ),
          React.createElement(
            "button",
            { "data-message": "button2", className: "btn btn1-01", tabindex: "0" },
            "read more"
          )
        )
      )
    )
  );
}

/***/ })
/******/ ]);