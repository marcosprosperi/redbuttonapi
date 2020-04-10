require('source-map-support/register');
module.exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");
/* harmony import */ var _services_pusher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/pusher */ "./src/services/pusher.js");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);






dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();
const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({
  extended: false
}));
app.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());
app.post('/pusher/auth', function (req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = _services_pusher__WEBPACK_IMPORTED_MODULE_4__["default"].authenticate(socketId, channel);
  res.send(auth);
});
app.get("/", (req, res) => {
  if (req.body) {
    res.send(`body: ${req.body.name} `);
  }
});
Object(_routes__WEBPACK_IMPORTED_MODULE_3__["default"])(app);
app.listen(3001);

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redButton */ "./src/routes/redButton.js");

/* harmony default export */ __webpack_exports__["default"] = (app => {
  app.use("/api/redbutton", _redButton__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./src/routes/redButton.js":
/*!*********************************!*\
  !*** ./src/routes/redButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_pusher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/pusher */ "./src/services/pusher.js");


const redButtonRoute = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
const games = [];
const arrayLetters = "123456789abcdefghijklmnpqrstuvwxyz".split("");
redButtonRoute.post("/", (req, res) => {
  if (req.body) {}
});
redButtonRoute.post("/create", (req, res) => {
  if (req.body) {
    let code;

    do {
      code = [...Array(4)].reduce(out => `${out}${arrayLetters[Math.floor(Math.random() * arrayLetters.length)]}`, "").toUpperCase();
    } while (games.find(x => x.code === code));

    let newGame = {
      code: code,
      channel: `client-a51cab9aff9db0953aa8-${code}`,
      players: []
    };
    games.push(newGame);
    res.json(newGame);
  }
});
redButtonRoute.post("/join", (req, res) => {
  if (req.body) {
    let game = games.find(x => x.code === req.body.code);
    console.log(req.body);

    if (req.body.code && req.body.playerName && games.find(x => x.code === req.body.code)) {
      let game = games.find(x => x.code === req.body.code);
      let indexGame = games.findIndex(x => x.game === req.body.code);
      let newPlayer = {
        id: parseInt(game.players.length + 1),
        playerName: req.body.playerName,
        avatar: '',
        locked: false
      };
      game.players.push(newPlayer);
      console.log(newPlayer);
      games.splice(indexGame, 1, game);
      let channel = `${req.body.code}-join`;
      console.log(channel);
      _services_pusher__WEBPACK_IMPORTED_MODULE_1__["default"].trigger('private-channel-manco', channel, newPlayer);
      res.json(game);
    } else {
      res.sendStatus(400);
    }
  }
});
redButtonRoute.post("/check", (req, res) => {
  console.log(req.body);

  if (req.body) {
    if (req.body.code && games.find(x => x.code === req.body.code)) {
      let game = games.find(x => x.code === req.body.code);
      res.json(game);
    } else {
      res.sendStatus(400);
    }
  }
});
redButtonRoute.post("/lock", (req, res) => {
  if (req.body) {
    if (req.body.code && req.body.id && games.find(x => x.code === req.body.code)) {
      let game = games.find(x => x.code === req.body.code);
      let indexPlayer = game.players.findIndex(player => player.id === req.body.id);
      let indexGame = games.findIndex(x => x.code === req.body.code);
      games[indexGame].players[indexPlayer].locked = true;
      games[indexGame].players[indexPlayer].avatar = req.body.avatar;
      let channel = `${req.body.code}-lock`;
      _services_pusher__WEBPACK_IMPORTED_MODULE_1__["default"].trigger('private-channel-manco', channel, games[indexGame].players[indexPlayer]);
      console.log(games[indexGame].players[indexPlayer]);
      res.json(games[indexGame].players[indexPlayer]);
    } else {
      res.sendStatus(400);
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (redButtonRoute);

/***/ }),

/***/ "./src/services/pusher.js":
/*!********************************!*\
  !*** ./src/services/pusher.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);

dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();

const Pusher = __webpack_require__(/*! pusher */ "pusher");

const {
  PUSHER_APP_ID,
  PUSHER_KEY,
  PUSHER_SECRET,
  PUSHER_CLUSTER,
  PUSHER_USE_TLS
} = process.env;
const channels_client = new Pusher({
  appId: PUSHER_APP_ID,
  key: PUSHER_KEY,
  secret: PUSHER_SECRET,
  cluster: PUSHER_CLUSTER,
  useTLS: PUSHER_USE_TLS
});
/* harmony default export */ __webpack_exports__["default"] = (channels_client);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marcos\source\repos\home\button\red-button-backend\src/index.js */"./src/index.js");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "pusher":
/*!*************************!*\
  !*** external "pusher" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher");

/***/ })

/******/ });
//# sourceMappingURL=main.map