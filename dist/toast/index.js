(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/defineProperty", "react", "react-toastify"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/defineProperty"), require("react"), require("react-toastify"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.defineProperty, global.react, global.reactToastify);
    global.index = mod.exports;
  }
})(this, function (_exports, _defineProperty2, _react, _reactToastify) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireDefault(_react);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var toastId = null;

  function push(msg, opt) {
    var _opt = {
      hideProgressBar: true,
      type: 'info',
      onClose: function onClose() {
        toastId = null;
      }
    };

    if (toastId) {
      return _reactToastify.toast.update(toastId, _objectSpread({
        render: msg
      }, Object.assign(_opt, opt)));
    } else {
      return toastId = (0, _reactToastify.toast)(msg, Object.assign(_opt, opt));
    }
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