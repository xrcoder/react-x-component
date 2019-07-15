(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/slicedToArray", "react", "prop-types", "./upload", "./upload-list"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("prop-types"), require("./upload"), require("./upload-list"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.slicedToArray, global.react, global.propTypes, global.upload, global.uploadList);
    global.avatar = mod.exports;
  }
})(this, function (_exports, _extends2, _slicedToArray2, _react, _propTypes, _upload, _uploadList) {
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
  _upload = _interopRequireDefault(_upload);
  _uploadList = _interopRequireDefault(_uploadList);

  var Avatar = function Avatar(props) {
    var url = props.url,
        onChange = props.onChange,
        imgList = props.imgList;

    var _useState = (0, _react.useState)(imgList),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        _imgList = _useState2[0],
        setImgList = _useState2[1];

    var _useState3 = (0, _react.useState)(-1),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        length = _useState4[0],
        setLength = _useState4[1];

    (0, _react.useEffect)(function () {
      if (imgList.length > 0) {
        setImgList(imgList);
      }
    }, [imgList]);
    return _react["default"].createElement("div", {
      className: "x-upload-list"
    }, _react["default"].createElement(_uploadList["default"], {
      imgList: _imgList,
      onDeleteItem: function onDeleteItem(index) {
        var _list = _imgList;

        _list.splice(index, 1);

        setImgList(_list);
        onChange(_list);
        setLength(_list.length);
      }
    }), _react["default"].createElement(_upload["default"], (0, _extends2["default"])({}, props, {
      url: url,
      onBeforeStart: function onBeforeStart(e, file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        var _list = _imgList;

        reader.onload = function (e) {
          _list.push({
            name: file.name,
            imgData: reader.result,
            uid: file.uid,
            status: 0
          });

          setImgList(_list);
          setLength(_list.length);
        };
      },
      onFinished: function onFinished(e, file) {
        var uploadList = _imgList;
        var index = uploadList.findIndex(function (item) {
          return item.uid === file.uid;
        });
        uploadList[index].status = 1;
        setTimeout(function () {
          setImgList(uploadList);
          onChange(uploadList);
          setLength(1000);
        }, 600);
      }
    }), _react["default"].createElement("div", {
      className: "x-upload-box"
    }, _react["default"].createElement("div", {
      className: "bg-img"
    }), _react["default"].createElement("div", null, "\u62D6\u62FD\u6216\u70B9\u51FB\u4E0A\u4F20\u4EBA\u50CF"))));
  };

  var _default = Avatar;
  _exports["default"] = _default;
  Avatar.propTypes = {
    onChange: _propTypes["default"].func,
    imgList: _propTypes["default"].array
  };
  Avatar.defaultProps = {
    onChange: function onChange() {},
    imgList: []
  };
  module.exports = exports.default;
});