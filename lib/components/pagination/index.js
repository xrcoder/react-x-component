'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pagination = require('./pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

var _size = require('./size');

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_pagination2.default.Page = _page2.default; // import './index.scss';

_pagination2.default.Size = _size2.default;

exports.default = _pagination2.default;
module.exports = exports['default'];