(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.request = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  // option {
  //  data: object,
  //  filename: string, //文件参数名
  //  file: File,
  //  url: string,
  //  headers: object
  // }
  var request = function request(option) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    xhr.upload.onprogress = function progress(e) {};

    if (option.data) {
      // 额外的参数
      Object.keys(option.data).map(function (key) {
        formData.append(key, option.data[key]);
      });
    } // 文件数据


    formData.append(option.filename, option.file);
    xhr.timeout = option.timeout || 10000;
    xhr.open(option.method || 'post', option.url, true); // 设置额外的头部信息

    var headers = option.headers || {};

    for (var k in headers) {
      xhr.setRequestHeader(k, headers[k]);
    } // 发送数据


    xhr.send(formData);
    var request = {
      // 中断方法
      onAbort: function onAbort() {
        xhr.abort();
        return request;
      },
      onSuccess: function onSuccess(callback) {
        xhr.onload = function (e) {
          callback(e);
        };

        return request;
      },
      onError: function onError(callback) {
        xhr.onerror = function (e) {
          callback(e);
        };

        xhr.ontimeout = function (e) {
          callback(e);
        };

        return request;
      },
      onProgress: function onProgress(callback) {
        xhr.upload.addEventListener("progress", function (e) {
          if (e.lengthComputable) {
            callback(e);
          }
        });
        return request;
      }
    };
    return request;
  };

  var _default = request;
  _exports["default"] = _default;
  module.exports = exports.default;
});