(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "prop-types", "classnames", "./state"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("prop-types"), require("classnames"), require("./state"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.propTypes, global.classnames, global.state);
    global.half = mod.exports;
  }
})(this, function (_exports, _core, _react, _propTypes, _classnames, _state) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);

  function CheckItem(_ref) {
    var className = _ref.className,
        style = _ref.style,
        label = _ref.label,
        value = _ref.value,
        onChange = _ref.onChange;
    var oValue = (0, _state.useCheckValue)(value);
    var cls = (0, _classnames["default"])('x-checkbox-item', className, {
      'x-checkbox-selected': oValue.value === 'on',
      'x-checkbox-half': oValue.value === 'half'
    });
    (0, _react.useEffect)(function () {
      oValue.updateValue(value);
    }, [value]);
    return (0, _core.jsx)("div", {
      className: cls,
      style: style,
      onClick: function onClick(e) {
        var status = '';

        if (oValue.value === 'off' || oValue.value === 'half') {
          status = 'on';
        } else {
          status = 'off';
        }

        oValue.updateValue(status);
        onChange(e, status);
      }
    }, (0, _core.jsx)("span", {
      className: "icon"
    }), (0, _core.jsx)("span", {
      className: "name"
    }, label));
  }

  CheckItem.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    label: _propTypes["default"].string,
    value: _propTypes["default"].oneOf(['half', 'on', 'off']),
    disabled: _propTypes["default"].bool,
    onChange: _propTypes["default"].func
  };
  CheckItem.defaultProps = {
    className: '',
    style: null,
    label: '',
    value: 'off',
    disabled: false,
    onChange: function onChange() {}
  };
  var _default = CheckItem;
  _exports["default"] = _default;
  module.exports = exports.default;
});