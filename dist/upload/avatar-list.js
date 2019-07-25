(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "prop-types", "./upload-list", "./avatar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("prop-types"), require("./upload-list"), require("./avatar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.slicedToArray, global.react, global.propTypes, global.uploadList, global.avatar);
    global.avatarList = mod.exports;
  }
})(this, function (_exports, _extends2, _slicedToArray2, _react, _propTypes, _uploadList, _avatar) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _extends2 = _interopRequireDefault(_extends2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _uploadList = _interopRequireDefault(_uploadList);
  _avatar = _interopRequireDefault(_avatar);

  var AvatarList = function AvatarList(props) {
    var url = props.url,
        _onChange = props.onChange,
        imgList = props.imgList,
        maxLength = props.maxLength,
        onError = props.onError,
        _onDeleteItem = props.onDeleteItem,
        _onBeforeStart = props.onBeforeStart;

    var _useState = (0, _react.useState)(imgList),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        _imgList = _useState2[0],
        setImgList = _useState2[1];

    var list = _imgList;
    (0, _react.useEffect)(function () {
      if (imgList.length >= 0) {
        setImgList(imgList);
      }
    }, [imgList]);
    return _react["default"].createElement("div", {
      className: "x-upload-list"
    }, _react["default"].createElement(_uploadList["default"], {
      imgList: list,
      onDeleteItem: function onDeleteItem(index) {
        var _list = _imgList;

        _list.splice(index, 1);

        setImgList(_list);

        _onDeleteItem(_list);
      }
    }), _imgList.length < maxLength ? _react["default"].createElement(_avatar["default"], (0, _extends2["default"])({}, props, {
      url: url,
      onBeforeStart: function onBeforeStart(file, e) {
        var _list = _imgList;
        file.status = 0;
        list = _imgList;

        _imgList.push(file);

        setImgList(_imgList);
        return _onBeforeStart(file, e);
      },
      onChange: function onChange(r, file, e) {
        var uploadList = _imgList;
        var index = uploadList.findIndex(function (item) {
          return item.uid === file.uid;
        });
        uploadList[index].status = 1;
        setTimeout(function () {
          list = _imgList;
          setImgList(uploadList);

          _onChange(r, uploadList, e);
        }, 600);
      },
      onError: function onError(file, e) {
        props.onError(file, e);
      }
    })) : null);
  };

  var _default = AvatarList;
  _exports["default"] = _default;
  AvatarList.propTypes = {
    onChange: _propTypes["default"].func,
    imgList: _propTypes["default"].array,
    maxLength: _propTypes["default"].number,
    onError: _propTypes["default"].func,
    onDeleteItem: _propTypes["default"].func,
    onBeforeStart: _propTypes["default"].func
  };
  AvatarList.defaultProps = {
    onChange: function onChange() {},
    imgList: [],
    maxLength: 1,
    onError: function onError() {},
    onDeleteItem: function onDeleteItem() {},
    onBeforeStart: function onBeforeStart() {
      return true;
    }
  };
  module.exports = exports.default;
});