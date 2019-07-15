(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray", "react", "prop-types", "classnames", "./request"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"), require("react"), require("prop-types"), require("classnames"), require("./request"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray, global.react, global.propTypes, global.classnames, global.request);
    global.upload = mod.exports;
  }
})(this, function (_exports, _slicedToArray2, _react, _propTypes, _classnames, _request) {
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
  _classnames = _interopRequireDefault(_classnames);
  _request = _interopRequireDefault(_request);

  function getUid() {
    // 获取唯一ID值 文件标示
    var now = +new Date();
    var index = 0;
    return "upload-".concat(now, "-").concat(++index);
  }

  var Upload = function Upload(_ref) {
    var className = _ref.className,
        multiple = _ref.multiple,
        timeout = _ref.timeout,
        name = _ref.name,
        children = _ref.children,
        fileType = _ref.fileType,
        url = _ref.url,
        onBeforeStart = _ref.onBeforeStart,
        onProgress = _ref.onProgress,
        onFinished = _ref.onFinished,
        onError = _ref.onError,
        data = _ref.data,
        headers = _ref.headers;

    var _useState = (0, _react.useState)(getUid()),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        uid = _useState2[0],
        setUid = _useState2[1];

    var _useState3 = (0, _react.useState)({}),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        uploadList = _useState4[0],
        setUploadList = _useState4[1];

    var uploadInput = (0, _react.useRef)(null);

    var selectFile = function selectFile(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        return;
      } else {
        uploadFiles(files, e);
      }

      e.target.setAttribute('type', 'text');
    };

    var uploadFiles = function uploadFiles(files, e) {
      var postList = Array.prototype.slice.call(files);
      postList.map(function (item) {
        var file = item;
        file.uid = getUid();
        onBeforeStart(e, files[0]);
        upload(file, files);
      });
    };

    var upload = function upload(file, fileList) {
      new Promise(function (resolve) {
        resolve(url);
      }).then(function (url) {
        var uid = file.uid;
        uploadList[uid] = new _request["default"]({
          url: url,
          filename: name,
          file: file,
          data: data,
          headers: headers,
          timeout: timeout
        });
        uploadList[uid].onProgress(function (e) {
          onProgress(e, file);
        }).onSuccess(function (e) {
          onFinished(e, file);
        });
        uploadList[uid].onError(function (e) {
          onError(e, file);
        });
      });
    };

    var handleClick = function handleClick() {
      /*
      * 修复连续上传同个文件的时候，第二次会无效
      * 解决办法：每次input选择完之后，将input的type属性设置成text，然后下次点击input上传前，将input的type属性重新设置成file
      * 本代码中解决分布在 selectFile和handleClick方法中
      * */
      uploadInput.current.setAttribute('type', 'file');
      uploadInput.current.click();
    };

    return _react["default"].createElement("div", {
      className: (0, _classnames["default"])('x-upload', className),
      onClick: function onClick() {
        handleClick();
      }
    }, _react["default"].createElement("div", {
      className: "x-upload-trigger"
    }, children), _react["default"].createElement("input", {
      type: "file",
      accept: fileType,
      onChange: function onChange(e) {
        selectFile(e);
      },
      ref: uploadInput,
      className: "x-upload-input",
      multiple: multiple
    }));
  };

  var _default = Upload;
  _exports["default"] = _default;
  Upload.propTypes = {
    fileType: _propTypes["default"].string,
    url: _propTypes["default"].string,
    onAbort: _propTypes["default"].func,
    onBeforeStart: _propTypes["default"].func,
    onProgress: _propTypes["default"].func,
    onFinished: _propTypes["default"].func,
    onError: _propTypes["default"].func,
    timeout: _propTypes["default"].number,
    className: _propTypes["default"].string,
    name: _propTypes["default"].string
  };
  Upload.defaultProps = {
    fileType: '*',
    timeout: 3000,
    name: 'file',
    onBeforeStart: function onBeforeStart() {},
    onProgress: function onProgress() {},
    onError: function onError() {},
    onFinished: function onFinished() {}
  };
  module.exports = exports.default;
});