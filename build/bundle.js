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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.currentSelector = exports.stateSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _reselect = __webpack_require__(7);

var initialState = {
    isLoaded: false
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var type = action.type,
        payload = action.payload;

    switch (type) {
        case _constants.FETCH + _constants.ESTABLISHMENT:
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchEvents = exports.fetchEstablishments = exports.receiveQuery = exports.updateTitle = exports.loadCoordinate = exports.loadInfoEstablishment = exports.updateFilterEstablishment = exports.updateArrayEstablishment = undefined;

var _constants = __webpack_require__(4);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//import axios from 'axios'

var A = function A(type) {
    return function (payload) {
        return { type: type, payload: payload };
    };
};

var updateArrayEstablishment = exports.updateArrayEstablishment = A(_constants.UPDATE + _constants.ESTABLISHMENT);

var updateFilterEstablishment = exports.updateFilterEstablishment = A(_constants.UPDATE + _constants.FILTER + _constants.ESTABLISHMENT);

var loadInfoEstablishment = exports.loadInfoEstablishment = A(_constants.LOAD + _constants.INFO);

var loadCoordinate = exports.loadCoordinate = A(_constants.LOAD + _constants.COORDINATE);

var updateTitle = exports.updateTitle = A(_constants.UPDATE + _constants.FILTER + _constants.TITLE);

var receiveQuery = exports.receiveQuery = function receiveQuery(type, payload) {
    return {
        type: type,
        payload: payload
    };
};

var fetchEstablishments = exports.fetchEstablishments = function fetchEstablishments() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/establishment');

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: _constants.FETCH + _constants.ESTABLISHMENT,
                                payload: res.data
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var fetchEvents = exports.fetchEvents = function fetchEvents() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/events');

                        case 2:
                            res = _context2.sent;

                            dispatch({
                                type: _constants.FETCH + _constants.EVENTS,
                                payload: res.data
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// COMMON
var FETCH = exports.FETCH = "FETCH";
var REQUEST = exports.REQUEST = 'REQUEST';
var EVENTS = exports.EVENTS = '_EVENTS';
var UPDATE = exports.UPDATE = 'UPDATE';
var ESTABLISHMENT = exports.ESTABLISHMENT = '_ESTABLISHMENT';
var FILTER = exports.FILTER = '_FILTER';
var LOAD = exports.LOAD = 'LOAD';
var INFO = exports.INFO = '_INFO';
var COORDINATE = exports.COORDINATE = '_COORDINATE';
var TITLE = exports.TITLE = '_TITLE';
var CITY = exports.CITY = '_CITY';
var USERS = exports.USERS = '_USERS';

// DATA
var DATA_ESTABLISHMENT = exports.DATA_ESTABLISHMENT = './data/establishment-data.json';
var DATA_EVENTS = exports.DATA_EVENTS = './events-data.json';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// latitude longitude to km
var calculateDistance = exports.calculateDistance = function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // km
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var latRad1 = toRad(lat1);
    var latRad2 = toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(latRad1) * Math.cos(latRad2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

var toRad = function toRad(value) {
    return value * Math.PI / 180;
};

var commaToPointReplace = exports.commaToPointReplace = function commaToPointReplace() {
    var jsonString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return jsonString.replace(',', '.');
};

var filterByTitle = exports.filterByTitle = function filterByTitle(data, value) {
    return data.filter(function (_ref) {
        var title = _ref.title;

        return title.toLowerCase().includes(value);
    });
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coordinateSelector = exports.restaurantDetailsSelector = exports.stateSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _get = __webpack_require__(13);

var _get2 = _interopRequireDefault(_get);

var _reselect = __webpack_require__(7);

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectedEventSelector = exports.stateSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(4);

var _get = __webpack_require__(13);

var _get2 = _interopRequireDefault(_get);

var _reselect = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var type = action.type,
        payload = action.payload;


    switch (type) {
        case _constants.FETCH + _constants.EVENTS:
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
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _AppRoutes = __webpack_require__(21);

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

var _HomePage = __webpack_require__(23);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(24);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _EstablishmentsPage = __webpack_require__(25);

var _EstablishmentsPage2 = _interopRequireDefault(_EstablishmentsPage);

var _EventsPage = __webpack_require__(44);

var _EventsPage2 = _interopRequireDefault(_EventsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _AppRoutes2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _EstablishmentsPage2.default, {
        path: '/establishment'
    }), _extends({}, _EventsPage2.default, {
        path: '/events'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

var _express = __webpack_require__(18);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(19);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(39);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(6);

var _Routes = __webpack_require__(12);

var _Routes2 = _interopRequireDefault(_Routes);

var _expressHttpProxy = __webpack_require__(43);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import React from 'react'
import { renderToString } from 'react-dom/server';
import Home from './client/component/Home';*/

var app = (0, _express2.default)();

app.use('/assets', _express2.default.static('assets'));

app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:3004', {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)();
    console.log((0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path));
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    });
    console.log(promises);
    Promise.all(promises).then(function () {
        res.send((0, _renderer2.default)(req, store));
    });
});

app.listen(3000, function () {
    return console.log('listen on port 3000');
});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(11);

var _Routes = __webpack_require__(12);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(6);

var _serializeJavascript = __webpack_require__(38);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));
    return '\n        <html>\n        <head>\n            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">\n            <link rel="stylesheet" href="/assets/main.css">     \n            <link rel="stylesheet" href="https://unpkg.com/react-select@1.2.1/dist/react-select.css">\n        </head>\n        <title>SSR React Redux applicaton</title>\n        <body>\n            <div id="root">' + content + '</div>\n            <script>\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n            </script>\n            <script src=\'bundle.js\'></script>\n        </body>\n        </html>\n    ';
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(6);

var _Header = __webpack_require__(22);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { fetchCurrentUser } from './actions';

var AppRoutes = function AppRoutes(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: AppRoutes
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;


    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'ul',
                { className: '' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/establishment' },
                        'Establishment'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/events' },
                        'Events'
                    )
                )
            )
        )
    );
};

