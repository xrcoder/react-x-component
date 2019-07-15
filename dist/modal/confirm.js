(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "classnames", "./modal", "../button", "./header", "./body", "./footer"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("classnames"), require("./modal"), require("../button"), require("./header"), require("./body"), require("./footer"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.classnames, global.modal, global.button, global.header, global.body, global.footer);
    global.confirm = mod.exports;
  }
})(this, function (_exports, _react, _classnames, _modal, _button, _header, _body, _footer) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);
  _modal = _interopRequireDefault(_modal);
  _button = _interopRequireDefault(_button);
  _header = _interopRequireDefault(_header);
  _body = _interopRequireDefault(_body);
  _footer = _interopRequireDefault(_footer);

  function Alert(props) {
    var data = props.data,
        confirm = props.confirm,
        cancel = props.cancel;
    return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_header["default"], {
      cancel: cancel
    }, data.title), _react["default"].createElement(_body["default"], null, _react["default"].createElement("div", {
      className: "content"
    }, data.content)), _react["default"].createElement(_footer["default"], null, _react["default"].createElement(_button["default"], {
      type: "primary",
      onClick: confirm
    }, data.confirmText), _react["default"].createElement(_button["default"], {
      type: "primary",
      inverse: true,
      onClick: cancel
    }, data.cancelText)));
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