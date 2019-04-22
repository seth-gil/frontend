(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/*! exports provided: ROOT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT", function() { return ROOT; });
var ROOT = "http://ec2-54-205-66-183.compute-1.amazonaws.com:5000";

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Navigator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Navigator */ "./src/components/Navigator.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Projects */ "./src/pages/Projects.js");
/* harmony import */ var _pages_Project__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/Project */ "./src/pages/Project.js");
/* harmony import */ var _pages_NewProject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/NewProject */ "./src/pages/NewProject.js");





var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/App.js";









var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _React$Component);

  function App() {
    Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navigator__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          marginTop: "15px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/",
        exact: true,
        component: _pages_Home__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/projects/",
        component: _pages_Projects__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/project/:id/",
        component: _pages_Project__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
        path: "/new/",
        component: _pages_NewProject__WEBPACK_IMPORTED_MODULE_12__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/GridBox.js":
/*!***********************************!*\
  !*** ./src/components/GridBox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/Card.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../API */ "./src/API.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/components/GridBox.js";





function GridBox(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    style: {
      color: "inherit",
      textDecoration: "none"
    },
    to: "/project/".concat(props._id.$oid),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Img, {
    variant: "top",
    src: "".concat(_API__WEBPACK_IMPORTED_MODULE_3__["ROOT"], "/").concat(props._id.$oid, "/0.jpg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_1___default.a.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.description))));
}

/***/ }),

/***/ "./src/components/ImageInput.js":
/*!**************************************!*\
  !*** ./src/components/ImageInput.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageInput; });
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/components/ImageInput.js";



var ImageInput =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ImageInput, _React$Component);

  function ImageInput() {
    var _this;

    Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ImageInput);

    _this = Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ImageInput).call(this));
    _this.input = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    _this.state = {
      displayText: "No images chosen"
    };
    return _this;
  }

  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageInput, [{
    key: "getDisplayText",
    value: function getDisplayText(event) {
      var files = event.target.files,
          text;
      if (files.length) text = files.length > 1 ? "".concat(files.length, " images") : files[0].name;else text = "No images chosen";
      this.setState({
        displayText: text
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "custom-file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        ref: this.input,
        className: "custom-file-input",
        type: "file",
        name: "request",
        multiple: true,
        accept: "image/*",
        onChange: function onChange(event) {
          _this2.getDisplayText(event);

          _this2.props.onChange(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("label", {
        className: "custom-file-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.displayText)));
    }
  }]);

  return ImageInput;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/components/Navigator.js":
/*!*************************************!*\
  !*** ./src/components/Navigator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigator; });
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/Nav.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/Navbar.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/components/Navigator.js";



 //import {Link} from "react-router-dom";

var Navigator =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigator, _React$Component);

  function Navigator() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigator);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigator)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      active: 1
    };

    _this.handleSelect = function (k) {
      _this.setState({
        active: k
      });

      console.log(k, _this.state.active);
    };

    return _this;
  }

  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigator, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          zIndex: 10
        },
        bg: "light",
        expand: "lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default.a.Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Animatrix"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default.a.Toggle, {
        "aria-controls": "basic-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_7___default.a.Collapse, {
        id: "basic-navbar-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "justify-content-center",
        onSelect: function onSelect(k) {
          return _this2.handleSelect(k);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_8__["LinkContainer"], {
        exact: true,
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Link, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_8__["LinkContainer"], {
        to: "/new/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Link, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "New"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_8__["LinkContainer"], {
        to: "/projects/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_6___default.a.Link, {
        title: "Projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Projects"))))));
    }
  }]);

  return Navigator;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/Modal.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NewProject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NewProject */ "./src/pages/NewProject.js");





var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/pages/Home.js";





