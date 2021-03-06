(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "classnames", "./page", "./size"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("classnames"), require("./page"), require("./size"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.page, global.size);
    global.pagination = mod.exports;
  }
})(this, function (_exports, _react, _classnames, _page, _size) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _page = _interopRequireDefault(_page);
  _size = _interopRequireDefault(_size);

  var Pagination = function Pagination(props) {
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-pagination', props.className)
    }, _react["default"].createElement(_page["default"], {
      count: props.count,
      currPage: props.currPage,
      pageSize: props.pageSize,
      onPageChange: function onPageChange(res) {
        props.onPageChange && props.onPageChange(res);
      }
    }), _react["default"].createElement(_size["default"], {
      pageSize: props.pageSize,
      count: props.count,
      onPageSizeChange: function onPageSizeChange(res) {
        props.onPageSizeChange && props.onPageSizeChange(res);
      }
    }));
  };

  var _default = Pagination;
  _exports["default"] = _default;
  module.exports = exports.default;
});