exports.default = Header;

/***/ }),
/* 23 */
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

exports.default = {
    component: Home
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'h1',
        null,
        'Ooops, route not found.'
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _action = __webpack_require__(3);

var _establishment = __webpack_require__(2);

var _SearchBarTitle = __webpack_require__(26);

var _SearchBarTitle2 = _interopRequireDefault(_SearchBarTitle);

var _SearchBarCity = __webpack_require__(27);

var _SearchBarCity2 = _interopRequireDefault(_SearchBarCity);

var _SortTable = __webpack_require__(29);

var _SortTable2 = _interopRequireDefault(_SortTable);

var _EventsInfo = __webpack_require__(32);

var _EventsInfo2 = _interopRequireDefault(_EventsInfo);

var _MapContainer = __webpack_require__(33);

var _MapContainer2 = _interopRequireDefault(_MapContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { Helmet } from 'react-helmet';


var EstablishmentsList = function (_Component) {
    _inherits(EstablishmentsList, _Component);

    function EstablishmentsList() {
        _classCallCheck(this, EstablishmentsList);

        return _possibleConstructorReturn(this, (EstablishmentsList.__proto__ || Object.getPrototypeOf(EstablishmentsList)).apply(this, arguments));
    }

    _createClass(EstablishmentsList, [{
        key: 'render',
        value: function render() {
            var _props$establishment$ = this.props.establishment.establishmentSelect,
                establishmentSelect = _props$establishment$ === undefined ? [] : _props$establishment$;


            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12 col-md-6' },
                        _react2.default.createElement(_SearchBarTitle2.default, null),
                        _react2.default.createElement(_SearchBarCity2.default, null),
                        _react2.default.createElement(_SortTable2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12 col-md-6' },
                        _react2.default.createElement(_MapContainer2.default, null),
                        _react2.default.createElement(_EventsInfo2.default, null)
                    )
                )
            );
        }
    }]);

    return EstablishmentsList;
}(_react.Component);

function loadData(store) {
    return store.dispatch((0, _action.fetchEstablishments)());
}

