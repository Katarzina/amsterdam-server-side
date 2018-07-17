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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// COMMON
var FETCH = exports.FETCH = "FETCH";
var REQUEST = exports.REQUEST = 'REQUEST';
var EVENT = exports.EVENT = '_EVENT';
var UPDATE = exports.UPDATE = 'UPDATE';
var ESTABLISHMENT = exports.ESTABLISHMENT = '_ESTABLISHMENT';
var FILTER = exports.FILTER = '_FILTER';
var LOAD = exports.LOAD = 'LOAD';
var INFO = exports.INFO = '_INFO';
var COORDINATE = exports.COORDINATE = '_COORDINATE';
var TITLE = exports.TITLE = '_TITLE';
var CITY = exports.CITY = '_CITY';

// DATA
var DATA_ESTABLISHMENT = exports.DATA_ESTABLISHMENT = './data/establishment-data.json';
var DATA_EVENTS = exports.DATA_EVENTS = './events-data.json';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(8);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(13);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import React from 'react'
import { renderToString } from 'react-dom/server';
import Home from './client/component/Home';*/

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)();
    res.send((0, _renderer2.default)(req, store));
});

app.listen(3000, function () {
    return console.log('listen on port 3000');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(3);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(_Routes2.default, null)
        )
    ));
    return '\n        <html>\n        <head>        \n        </head>\n        <title>kkkkk</title>\n        <body>\n            <div id="root">' + content + '</div>\n            <script src=\'bundle.js\'></script>\n        </body>\n        </html>\n    ';
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(11);

var _Home2 = _interopRequireDefault(_Home);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';*/

//import App from './App';
exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default })
    );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            'ku VERY kkkkkkkkkkkkkkkkkkk'
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    return console.log('click me');
                } },
            'Click'
        )
    );
};

exports.default = Home;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(4);

var _reduxThunk = __webpack_require__(14);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

var _reducer = __webpack_require__(16);

var _reducer2 = _interopRequireDefault(_reducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://localhost:3004/',
        headers: { cookie: req.get('cookie') || '' }
    });

    var store = (0, _redux.createStore)(_reducer2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(4);

var _establishment = __webpack_require__(17);

var _establishment2 = _interopRequireDefault(_establishment);

var _events = __webpack_require__(18);

var _events2 = _interopRequireDefault(_events);

var _details = __webpack_require__(20);

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	establishment: _establishment2.default,
	details: _details2.default,
	events: _events2.default

});

exports.default = rootReducer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.currentSelector = exports.stateSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var _reselect = __webpack_require__(2);

var initialState = {
    isLoaded: false
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var type = action.type,
        payload = action.payload;

    switch (type) {
        case FETCH + _constants.ESTABLISHMENT:
            return _extends({}, state, {
                establishmentSelect: payload,
                dataUnchangable: payload,
                isLoaded: true
            });
        case _constants.UPDATE + _constants.ESTABLISHMENT:
            return _extends({}, state, {
                establishmentSelect: payload
            });
        case _constants.UPDATE + _constants.FILTER + _constants.ESTABLISHMENT:
            return _extends({}, state, {
                establishmentSelect: payload
            });
        case _constants.UPDATE + _constants.FILTER + _constants.TITLE:
            return _extends({}, state, {
                filterTitle: payload
            });
        default:
            return state;
    }
};

var stateSelector = exports.stateSelector = function stateSelector(state) {
    return state['establishment'];
};
var currentSelector = exports.currentSelector = (0, _reselect.createSelector)(stateSelector, function (establishment) {
    return establishment['establishmentSelect'];
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectedEventSelector = exports.stateSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var _get = __webpack_require__(5);

var _get2 = _interopRequireDefault(_get);

var _reselect = __webpack_require__(2);

var _utils = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var type = action.type,
        payload = action.payload;


    switch (type) {
        case _constants.REQUEST + _constants.EVENT:
            return _extends({}, state, {
                eventsSelect: payload
            });
        default:
            return state;
    }
};

var stateSelector = exports.stateSelector = function stateSelector(state) {
    return (0, _get2.default)(state, 'events', {});
};
var selectedEventSelector = exports.selectedEventSelector = (0, _reselect.createSelector)(stateSelector, function (reducer) {
    return (0, _get2.default)(reducer, 'eventsSelect', {});
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var merge = exports.merge = function merge() {
    for (var _len = arguments.length, objs = Array(_len), _key = 0; _key < _len; _key++) {
        objs[_key] = arguments[_key];
    }

    return JSON.parse(JSON.stringify(objs.reduce(function (acc, obj) {
        return Object.assign(acc, obj);
    }, {})));
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coordinateSelector = exports.restaurantDetailsSelector = exports.stateSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var _get = __webpack_require__(5);

var _get2 = _interopRequireDefault(_get);

var _reselect = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];
    var type = action.type,
        payload = action.payload;

    switch (type) {
        case _constants.LOAD + _constants.INFO:
            return _extends({}, state, {
                restaurantDetails: payload
            });
        case _constants.LOAD + _constants.COORDINATE:
            return _extends({}, state, {
                coordinate: payload
            });
        default:
            return state;
    }
};

var stateSelector = exports.stateSelector = function stateSelector(state) {
    return (0, _get2.default)(state, 'details', {});
};
var restaurantDetailsSelector = exports.restaurantDetailsSelector = (0, _reselect.createSelector)(stateSelector, function (reducer) {
    return (0, _get2.default)(reducer, 'restaurantDetails', {});
});
var coordinateSelector = exports.coordinateSelector = (0, _reselect.createSelector)(stateSelector, function (reducer) {
    return (0, _get2.default)(reducer, 'coordinate', {});
});

/***/ })
/******/ ]);