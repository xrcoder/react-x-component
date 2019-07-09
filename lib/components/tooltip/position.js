'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _direction = require('./direction');

var _direction2 = _interopRequireDefault(_direction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollTop() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function getScrollLeft() {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

function getTipMaxWidth() {
    return typeof document !== 'undefined' ? document.documentElement.clientWidth - bodyPadding * 2 : 1000;
}

function getTipsPos(target, tip) {

    var targetRect = target.getBoundingClientRect();
    var left = targetRect.left;
    var top = targetRect.top;
    var width = target.offsetWidth;
    var height = target.offsetHeight;
    var tipWidth = tip.offsetWidth;
    var tipHeight = tip.offsetHeight;

    var tipLeft = left + width / 2 - tipWidth / 2;
    var tipTop = top - tipHeight;

    return {
        tipLeft: tipLeft, tipTop: tipTop
    };
}

exports.default = {
    getTipsPos: getTipsPos
};
module.exports = exports['default'];