(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "classnames", "react-select"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("classnames"), require("react-select"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames, global.reactSelect);
    global.single = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _classnames, _reactSelect) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);
  _reactSelect = _interopRequireDefault(_reactSelect);

  function Select(_ref) {
    var className = _ref.className,
        disabled = _ref.disabled,
        isMulti = _ref.isMulti,
        isSearchable = _ref.isSearchable,
        isClearable = _ref.isClearable,
        options = _ref.options,
        value = _ref.value,
        noOptionsMessage = _ref.noOptionsMessage,
        placeholder = _ref.placeholder,
        onChange = _ref.onChange;
    return _react["default"].createElement(_reactSelect["default"], {
      className: (0, _classnames["default"])('x-select', className),
      classNamePrefix: "x-select",
      isSearchable: isSearchable,
      isDisabled: disabled,
      isMulti: isMulti,
      isClearable: isClearable,
      value: value,
      placeholder: placeholder,
      noOptionsMessage: noOptionsMessage,
      options: options,
      onChange: onChange
    });
  }

  Select.propTypes = {
    className: _propTypes["default"].string,
    noOptionsMessage: _propTypes["default"].func,
    placeholder: _propTypes["default"].string
  };
  Select.defaultProps = {
    className: '',
    noOptionsMessage: function noOptionsMessage() {
      return '结果不存在';
    },
    placeholder: '请选择要输入的内容'
  };
  var _default = Select;
  _exports["default"] = _default;
  module.exports = exports.default;
});