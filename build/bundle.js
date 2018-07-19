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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
var USERS = exports.USERS = '_USERS';

// DATA
var DATA_ESTABLISHMENT = exports.DATA_ESTABLISHMENT = './data/establishment-data.json';
var DATA_EVENTS = exports.DATA_EVENTS = './events-data.json';

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
//import App from './App';

//import {Route} from 'react-router-dom'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(28);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _EstablishmentsPage = __webpack_require__(27);

var _EstablishmentsPage2 = _interopRequireDefault(_EstablishmentsPage);

var _Hi = __webpack_require__(18);

var _Hi2 = _interopRequireDefault(_Hi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';*/
exports.default = [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
}), _extends({}, _EstablishmentsPage2.default, {
    path: '/users'
})];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash/get");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(11);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(19);

var _createStore2 = _interopRequireDefault(_createStore);

var _reactRouterConfig = __webpack_require__(5);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import React from 'react'
import { renderToString } from 'react-dom/server';
import Home from './client/component/Home';*/

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)();
    //console.log(matchRoutes(Routes, req.path))
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(13);

var _Routes = __webpack_require__(3);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(4);

var _reactRouterConfig = __webpack_require__(5);

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
    return '\n        <html>\n        <head>        \n        </head>\n        <title>kkkkk</title>\n        <body>\n            <div id="root">' + content + '</div>\n            <script src=\'bundle.js\'></script>\n        </body>\n        </html>\n    ';
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchEstablishments = exports.receiveQuery = exports.updateTitle = exports.loadCoordinate = exports.loadInfoEstablishment = exports.updateFilterEstablishment = exports.updateArrayEstablishment = undefined;

var _constants = __webpack_require__(1);

var _axios = __webpack_require__(17);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _axios2.default.get('http://localhost:3004/establishment');

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: _constants.FETCH + _constants.USERS,
                                payload: res.data
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hi = function Hi() {

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            'Hi'
        )
    );
};

exports.default = Hi;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(20);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(21);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    /*const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
    });*/

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

    return store;
};
//import axios from 'axios';

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(6);

var _establishment = __webpack_require__(22);

var _establishment2 = _interopRequireDefault(_establishment);

var _events = __webpack_require__(23);

var _events2 = _interopRequireDefault(_events);

var _details = __webpack_require__(25);

var _details2 = _interopRequireDefault(_details);

var _users = __webpack_require__(26);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
	establishment: _establishment2.default,
	details: _details2.default,
	events: _events2.default,
	users: _users2.default
});

exports.default = rootReducer;

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectedEventSelector = exports.stateSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var _get = __webpack_require__(7);

var _get2 = _interopRequireDefault(_get);

var _reselect = __webpack_require__(2);

var _utils = __webpack_require__(24);

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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.coordinateSelector = exports.restaurantDetailsSelector = exports.stateSelector = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var _get = __webpack_require__(7);

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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(1);

var _reselect = __webpack_require__(2);

var initialState = {};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];
    var type = action.type,
        payload = action.payload;

    switch (type) {
        case _constants.FETCH + _constants.USERS:
            return _extends({}, state, {
                users: payload
            });
        default:
            return state;
    }
};

//export const stateSelector = (state) => state['establishment'];
//export const currentSelector = createSelector(stateSelector, (establishment) => establishment['establishmentSelect']);

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

var _reactRedux = __webpack_require__(4);

var _action = __webpack_require__(16);

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
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchEstablishments();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$users$users = this.props.users.users,
                users = _props$users$users === undefined ? [] : _props$users$users;


            return _react2.default.createElement(
                'div',
                null,
                'Here\'s a big list of users:',
                _react2.default.createElement(
                    'ul',
                    null,
                    users.map(function (user, index) {
                        return _react2.default.createElement(
                            'li',
                            { key: user.trcid + index },
                            user.title
                        );
                    })
                )
            );
        }
    }]);

    return EstablishmentsList;
}(_react.Component);

function loadData(store) {
    return store.dispatch((0, _action.fetchEstablishments)());
    //console.log('i am cool')
}

/*export { loadData };
export default connect(((state) => ({
        users: state.users
    }), {fetchEstablishments}))(EstablishmentsList);*/

function mapStateToProps(state) {
    return { users: state.users };
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchEstablishments: _action.fetchEstablishments })(EstablishmentsList)
};

/***/ }),
/* 28 */
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

/***/ })
/******/ ]);