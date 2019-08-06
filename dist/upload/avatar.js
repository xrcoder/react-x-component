(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "react", "prop-types", "classnames", "./upload"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("react"), require("prop-types"), require("classnames"), require("./upload"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.react, global.propTypes, global.classnames, global.upload);
    global.avatar = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _react, _propTypes, _classnames, _upload) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);
  _upload = _interopRequireDefault(_upload);

  var Avatar = function Avatar(props) {
    var url = props.url,
        onChange = props.onChange,
        className = props.className,
        style = props.style,
        onError = props.onError,
        _onBeforeStart = props.onBeforeStart;
    var ImgObj = {};
    return (0, _core.jsx)("div", {
      className: "x-upload-list"
    }, (0, _core.jsx)(_upload["default"], (0, _extends2["default"])({}, props, {
      url: url,
      onBeforeStart: function onBeforeStart(file, e) {
        return _onBeforeStart(file, e);
      },
      onFinished: function onFinished(r, file, e) {
        setTimeout(function () {
          props.onChange(r, file, e);
        }, 600);
      },
      onProgress: function onProgress(file, e) {
        props.onProgress(file, e);
      },
      onError: function onError(file, e) {
        props.onError(file, e);
      }
    }), (0, _core.jsx)("div", {
      className: (0, _classnames["default"])('x-upload-box', className),
      style: style
    }, (0, _core.jsx)("div", {
      className: "bg-img"
    }), (0, _core.jsx)("div", {
      className: "tips"
    }, "\u70B9\u51FB\u4E0A\u4F20\u4EBA\u50CF"))));
  };

  var _default = Avatar;
  _exports["default"] = _default;
  Avatar.propTypes = {
    onChange: _propTypes["default"].func,
    imgList: _propTypes["default"].array,
    onProgress: _propTypes["default"].func,
    onError: _propTypes["default"].func,
    onBeforeStart: _propTypes["default"].func
  };
  Avatar.defaultProps = {
    onChange: function onChange() {},
    imgList: [],
    onProgress: function onProgress() {},
    onError: function onError() {},
    onBeforeStart: function onBeforeStart() {
      return true;
    }
  };
  module.exports = exports.default;
});