function mapStateToProps(state) {
    return { establishment: (0, _establishment.stateSelector)(state),
        establishmentSelect: (0, _establishment.currentSelector)(state) };
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchEstablishments: _action.fetchEstablishments })(EstablishmentsList)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _action = __webpack_require__(3);

var _establishment = __webpack_require__(2);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBarTitle = function (_Component) {
    _inherits(SearchBarTitle, _Component);

    function SearchBarTitle() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchBarTitle);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchBarTitle.__proto__ || Object.getPrototypeOf(SearchBarTitle)).call.apply(_ref, [this].concat(args))), _this), _this.dataSearch = function (e) {
            var _this$props = _this.props,
                _this$props$establish = _this$props.establishment,
                dataUnchangable = _this$props$establish.dataUnchangable,
                establishmentSelect = _this$props$establish.establishmentSelect,
                updateFilterEstablishment = _this$props.updateFilterEstablishment,
                updateTitle = _this$props.updateTitle;

            var value = e.target.value.toLowerCase();
            var filterEstablishment = (0, _share.filterByTitle)(dataUnchangable, value);
            updateTitle(value);
            updateFilterEstablishment(filterEstablishment);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    /*PropTypes = {
        updateFilterEstablishment: PropTypes.func,
        establishmentSelect: PropTypes.array
    }*/

    _createClass(SearchBarTitle, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('input', {
                    value: this.value,
                    type: 'text',
                    placeholder: 'Search title...',
                    onChange: this.dataSearch
                })
            );
        }
    }]);

    return SearchBarTitle;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        establishment: (0, _establishment.stateSelector)(state),
        establishmentSelect: (0, _establishment.currentSelector)(state)
    };
}, { updateFilterEstablishment: _action.updateFilterEstablishment, updateTitle: _action.updateTitle })(SearchBarTitle);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _action = __webpack_require__(3);

var _establishment = __webpack_require__(2);

var _reactSelect = __webpack_require__(28);

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// array Cities from json object

var getArrayCity = function getArrayCity(data) {
    var arrayCity = [];
    var resultArrayCity = data.map(function (_ref) {
        var city = _ref.location.city;

        return city;
    });
    resultArrayCity.forEach(function (item) {
        resultArrayCity.includes(item) && !arrayCity.includes(item) ? arrayCity.push(item) : null;
    });
    return arrayCity;
};

var SearchBarCity = function (_Component) {
    _inherits(SearchBarCity, _Component);

    function SearchBarCity() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, SearchBarCity);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SearchBarCity.__proto__ || Object.getPrototypeOf(SearchBarCity)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
            selectedOption: ''
        }, _this.PropTypes = {
            updateFilterEstablishment: _propTypes2.default.func,
            establishmentSelect: _propTypes2.default.array
        }, _this.handleChange = function (selectedOption) {
            var _this$props = _this.props,
                _this$props$establish = _this$props.establishment,
                dataUnchangable = _this$props$establish.dataUnchangable,
                establishmentSelect = _this$props$establish.establishmentSelect,
                filterTitle = _this$props$establish.filterTitle,
                updateFilterEstablishment = _this$props.updateFilterEstablishment;


            var dataForChange = dataUnchangable;

            if (filterTitle) {
                dataForChange = (0, _share.filterByTitle)(dataUnchangable, filterTitle);
            }
            if (selectedOption.length === 0) {
                updateFilterEstablishment(dataForChange);
                _this.setState({ selectedOption: selectedOption });
                return false;
            }
            _this.setState({ selectedOption: selectedOption });
            var joinEstablishment = [],
                filterEstablishment = [];
            // selectedOption can be null when the `x` (close) button is clicked
            if (selectedOption) {
                selectedOption.forEach(function (option) {

                    filterEstablishment = dataForChange.filter(function (_ref3) {
                        var city = _ref3.location.city;

                        return city.toLowerCase().includes(option.value.toLowerCase());
                    });

                    Array.prototype.push.apply(joinEstablishment, filterEstablishment);
                });

                updateFilterEstablishment(joinEstablishment);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SearchBarCity, [{
        key: 'render',
        value: function render() {
            var dataUnchangable = this.props.establishment.dataUnchangable;

            var cities = getArrayCity(dataUnchangable);
            var selectedOption = this.state.selectedOption;

            var optionsValue = [];
            cities.forEach(function (item) {
                return optionsValue.push({ value: item, label: item });
            });
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactSelect2.default, {
                    name: 'form-field-name',
                    value: selectedOption,
                    onChange: this.handleChange,
                    multi: true,
                    options: optionsValue,
                    placeholder: 'Select your cities...'
                })
            );
        }
    }]);

    return SearchBarCity;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        establishment: (0, _establishment.stateSelector)(state),
        establishmentSelect: (0, _establishment.currentSelector)(state)
    };
}, { updateFilterEstablishment: _action.updateFilterEstablishment })(SearchBarCity);

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _action = __webpack_require__(3);

