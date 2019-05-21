'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

var _dialog = require('./dialog');

var _dialog2 = _interopRequireDefault(_dialog);

var _alert = require('./alert');

var _alert2 = _interopRequireDefault(_alert);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // import './index.scss';

var _default = function _default() {
    _classCallCheck(this, _default);
};

_default.Dialog = _dialog2.default;
_default.Confirm = _confirm2.default;
_default.Alert = _alert2.default;
_default.Header = _header2.default;
_default.Body = _body2.default;
_default.Footer = _footer2.default;
exports.default = _default;
module.exports = exports['default'];