var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  function Home() {
    var _this;

    Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).call(this));
    _this.state = {
      modalShow: false
    };
    return _this;
  }

  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "handleShow",
    value: function handleShow() {
      this.setState({
        modalShow: true
      });
    }
  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        modalShow: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        style: {
          textAlign: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Welcome to Animatrix!"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "The free online stop-motion animation software."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
        variant: "secondary",
        onClick: this.handleShow.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Get started")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a, {
        show: this.state.modalShow,
        onHide: this.handleClose.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a.Header, {
        closeButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a.Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Let's get started!")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7___default.a.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NewProject__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/pages/NewProject.js":
/*!*********************************!*\
  !*** ./src/pages/NewProject.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewProject; });
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/Form.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/Button.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/Col.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ImageInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ImageInput */ "./src/components/ImageInput.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../API */ "./src/API.js");





var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/pages/NewProject.js";









var NewProject =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NewProject, _React$Component);

  function NewProject(props) {
    var _this2;

    Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NewProject);

    _this2 = Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NewProject).call(this, props));

    _this2.setFrames = function (frames) {
      _this2.setState({
        frames: frames
      });
    };

    _this2.state = {
      name: "default",
      description: "default",
      files: "default",
      framerate: "default",
      frames: [],
      redirect: null,
      pendingSubmit: false,
      submitted: false
    };
    return _this2;
  }

  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NewProject, [{
    key: "shrinkImages",
    value: function shrinkImages(files) {
      var readers = Array(files.length),
          frames = Array(files.length),
          images = Array(files.length),
          canvas,
          context,
          _this = this;

      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.width = 600;
      canvas.height = 450;

      for (var i = 0; i < files.length; i++) {
        (function (file, index) {
          readers[index] = new FileReader(); // init a file reader

          readers[index].onloadend = function () {
            // shrink image
            images[index] = document.createElement('img');
            images[index].src = this.result;
            jquery__WEBPACK_IMPORTED_MODULE_8___default()(images[index]).on("load", function () {
              context.clearRect(0, 0, canvas.width, canvas.height);
              context.drawImage(this, 0, 0, 600, 450);
              frames[index] = {
                time: file.lastModified,
                frame: canvas.toDataURL('image/jpeg', 0.50)
              };

              _this.setFrames(frames);
            });
          };

          readers[index].readAsDataURL(file);
        })(files[i], i);
      }
    }
  }, {
    key: "handleFileSelect",
    value: function handleFileSelect(event) {
      this.setState({
        files: event.target.files,
        frames: Array(event.target.files.length)
      });
      this.shrinkImages(event.target.files);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.setState({
        pendingSubmit: true
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.files.length == this.state.frames.length && this.state.pendingSubmit && !this.state.submitted) {
        var _this = this,
            frames = this.state.frames; // frames = frames.map(frame => {
        //     return frame.substr(23);
        // })


        frames = frames.sort(function (a, b) {
          // Sort
          if (a.time > b.time) return 1;
          if (b.time > a.time) return -1;
        }).map(function (frame) {
          // Remove time key
          return frame.frame;
        });
        console.log(frames);
        fetch(_API__WEBPACK_IMPORTED_MODULE_12__["ROOT"] + "/api/v1/project", {
          method: "POST",
          //body: formData
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.state.name,
            description: this.state.description,
            framerate: this.state.framerate,
            frames: frames
          })
        }).then(function (res) {
          res.text().then(function (id) {
            console.log(id);

            _this.setState({
              redirect: "/project/".concat(id)
            });
          });
        }).catch(function (err) {
          console.log("Error", err);
        });
        this.setState({
          submitted: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      //console.log(this.state.frames);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, !this.state.redirect ? !this.state.pendingSubmit ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a, {
        onSubmit: this.handleSubmit.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "What do you want to call your new project?"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Control, {
        onChange: function onChange(event) {
          return _this3.setState({
            name: event.target.value
          });
        },
        type: "text",
        placeholder: "Enter project name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Describe your new project"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Control, {
        onChange: function onChange(event) {
          return _this3.setState({
            description: event.target.value
          });
        },
        as: "textarea",
        rows: "3",
        placeholder: "Enter project description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        sm: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Choose images"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_ImageInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: this.handleFileSelect.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default.a, {
        sm: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Label, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Choose framerate (fps)"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Control, {
        as: "select",
        onChange: function onChange(event) {
          var sel = event.target;

          _this3.setState({
            framerate: sel.options[sel.selectedIndex].value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "-- Please select --"), " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "1"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "15",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "15"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "20"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "25",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "25"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("option", {
        value: "30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "30"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6___default.a.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Create"))) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Submitting data...") : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_11__["Redirect"], {
        to: this.state.redirect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }));
    }
  }]);

  return NewProject;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/pages/Project.js":
/*!******************************!*\
  !*** ./src/pages/Project.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/Container.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../API */ "./src/API.js");





var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/pages/Project.js";





var Project =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Project, _React$Component);

  function Project(props) {
    var _this;

    Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Project);

    _this = Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Project).call(this, props));
    _this.state = {
      id: props.match.params.id,
      loaded: false,
      data: null
    };
    return _this;
  }

  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Project, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      jquery__WEBPACK_IMPORTED_MODULE_6___default.a.getJSON("".concat(_API__WEBPACK_IMPORTED_MODULE_8__["ROOT"], "/api/v1/project/").concat(this.state.id)).done(function (data) {
        console.log(data);
        data.id = data._id.$oid;

        _this2.setState({
          data: data,
          loaded: true
        });
      }).fail(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.data);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          maxWidth: "600px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, this.state.loaded ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.state.data.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, this.state.data.description), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        style: {
          marginTop: "10px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Preview:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("video", {
        style: {
          width: "100%"
        },
        controls: true,
        className: "embed-responsive-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("source", {
        src: "".concat(_API__WEBPACK_IMPORTED_MODULE_8__["ROOT"], "/").concat(this.state.id, "/preview.mp4"),
        type: "video/mp4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })))) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Loading project data..."));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./src/pages/Projects.js":
/*!*******************************!*\
  !*** ./src/pages/Projects.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_GridBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/GridBox */ "./src/components/GridBox.js");
/* harmony import */ var react_bootstrap_CardColumns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/CardColumns */ "./node_modules/react-bootstrap/CardColumns.js");
/* harmony import */ var react_bootstrap_CardColumns__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_CardColumns__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../API */ "./src/API.js");






var _jsxFileName = "/Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/pages/Projects.js";






var Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Projects, _React$Component);

  function Projects() {
    var _getPrototypeOf2;

    var _this2;

    Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Projects);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this2.state = {
      data: null
    };
    return _this2;
  }

  Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Projects, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      fetch(_API__WEBPACK_IMPORTED_MODULE_10__["ROOT"] + "/api/v1/projects", {
        method: "GET"
      }).then(function (res) {
        res.json().then(function (data) {
          console.log(data);

          _this.setState({
            data: data
          });
        });
      }).catch(function (err) {
        console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_CardColumns__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.state.data ? this.state.data.map(function (project, index) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_GridBox__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_Users_gilbertvirgo_Desktop_animatrix_v2_frontend_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, project, {
          key: index
        }), null);
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Loading projects...")));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gilbertvirgo/Desktop/animatrix-v2/frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map