var _reactRedux = __webpack_require__(1);

var _establishment = __webpack_require__(2);

var _details = __webpack_require__(9);

var _InfoEstablishment = __webpack_require__(30);

var _InfoEstablishment2 = _interopRequireDefault(_InfoEstablishment);

var _events = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import PropTypes from 'prop-types'


var Item = function Item(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'td',
        { className: 'item' },
        children
    );
};

var SortTable = function (_Component) {
    _inherits(SortTable, _Component);

    function SortTable() {
        var _ref2;

        var _temp, _this, _ret;

        _classCallCheck(this, SortTable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = SortTable.__proto__ || Object.getPrototypeOf(SortTable)).call.apply(_ref2, [this].concat(args))), _this), _this.sortedCondition = { location: { zipcode: true }, dates: { startdate: true } }, _this.sort = function (level1, level2) {
            var _this$props = _this.props,
                establishmentSelect = _this$props.establishmentSelect,
                updateArrayEstablishment = _this$props.updateArrayEstablishment;

            // establishmentSelect.forEach( (item) => console.log(item.dates.startdate, typeof item.dates.startdate));
            // get sorting order

            var isSorted = _this.sortedCondition[level1][level2];

            // set direction
            var direction = isSorted ? 1 : -1;

            // create new data array for update state
            // and make sorting
            var sorted = [].slice.call(establishmentSelect).sort(function (a, b) {

                var aSort = a[level1][level2],
                    bSort = b[level1][level2];

                /// if sort date - other method of sort
                if (level1 === 'dates' && level2 === 'startdate') {

                    var aDate = void 0,
                        bDate = void 0,
                        valueArray = void 0;

                    var arraySplit = function arraySplit(aString) {
                        return aString.split('-');
                    };

                    var checkType = function checkType(value) {
                        return typeof value === 'undefined' ? new Date(1970, 0, 1) : typeof value === 'string' ? value.includes('-') ? (valueArray = arraySplit(value), new Date(+valueArray[2], +valueArray[1], +valueArray[0])) : value : value;
                    };

                    aDate = +checkType(aSort);

                    bDate = +checkType(bSort);

                    return aDate === bDate ? false : aDate > bDate ? direction : direction * -1;
                }

                return aSort === bSort ? false : aSort > bSort ? direction : direction * -1;
            });

            _this.sortedCondition[level1][level2] = !isSorted;

            updateArrayEstablishment(sorted);
        }, _this.tableHandle = function (coord) {
            for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                rest[_key2 - 1] = arguments[_key2];
            }

            var _this$props2 = _this.props,
                loadInfoEstablishment = _this$props2.loadInfoEstablishment,
                loadCoordinate = _this$props2.loadCoordinate;

            loadInfoEstablishment.apply(undefined, rest);
            loadCoordinate(coord);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    /*static propTypes = {
        currencyRate: PropTypes.array,
        rate: PropTypes.object,
        updateRate: PropTypes.func
    }*/

    _createClass(SortTable, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                restaurantDetails = _props.restaurantDetails,
                establishmentSelect = _props.establishment.establishmentSelect;
            //console.log("loadInfo",restaurantDetails);

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Establishments info'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_InfoEstablishment2.default, { restaurantDetails: restaurantDetails })
                ),
                _react2.default.createElement(
                    'table',
                    { className: 'currency-table' },
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                { className: 'title' },
                                'Title'
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'title' },
                                'City'
                            ),
                            _react2.default.createElement(
                                'th',
                                { onClick: function onClick() {
                                        return _this2.sort('location', 'zipcode');
                                    } },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'title sort', title: 'Sorting' },
                                    'Post Code'
                                )
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'title' },
                                'Address'
                            ),
                            _react2.default.createElement(
                                'th',
                                { onClick: function onClick() {
                                        return _this2.sort('dates', 'startdate');
                                    } },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'title sort', title: 'Sorting' },
                                    'Start year'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        establishmentSelect.map(function (_ref3, index) {
                            var trcid = _ref3.trcid,
                                title = _ref3.title,
                                _ref3$location = _ref3.location,
                                city = _ref3$location.city,
                                zipcode = _ref3$location.zipcode,
                                adress = _ref3$location.adress,
                                latitude = _ref3$location.latitude,
                                longitude = _ref3$location.longitude,
                                startdate = _ref3.dates.startdate,
                                media = _ref3.media,
                                urls = _ref3.urls;

                            return _react2.default.createElement(
                                'tr',
                                { key: index + trcid, onClick: _this2.tableHandle.bind(_this2, Object.assign({ latitude: latitude }, { longitude: longitude }), Object.assign({ title: title }, { city: city }, { adress: adress }, { zipcode: zipcode }, { media: media }, { urls: urls })) },
                                [title, city, zipcode, adress, startdate].map(function (item, index) {
                                    return _react2.default.createElement(
                                        Item,
                                        { key: index },
                                        item
                                    );
                                })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return SortTable;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        establishment: (0, _establishment.stateSelector)(state),
        establishmentSelect: (0, _establishment.currentSelector)(state),
        restaurantDetails: (0, _details.restaurantDetailsSelector)(state),
        selectedEvent: (0, _events.selectedEventSelector)(state)
    };
}, { updateArrayEstablishment: _action.updateArrayEstablishment, loadInfoEstablishment: _action.loadInfoEstablishment, loadCoordinate: _action.loadCoordinate })(SortTable);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoEstablishment = function InfoEstablishment(_ref) {
    var restaurantDetails = _ref.restaurantDetails;
    var title = restaurantDetails.title,
        city = restaurantDetails.city,
        adress = restaurantDetails.adress,
        zipCode = restaurantDetails.zipCode,
        urls = restaurantDetails.urls;


    var mediaArray = restaurantDetails.media;

    if (!mediaArray) return null;

    return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            title,
            ' ',
            city,
            '  ',
            adress,
            ' ',
            zipCode,
            ' ',
            urls
        ),
        _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            mediaArray.map(function (item, index) {
                return _react2.default.createElement('img', { key: item + index, src: item.url, alt: title, width: '100' });
            })
        )
    );
};

