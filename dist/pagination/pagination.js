(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "prop-types", "classnames", "./page", "./size"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("prop-types"), require("classnames"), require("./page"), require("./size"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.propTypes, global.classnames, global.page, global.size);
    global.pagination = mod.exports;
  }
})(this, function (_exports, _core, _react, _propTypes, _classnames, _page, _size) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);
  _page = _interopRequireDefault(_page);
  _size = _interopRequireDefault(_size);

  var Pagination = function Pagination(props) {
    return (0, _core.jsx)("div", {
      className: (0, _classnames["default"])('x-pagination', props.className),
      style: props.style
    }, (0, _core.jsx)(_page["default"], {
      count: props.count,
      currPage: props.currPage,
      pageSize: props.pageSize,
      onPageChange: function onPageChange(res) {
        props.onPageChange && props.onPageChange(res);
      }
    }), (0, _core.jsx)(_size["default"], {
      menuPlacement: props.menuPlacement,
      pageSize: props.pageSize,
      count: props.count,
      onPageSizeChange: function onPageSizeChange(res) {
        props.onPageSizeChange && props.onPageSizeChange(res);
      }
    }));
  };

  var _default = Pagination;
  _exports["default"] = _default;
  Pagination.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object
  };
  Pagination.defaultProps = {
    className: '',
    style: null
  };
  module.exports = exports.default;
});