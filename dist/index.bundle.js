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

var _RkArticleBox = __webpack_require__(3);

var _RkArticleBox2 = _interopRequireDefault(_RkArticleBox);

var _RkArticleBox3 = __webpack_require__(4);

var _RkArticleBox4 = _interopRequireDefault(_RkArticleBox3);

var _RkArticleBox5 = __webpack_require__(5);

var _RkArticleBox6 = _interopRequireDefault(_RkArticleBox5);

var _RkArticleBox7 = __webpack_require__(6);

var _RkArticleBox8 = _interopRequireDefault(_RkArticleBox7);

var _RkArticleBox9 = __webpack_require__(7);

var _RkArticleBox10 = _interopRequireDefault(_RkArticleBox9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
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
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "h2",
        { className: "item-id" },
        "rkArticleBox102"
      ),
      React.createElement(
        "div",
        { className: "col-sm-3" },
        "39"
      ),
      React.createElement(
        "div",
        { className: "col-sm-9" },
        React.createElement(_RkArticleBox4.default, null)
      )
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "h2",
        { className: "item-id" },
        "rkArticleBox103"
      ),
      React.createElement(
        "div",
        { className: "col-sm-3" },
        "39"
      ),
      React.createElement(
        "div",
        { className: "col-sm-9" },
        React.createElement(_RkArticleBox6.default, null)
      )
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "h2",
        { className: "item-id" },
        "rkArticleBox104"
      ),
      React.createElement(
        "div",
        { className: "col-sm-3" },
        "39"
      ),
      React.createElement(
        "div",
        { className: "col-sm-9" },
        React.createElement(_RkArticleBox8.default, null)
      )
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "h2",
        { className: "item-id" },
        "rkArticleBox105"
      ),
      React.createElement(
        "div",
        { className: "col-sm-3" },
        "39"
      ),
      React.createElement(
        "div",
        { className: "col-sm-9" },
        React.createElement(_RkArticleBox10.default, null)
      )
    )
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function RkArticleBox101_imgHolder(props) {
  return React.createElement(
    "div",
    { className: "rkarticlebox101_img-holder" },
    React.createElement("img", { src: "img.jpg", alt: "img alt", title: "img title" })
  );
}

function RkArticleBox101_extras(props) {
  return React.createElement(
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
  );
}

function RkArticleBox101_article(props) {
  return React.createElement(
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
  );
}

var RkArticleBox101 = function (_React$Component) {
  _inherits(RkArticleBox101, _React$Component);

  function RkArticleBox101(props) {
    _classCallCheck(this, RkArticleBox101);

    var _this = _possibleConstructorReturn(this, (RkArticleBox101.__proto__ || Object.getPrototypeOf(RkArticleBox101)).call(this, props));

    _this.state = {
      property1: ""
    };

    // 
    // this.method1 = this.method1.bind(this);
    return _this;
  }

  // lifecycle hooks

  // methods


  _createClass(RkArticleBox101, [{
    key: "method1",
    value: function method1() {
      this.setState(function (prevState) {
        return {
          // property1: store.state
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "rkarticlebox101" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            { className: "row" },
            React.createElement(RkArticleBox101_imgHolder, null),
            React.createElement(RkArticleBox101_article, null),
            React.createElement(RkArticleBox101_extras, null)
          )
        )
      );
    }
  }]);

  return RkArticleBox101;
}(React.Component);