/*InfoEstablishment.propTypes = {
    value: PropTypes.string,
    currency: PropTypes.string,
    rate: PropTypes.number
}*/

exports.default = InfoEstablishment;

/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _share = __webpack_require__(5);

var _details = __webpack_require__(9);

var _events = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import PropTypes from 'prop-types'


var Item = function Item(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'td',
        { className: 'item' },
        children
    );
};

var EventsInfo = function (_Component) {
    _inherits(EventsInfo, _Component);

    function EventsInfo() {
        _classCallCheck(this, EventsInfo);

        return _possibleConstructorReturn(this, (EventsInfo.__proto__ || Object.getPrototypeOf(EventsInfo)).apply(this, arguments));
    }

    _createClass(EventsInfo, [{
        key: 'render',

        /* static propTypes = {
             currencyRate: PropTypes.array,
             rate: PropTypes.object,
             updateRate: PropTypes.func
         }*/

        value: function render() {
            var _props = this.props,
                _props$events$eventsS = _props.events.eventsSelect,
                eventsSelect = _props$events$eventsS === undefined ? {} : _props$events$eventsS,
                _props$details = _props.details,
                latitude = _props$details.latitude,
                longitude = _props$details.longitude;

            var eventsSelectWithCoordinate = {};
            if (eventsSelect.length > 0) {
                eventsSelectWithCoordinate = eventsSelect.filter(function (event) {
                    return (0, _share.calculateDistance)(+(0, _share.commaToPointReplace)(event.location.latitude), +(0, _share.commaToPointReplace)(event.location.longitude), +(0, _share.commaToPointReplace)(latitude), +(0, _share.commaToPointReplace)(longitude)) < 1;
                });
            } else {
                return null;
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Info events less 1 km'
                ),
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                { className: 'title' },
                                'Title'
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'title' },
                                'Location'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        eventsSelectWithCoordinate.map(function (_ref2, index) {
                            var trcid = _ref2.trcid,
                                title = _ref2.title,
                                _ref2$location = _ref2.location,
                                city = _ref2$location.city,
                                zipcode = _ref2$location.zipcode,
                                adress = _ref2$location.adress;

                            return _react2.default.createElement(
                                'tr',
                                { key: index + trcid },
                                [title, city + ' ' + zipcode + ' ' + adress].map(function (item, index) {
                                    return _react2.default.createElement(
                                        Item,
                                        { key: index + item },
                                        item
                                    );
                                })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return EventsInfo;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        events: (0, _events.stateSelector)(state),
        details: (0, _details.coordinateSelector)(state)
    };
})(EventsInfo);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Map = __webpack_require__(34);

var _Map2 = _interopRequireDefault(_Map);

var _reactRedux = __webpack_require__(1);

var _establishment = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // MapContainer.js


var MapContainer = function (_React$Component) {
    _inherits(MapContainer, _React$Component);

    function MapContainer() {
        _classCallCheck(this, MapContainer);

        return _possibleConstructorReturn(this, (MapContainer.__proto__ || Object.getPrototypeOf(MapContainer)).apply(this, arguments));
    }

    _createClass(MapContainer, [{
        key: "render",
        value: function render() {
            var establishmentSelect = this.props.establishment.establishmentSelect;


            return _react2.default.createElement(_Map2.default, {
                establishments: establishmentSelect,
                googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAwfT9oB0sgGDMlD4r9eI1RRAOBoYgg4c0&v=3.exp&libraries=geometry,drawing,places",
                loadingElement: _react2.default.createElement("div", { style: { height: "100%" } }),
                containerElement: _react2.default.createElement("div", { style: { height: "55vh", width: "100%" } }),
                mapElement: _react2.default.createElement("div", { style: { height: "100%" } })
            });
        }
    }]);

    return MapContainer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        establishment: (0, _establishment.stateSelector)(state),
        establishmentSelect: (0, _establishment.currentSelector)(state)
    };
})(MapContainer);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(14);

var _MarkerMap = __webpack_require__(35);

var _MarkerMap2 = _interopRequireDefault(_MarkerMap);

var _share = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Map = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(function (props) {

    var markers = props.establishments.map(function (_ref, index) {
        var trcid = _ref.trcid,
            title = _ref.title,
            _ref$location = _ref.location,
            latitude = _ref$location.latitude,
            longitude = _ref$location.longitude;
        return _react2.default.createElement(_MarkerMap2.default, {
            key: trcid + index,
            point: title,
            location: { lat: +(0, _share.commaToPointReplace)(latitude), lng: +(0, _share.commaToPointReplace)(longitude) }
        });
    });

    return _react2.default.createElement(
        _reactGoogleMaps.GoogleMap,
        {
            defaultZoom: 12,
            center: { lat: 52.379189, lng: 4.899431 }
        },
        markers
    );
}));

exports.default = Map;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactGoogleMaps = __webpack_require__(14);

var _Icon = __webpack_require__(36);

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MarkerMap = function (_React$Component) {
    _inherits(MarkerMap, _React$Component);

    function MarkerMap() {
        _classCallCheck(this, MarkerMap);

        return _possibleConstructorReturn(this, (MarkerMap.__proto__ || Object.getPrototypeOf(MarkerMap)).apply(this, arguments));
    }

    _createClass(MarkerMap, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_reactGoogleMaps.Marker, {
                position: this.props.location,
                icon: _Icon2.default
            });
        }
    }]);

    return MarkerMap;
}(_react2.default.Component);

