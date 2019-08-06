(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "classnames", "./modal", "../button", "./header", "./body", "./footer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("classnames"), require("./modal"), require("../button"), require("./header"), require("./body"), require("./footer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.classnames, global.modal, global.button, global.header, global.body, global.footer);
    global.confirm = mod.exports;
  }
})(this, function (_exports, _core, _react, _classnames, _modal, _button, _header, _body, _footer) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _modal = _interopRequireDefault(_modal);
  _header = _interopRequireDefault(_header);
  _body = _interopRequireDefault(_body);
  _footer = _interopRequireDefault(_footer);

  function Alert(props) {
    var data = props.data,
        confirm = props.confirm,
        cancel = props.cancel;
    return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)(_header["default"], {
      cancel: cancel
    }, data.title), (0, _core.jsx)(_body["default"], null, (0, _core.jsx)("div", {
      className: "content"
    }, data.content)), (0, _core.jsx)(_footer["default"], null, (0, _core.jsx)(_button.Button.Box, null, (0, _core.jsx)(_button.Button, {
      type: "primary",
      onClick: confirm
    }, data.confirmText), (0, _core.jsx)(_button.Button, {
      type: "primary",
      inverse: true,
      onClick: cancel
    }, data.cancelText))));
  }

  var _default = function _default() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _modal["default"])(Alert, {
      backDrop: opt.backDrop || false,
      //点击背景是否关闭
      size: opt.size || 'sm',
      className: (0, _classnames["default"])('x-modal-confirm', opt.className),
      data: {
        title: opt.title || '系统提示',
        //标题
        content: opt.content || '您确定要执行此操作吗？',
        //内容
        confirmText: opt.confirmText || '确认',
        //按钮文案
        cancelText: opt.cancelText || '取消' //按钮文案

      }
    });
  };

  _exports["default"] = _default;
  module.exports = exports.default;
});