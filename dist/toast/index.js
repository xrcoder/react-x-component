(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-toastify"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-toastify"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactToastify);
    global.index = mod.exports;
  }
})(this, function (_exports, _react, _reactToastify) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);

  /**
   * Created by Rayr Lee on 2019/7/1.
   */
  function push(msg, opt) {
    var _opt = {
      hideProgressBar: true,
      type: 'info'
    };
    return (0, _reactToastify.toast)(msg, Object.assign(_opt, opt));
  }

  function notify(msg, type) {
    return (0, _reactToastify.toast)(msg, {
      hideProgressBar: true,
      type: type,
      closeButton: false,
      className: 'Toastify__toast-notify'
    });
  }

  var _default = {
    Container: _reactToastify.ToastContainer,
    push: push,
    notify: notify
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});