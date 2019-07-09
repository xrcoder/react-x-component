'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (lang) {

    return new Promise(function (resolve, reject) {

        var locales = {
            "zh_CN": require('./zh_CN.js'),
            "en_US": require('./en_US.js')

            // init method will load CLDR locale data according to currentLocale
            // react-intl-universal is singleton, so you should init it only once in your app
        };_reactIntlUniversal2.default.init({
            currentLocale: lang || 'zh_CN', // TODO: determine locale here
            locales: locales
        }).then(function () {
            // After loading CLDR locale data, start to render
            resolve('success');
        });
    });
};

module.exports = exports['default'];