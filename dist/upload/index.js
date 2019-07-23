(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./upload", "./avatar", "./avatar-list", "./upload-list"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./upload"), require("./avatar"), require("./avatar-list"), require("./upload-list"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.upload, global.avatar, global.avatarList, global.uploadList);
    global.index = mod.exports;
  }
})(this, function (_exports, _upload, _avatar, _avatarList, _uploadList) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _upload = _interopRequireDefault(_upload);
  _avatar = _interopRequireDefault(_avatar);
  _avatarList = _interopRequireDefault(_avatarList);
  _uploadList = _interopRequireDefault(_uploadList);
  _upload["default"].Avatar = _avatar["default"];
  _upload["default"].AvatarList = _avatarList["default"];
  _upload["default"].UploadList = _uploadList["default"];
  var _default = _upload["default"];
  _exports["default"] = _default;
  module.exports = exports.default;
});