exports.default = RkArticleBox101;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RkrkArticleBox102 = function (_React$Component) {
  _inherits(RkrkArticleBox102, _React$Component);

  function RkrkArticleBox102(props) {
    _classCallCheck(this, RkrkArticleBox102);

    var _this = _possibleConstructorReturn(this, (RkrkArticleBox102.__proto__ || Object.getPrototypeOf(RkrkArticleBox102)).call(this, props));

    _this.state = {
      property1: ""
    };

    // 
    // this.method1 = this.method1.bind(this);
    return _this;
  }

  // lifecycle hooks

  // methods


  _createClass(RkrkArticleBox102, [{
    key: "method1",
    value: function method1() {
      this.setState(function (prevState) {
        return {
          // property1: store.state
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "rkarticlebox102" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              "header",
              { className: "rkarticlebox102_article-title" },
              React.createElement(
                "h3",
                { className: "rkarticlebox102_heading1" },
                "Article heading1"
              ),
              React.createElement(
                "p",
                null,
                "Lorem ipsum dolor sit amet, elit, sed do eiusmod"
              )
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "rkarticlebox102_img-holder" },
                React.createElement("img", { src: "img.jpg", alt: "img alt", title: "img title" })
              ),
              React.createElement(
                "article",
                { role: "article" },
                React.createElement(
                  "h3",
                  { className: "rkarticlebox102_heading2" },
                  "Article heading2"
                ),
                React.createElement(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              )
            ),
            React.createElement(
              "footer",
              { className: "rkarticlebox102_extras" },
              React.createElement(
                "p",
                null,
                "extra text"
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
  }]);

  return RkrkArticleBox102;
}(React.Component);

exports.default = RkrkArticleBox102;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RkArticleBox103 = function (_React$Component) {
  _inherits(RkArticleBox103, _React$Component);

  function RkArticleBox103(props) {
    _classCallCheck(this, RkArticleBox103);

    var _this = _possibleConstructorReturn(this, (RkArticleBox103.__proto__ || Object.getPrototypeOf(RkArticleBox103)).call(this, props));

    _this.state = {
      property1: ""
    };

    // 
    _this.method1 = _this.method1.bind(_this);
    return _this;
  }

  // lifecycle hooks

  // methods


  _createClass(RkArticleBox103, [{
    key: "method1",
    value: function method1() {
      this.setState(function (prevState) {
        return {
          property1: store.state
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "rkarticlebox103" },
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              "header",
              null,
              React.createElement(
                "h3",
                { className: "rkarticlebox103_heading1" },
                "Article title"
              ),
              React.createElement(
                "p",
                null,
                "Lorem ipsum dolor sit amet, elit, sed do eiusmod"
              ),
              React.createElement(
                "ul",
                { className: "row rkarticlebox103_title-info" },
                React.createElement(
                  "li",
                  null,
                  "\xA9\xA0Date posted"
                ),
                React.createElement(
                  "li",
                  null,
                  "Author"
                ),
                React.createElement(
                  "li",
                  null,
                  "Posted in Category"
                ),
                React.createElement(
                  "li",
                  null,
                  "comments\xA0",
                  React.createElement(
                    "span",
                    { className: "rkarticlebox103_badge" },
                    "12"
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "rkarticlebox103_img-holder" },
                React.createElement("img", { src: "img.jpg", alt: "img alt", title: "img title" })
              ),
              React.createElement(
                "article",
                { role: "article" },
                React.createElement(
                  "h3",
                  { className: "rkarticlebox103_heading2" },
                  "Article heading"
                ),
                React.createElement(
                  "p",
                  null,
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                )
              )
            ),
            React.createElement(
              "footer",
              { className: "rkarticlebox103_extras" },
              React.createElement(
                "p",
                null,
                "extra text"
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
  }]);

  return RkArticleBox103;
}(React.Component);

exports.default = RkArticleBox103;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RkrkArticleBox104 = function (_React$Component) {
  _inherits(RkrkArticleBox104, _React$Component);

  function RkrkArticleBox104(props) {
    _classCallCheck(this, RkrkArticleBox104);

    var _this = _possibleConstructorReturn(this, (RkrkArticleBox104.__proto__ || Object.getPrototypeOf(RkrkArticleBox104)).call(this, props));

    _this.state = {
      property1: ""
    };

    // 
    // this.method1 = this.method1.bind(this);
    return _this;
  }

  // lifecycle hooks

  // methods


  _createClass(RkrkArticleBox104, [{
    key: "method1",
    value: function method1() {
      this.setState(function (prevState) {
        return {
          // property1: store.state
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row rkarticlebox104" },
        React.createElement(
          "div",
          { className: "rkarticlebox104_img-holder" },
          React.createElement("img", { src: "img.jpg", alt: "img alt", title: "img title" })
        ),
        React.createElement(
          "article",
          { role: "article" },
          React.createElement(
            "h2",
            { className: "rkarticlebox104_heading" },
            "Article heading"
          ),
          React.createElement("hr", null),
          React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        )
      );
    }
  }]);

  return RkrkArticleBox104;
}(React.Component);

exports.default = RkrkArticleBox104;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RkrkArticleBox105 = function (_React$Component) {
  _inherits(RkrkArticleBox105, _React$Component);

  function RkrkArticleBox105(props) {
    _classCallCheck(this, RkrkArticleBox105);

    var _this = _possibleConstructorReturn(this, (RkrkArticleBox105.__proto__ || Object.getPrototypeOf(RkrkArticleBox105)).call(this, props));

    _this.state = {
      // property1: ""
    };

    // 
    // this.method1 = this.method1.bind(this);
    return _this;
  }

  // lifecycle hooks

  // methods


  _createClass(RkrkArticleBox105, [{
    key: "method1",
    value: function method1() {
      this.setState(function (prevState) {
        return {
          // property1: store.state
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "rkarticlebox105" },
        React.createElement(
          "div",
          { className: "rkarticlebox105_img-holder" },
          React.createElement("img", { src: "img.jpg", alt: "img alt", title: "img title" }),
          React.createElement(
            "h3",
            { className: "rkarticlebox105_img-holder_heading" },
            "Img title"
          ),
          React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ),
          React.createElement(
            "button",
            { "data-message": "button1", className: "btn btn1-01", tabindex: "0" },
            "button1"
          ),
          React.createElement(
            "button",
            { "data-message": "button2", className: "btn btn1-01", tabindex: "0" },
            "button2"
          )
        ),
        React.createElement(
          "article",
          { role: "article" },
          React.createElement(
            "h3",
            { className: "rkarticlebox105_heading" },
            "Article title"
          ),
          React.createElement("hr", null),
          React.createElement(
            "p",
            null,
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          )
        ),
        React.createElement(
          "footer",
          { className: "rkarticlebox105_extras" },
          React.createElement(
            "button",
            { "data-message": "button1", className: "btn btn1-01", tabindex: "0" },
            "extra button"
          )
        )
      );
    }
  }]);

  return RkrkArticleBox105;
}(React.Component);

exports.default = RkrkArticleBox105;

/***/ })
/******/ ]);