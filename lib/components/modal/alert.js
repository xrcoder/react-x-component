'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Alert(props) {
    var data = props.data,
        confirm = props.confirm,
        cancel = props.cancel;


    return _react2.default.createElement(
        'div',
        { className: 'x-modal-alert' },
        _react2.default.createElement(_header2.default, _extends({ key: 'Header' }, props)),
        _react2.default.createElement(
            _body2.default,
            { key: 'Body' },
            _react2.default.createElement(
                'h4',
                { className: 'title' },
                _react2.default.createElement(_icon2.default, { type: data.tipsIcon }),
                data.tipsTitle
            ),
            _react2.default.createElement(
                'div',
                { className: 'content' },
                data.content
            )
        ),
        _react2.default.createElement(
            _footer2.default,
            { key: 'Footer' },
            _react2.default.createElement(
                _button2.default,
                { type: data.CancelType, size: data.btnSzie, onClick: function onClick() {
                        cancel();
                    } },
                data.cancelText
            )
        )
    );
}

exports.default = function () {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


    var _opt = {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm', //确认框大小
        className: (0, _classnames2.default)('x-modal-alert', opt.className),
        data: {
            tipsTitle: opt.tipsTitle || '系统提示', //标题
            content: opt.content || '您确定要执行此操作吗？', //内容
            tipsIcon: opt.tipsIcon || 'alarm', //提示icon
            cancelText: opt.cancelText || '关闭', //取消按钮文案
            CancelType: opt.CancelType || 'default' //取消按钮类型
        }
    };

    return (0, _modal2.default)(Alert, _opt);
};

module.exports = exports['default'];