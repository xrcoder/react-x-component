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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './index.scss';

_input2.default.Addon = _addon2.default;
_input2.default.Group = _group2.default;
_input2.default.Clear = _clear2.default;

exports.default = _input2.default;
module.exports = exports['default'];