exports.default = MarkerMap;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "svg",
        { width: "16", height: "16", viewBox: "0 0 50 50", overflow: "inherit" },
        _react2.default.createElement("path", { d: "M4 1l5.6 45.18c.175 1.409 1.399 2.82 2.801 2.82h25.198c1.401 0 2.627-1.411 2.799-2.82l5.602-45.18h-42zm6.3 5.646h29.399l-1.312 11.295h-26.774l-1.313-11.295z" })
    );
};

/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(15);

var _reduxThunk = __webpack_require__(40);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(41);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(42);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'http://localhost:3004'
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(15);

var _establishment = __webpack_require__(2);

var _establishment2 = _interopRequireDefault(_establishment);

var _events = __webpack_require__(10);

var _events2 = _interopRequireDefault(_events);

var _details = __webpack_require__(9);

var _details2 = _interopRequireDefault(_details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	establishment: _establishment2.default,
	details: _details2.default,
	events: _events2.default
});

exports.default = rootReducer;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _action = __webpack_require__(3);

var _events = __webpack_require__(10);

var _EventsList = __webpack_require__(45);

var _EventsList2 = _interopRequireDefault(_EventsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import { Helmet } from 'react-helmet';


var EventsPage = function (_Component) {
    _inherits(EventsPage, _Component);

    function EventsPage() {
        _classCallCheck(this, EventsPage);

        return _possibleConstructorReturn(this, (EventsPage.__proto__ || Object.getPrototypeOf(EventsPage)).apply(this, arguments));
    }

    _createClass(EventsPage, [{
        key: 'render',
        value: function render() {
            var _props$events$eventsS = this.props.events.eventsSelect,
                eventsSelect = _props$events$eventsS === undefined ? [] : _props$events$eventsS;


            return _react2.default.createElement(
                'div',
                { className: 'container-fluid' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(_EventsList2.default, null)
                    )
                )
            );
        }
    }]);

    return EventsPage;
}(_react.Component);

