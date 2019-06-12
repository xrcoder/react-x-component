'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getXhrError(option, xhr) {
    // 构造一个错误对象，并返回
    var msg = _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_UPLOAD_ERROR').d('\u4E0A\u4F20\u5931\u8D25') + ('\uFF1A' + option.url + ' ' + xhr.status);
    var err = new Error(msg);
    err.status = xhr.status;
    err.method = 'post';
    err.url = option.url;
    return err;
} /**
   * name:
   * desc:
   * date: 2019/1/25
   * author: kelvin
   */

function getXhrBody(xhr) {
    // 获取内容实体
    var text = xhr.responseText || xhr.response;
    if (!text) {
        return text;
    }

    try {
        return JSON.parse(text);
    } catch (e) {
        return text;
    }
}

exports.default = function (option) {
    var xhr = new XMLHttpRequest();
    var formData = new FormData();

    if (option.onProgress && xhr.upload) {
        // 上传进度
        xhr.upload.onprogress = function (e) {
            if (e.total > 0) {
                e.percent = e.loaded / e.total * 100;
            }
            option.onProgress(e);
        };
    }

    if (option.data) {
        // 额外的参数
        Object.keys(option.data).map(function (key) {
            formData.append(key, option.data[key]);
        });
    }
    // 文件数据
    formData.append(option.filename, option.file);

    xhr.onerror = function (e) {
        option.onError(e);
    };

    xhr.onload = function () {
        if (xhr.status < 200 || xhr.status >= 300) {
            return option.onError(getXhrError(option, xhr), getXhrBody(xhr));
        }

        option.onSuccess(getXhrBody(xhr), xhr);
    };

    xhr.timeout = option.timeout || 10000;
    xhr.ontimeout = function () {
        option.onError({ status: xhr.status, msg: _reactIntlUniversal2.default.get('XComponentUpload.timeout').d('请求超时') });
    };

    xhr.open('post', option.url, true);

    // 设置额外的头部信息
    var headers = option.headers || {};
    for (var k in headers) {
        xhr.setRequestHeader(k, headers[k]);
    }

    // 发送数据
    xhr.send(formData);

    return {
        // 中断方法
        abort: function abort() {
            xhr.abort();
        }
    };
};

module.exports = exports['default'];