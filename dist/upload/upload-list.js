(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/slicedToArray", "react", "prop-types", "../icon"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/slicedToArray"), require("react"), require("prop-types"), require("../icon"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.slicedToArray, global.react, global.propTypes, global.icon);
    global.uploadList = mod.exports;
  }
})(this, function (_exports, _core, _slicedToArray2, _react, _propTypes, _icon) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _icon = _interopRequireDefault(_icon);

  // status 0:loading 
  var UploadList = function UploadList(_ref) {
    var imgList = _ref.imgList,
        onDeleteItem = _ref.onDeleteItem;

    var _useState = (0, _react.useState)(imgList),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        _imgList = _useState2[0],
        setImgList = _useState2[1];

    var _useState3 = (0, _react.useState)(''),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        styleType = _useState4[0],
        setStyleType = _useState4[1];

    (0, _react.useEffect)(function () {
      if (imgList.length >= 0) {
        setImgList(imgList);
      }
    }, [imgList]);

    var renderPreviewItem = function renderPreviewItem(data, index) {
      var uid = data.uid,
          imgData = data.imgData,
          status = data.status;
      return (0, _core.jsx)("div", {
        className: "x-upload-item-preview x-upload-box",
        key: "".concat(uid, "_").concat(index)
      }, status === 0 ? (0, _core.jsx)("div", {
        className: "x-upload-loading-box x-upload-box"
      }, (0, _core.jsx)("div", {
        className: "bg-img"
      }), (0, _core.jsx)("div", {
        className: "x-upload-loading"
      }, (0, _core.jsx)(_icon["default"], {
        name: 'spinner',
        className: "x-upload-loading-icon"
      }))) : (0, _core.jsx)("div", {
        className: "x-upload-img-box"
      }, (0, _core.jsx)("img", {
        src: imgData
      }), (0, _core.jsx)("div", {
        className: "x-upload-img-opt"
      }, (0, _core.jsx)(_icon["default"], {
        name: 'trash',
        onClick: function onClick() {
          onDeleteItem(index);
        }
      }))));
    };

    return (0, _core.jsx)("div", {
      className: "x-upload-list"
    }, _imgList.map(function (item, index) {
      return renderPreviewItem(item, index);
    }));
  };

  var _default = UploadList;
  _exports["default"] = _default;
  UploadList.propTypes = {
    imgList: _propTypes["default"].array,
    onDeleteItem: _propTypes["default"].func,
    onEditItem: _propTypes["default"].func
  };
  UploadList.defaultProps = {
    imgList: [],
    onDeleteItem: function onDeleteItem() {},
    onEditItem: function onEditItem() {}
  };
  module.exports = exports.default;
});