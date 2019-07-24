(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/defineProperty", "react", "react-select", "classnames", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/slicedToArray"), require("@babel/runtime/helpers/defineProperty"), require("react"), require("react-select"), require("classnames"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.slicedToArray, global.defineProperty, global.react, global.reactSelect, global.classnames, global.propTypes);
    global.single = mod.exports;
  }
})(this, function (_exports, _extends2, _slicedToArray2, _defineProperty2, _react, _reactSelect, _classnames, _propTypes) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _react = _interopRequireWildcard(_react);
  _reactSelect = _interopRequireDefault(_reactSelect);
  _classnames = _interopRequireDefault(_classnames);
  _propTypes = _interopRequireDefault(_propTypes);

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function selectStyles(searchControl) {
    var control = function control(provided) {
      return _objectSpread({}, provided, {
        margin: 8,
        display: searchControl ? 'flex' : 'none'
      });
    };

    var menu = function menu() {
      return null;
    };

    return {
      control: control,
      menu: menu
    };
  }

  function useToggleOpen(v) {
    var _useState = (0, _react.useState)(v),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isOpen = _useState2[0],
        setIsOpen = _useState2[1];

    function toggleOpen() {
      setIsOpen(!isOpen);
    }

    return {
      isOpen: isOpen,
      toggleOpen: toggleOpen
    };
  }

  function DropdownBlanket(props) {
    return _react["default"].createElement("div", (0, _extends2["default"])({
      style: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        zIndex: 1
      }
    }, props));
  }

  function DropdownContainer(_ref) {
    var children = _ref.children,
        className = _ref.className,
        isOpen = _ref.isOpen,
        onClose = _ref.onClose;
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-dropdown', className)
    }, children[0], isOpen ? children[1] : null, isOpen ? _react["default"].createElement(DropdownBlanket, {
      onClick: onClose
    }) : null);
  }

  function DropdownSelectTarget(_ref2) {
    var placeholder = _ref2.placeholder,
        data = _ref2.data,
        isOpen = _ref2.isOpen,
        onClick = _ref2.onClick;
    var styles = isOpen ? {
      zIndex: 2
    } : null;
    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-select-target', {
        'x-select-target-focus': isOpen
      }),
      style: styles,
      onClick: onClick
    }, data ? data.label : _react["default"].createElement("span", {
      className: "x-placeholder"
    }, placeholder));
  }

  function SingleSelect(props) {
    var className = props.className,
        options = props.options,
        value = props.value,
        placeholder = props.placeholder,
        searchControl = props.searchControl,
        _onChange = props.onChange;
    var openStatus = useToggleOpen(false);

    var _useState3 = (0, _react.useState)(value),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        selectValue = _useState4[0],
        setSelectValue = _useState4[1];

    (0, _react.useEffect)(function () {
      setSelectValue(value);
    }, [value]);
    return _react["default"].createElement(DropdownContainer, {
      isOpen: openStatus.isOpen,
      className: className,
      onClose: openStatus.toggleOpen
    }, _react["default"].createElement(DropdownSelectTarget, {
      placeholder: placeholder,
      data: selectValue,
      isOpen: openStatus.isOpen,
      onClick: openStatus.toggleOpen
    }), _react["default"].createElement(_reactSelect["default"], {
      className: "x-select-main",
      classNamePrefix: "x-select",
      menuIsOpen: true,
      value: selectValue,
      styles: selectStyles(searchControl),
      options: options,
      onChange: function onChange(v) {
        setSelectValue(v);

        _onChange(v);

        openStatus.toggleOpen();
      }
    }));
  }

  SingleSelect.propTypes = {
    className: _propTypes["default"].string,
    options: _propTypes["default"].array,
    value: _propTypes["default"].object,
    searchControl: _propTypes["default"].bool,
    placeholder: _propTypes["default"].string,
    onChange: _propTypes["default"].func
  };
  SingleSelect.defaultProps = {
    className: '',
    options: [],
    value: null,
    searchControl: false,
    placeholder: '请选择要输入的内容',
    onChange: function onChange() {}
  };
  var _default = SingleSelect;
  _exports["default"] = _default;
  module.exports = exports.default;
});