'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

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
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            _header2.default,
            { cancel: cancel },
            data.title
        ),
        _react2.default.createElement(
            _body2.default,
            null,
            _react2.default.createElement(
                'div',
                { className: 'content' },
                data.content
            )
        ),
        _react2.default.createElement(
            _footer2.default,
            null,
            _react2.default.createElement(
                _button2.default,
                { type: 'primary', onClick: confirm },
                data.confirmText
            ),
            _react2.default.createElement(
                _button2.default,
                { type: 'primary', inverse: true, onClick: cancel },
                data.cancelText
            )
        )
    );
}

exports.default = function () {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _modal2.default)(Alert, {
        backDrop: opt.backDrop || false, //点击背景是否关闭
        size: opt.size || 'sm',
        className: (0, _classnames2.default)('x-modal-confirm', opt.className),
        data: {
            title: opt.title || '系统提示', //标题
            content: opt.content || '您确定要执行此操作吗？', //内容
            confirmText: opt.confirmText || '确认', //按钮文案
            cancelText: opt.cancelText || '取消' //按钮文案
        }
    });
};

module.exports = exports['default'];