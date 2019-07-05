'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _input = require('./input');

var _input2 = _interopRequireDefault(_input);

var _addon = require('./addon');

var _addon2 = _interopRequireDefault(_addon);

var _clear = require('./clear');

var _clear2 = _interopRequireDefault(_clear);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _reg = require('./reg');

var _reg2 = _interopRequireDefault(_reg);

var _passwd = require('./passwd');

var _passwd2 = _interopRequireDefault(_passwd);

var _phone = require('./phone');

var _phone2 = _interopRequireDefault(_phone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_input2.default.Addon = _addon2.default; // import './index.scss';

_input2.default.Group = _group2.default;
_input2.default.Clear = _clear2.default;
_input2.default.Reg = _reg2.default;
_input2.default.Passwd = _passwd2.default;
_input2.default.Phone = _phone2.default;

exports.default = _input2.default;
module.exports = exports['default'];