function loadData(store) {
    return store.dispatch((0, _action.fetchEvents)());
}

function mapStateToProps(state) {
    return { events: (0, _events.stateSelector)(state),
        eventsSelect: (0, _events.selectedEventSelector)(state) };
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchEvents: _action.fetchEvents })(EventsPage)
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _events = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import PropTypes from 'prop-types'


var Item = function Item(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'td',
        { className: 'item' },
        children
    );
};

var EventsList = function (_Component) {
    _inherits(EventsList, _Component);

    function EventsList() {
        _classCallCheck(this, EventsList);

        return _possibleConstructorReturn(this, (EventsList.__proto__ || Object.getPrototypeOf(EventsList)).apply(this, arguments));
    }

    _createClass(EventsList, [{
        key: 'render',

        /* static propTypes = {
             currencyRate: PropTypes.array,
             rate: PropTypes.object,
             updateRate: PropTypes.func
         }*/

        value: function render() {
            var _props$events$eventsS = this.props.events.eventsSelect,
                eventsSelect = _props$events$eventsS === undefined ? {} : _props$events$eventsS;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'Info events'
                ),
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'th',
                                { className: 'title' },
                                'Title'
                            ),
                            _react2.default.createElement(
                                'th',
                                { className: 'title' },
                                'Location'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        eventsSelect.map(function (_ref2, index) {
                            var trcid = _ref2.trcid,
                                title = _ref2.title,
                                _ref2$location = _ref2.location,
                                city = _ref2$location.city,
                                zipcode = _ref2$location.zipcode,
                                adress = _ref2$location.adress;

                            return _react2.default.createElement(
                                'tr',
                                { key: index + trcid },
                                [title, city + ' ' + zipcode + ' ' + adress].map(function (item, index) {
                                    return _react2.default.createElement(
                                        Item,
                                        { key: index + item },
                                        item
                                    );
                                })
                            );
                        })
                    )
                )
            );
        }
    }]);

    return EventsList;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        events: (0, _events.stateSelector)(state)
    };
})(EventsList);

/***/ })
/******/ ]);