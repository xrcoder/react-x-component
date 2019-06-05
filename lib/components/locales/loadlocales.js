'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (lang) {

    return new Promise(function (resolve) {

        var locales = {
            "zh_CN": require('./zh_CN.js'),
            "en_US": require('./en_US.js')
        };

        _reactIntlUniversal2.default.init({
            currentLocale: lang || 'zh_CN',
            locales: locales
        }).then(function () {
            resolve('success');
        });
    });
};

module.exports = exports['default'];