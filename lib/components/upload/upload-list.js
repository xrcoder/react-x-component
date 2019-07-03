'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../../components/icon');

var _icon2 = _interopRequireDefault(_icon);

var _imageView = require('../../components/imageView');

var _imageView2 = _interopRequireDefault(_imageView);

var _reactIntlUniversal = require('react-intl-universal');

var _reactIntlUniversal2 = _interopRequireDefault(_reactIntlUniversal);

var _loadlocales = require('../locales/loadlocales');

var _loadlocales2 = _interopRequireDefault(_loadlocales);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * name:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * date: 2019/1/25
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * author: kelvin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _default = function (_React$Component) {
    _inherits(_default, _React$Component);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            initDone: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (window.localStorage.getItem('isStoragelocale')) {
                this.setState({ initDone: window.localStorage.getItem('initDone') });
            } else {
                (0, _loadlocales2.default)(this.props.locale).then(function () {
                    _this2.setState({ initDone: true });
                });
            }
        }
    }, {
        key: 'deleteItem',
        value: function deleteItem(uid) {
            this.props.deleteItem(uid);
        }
    }, {
        key: 'renderNormalItem',
        value: function renderNormalItem(data, index) {
            var uid = data.uid,
                percent = data.percent,
                name = data.name,
                status = data.status;

            return _react2.default.createElement(
                'div',
                { className: 'x-upload-item-normal', key: 'normalItem_' + index },
                _react2.default.createElement(
                    'div',
                    { className: 'x-upload-item-info' },
                    _react2.default.createElement(_icon2.default, { type: "tag" }),
                    name
                ),
                _react2.default.createElement(_icon2.default, { className: 'x-upload-item-remove',
                    type: "close-a",
                    onClick: this.deleteItem.bind(this, uid) }),
                _react2.default.createElement(
                    'div',
                    { className: status === 1 ? 'x-upload-loading' : 'x-upload-loading none' },
                    _react2.default.createElement('div', {
                        className: 'x-upload-loading-bar',
                        style: { width: (parseInt(percent || 0).toFixed(2) || '0') + '%' } })
                )
            );
        }
    }, {
        key: 'renderPreviewItem',
        value: function renderPreviewItem(data, index) {
            var uid = data.uid,
                percent = data.percent,
                imgData = data.imgData,
                status = data.status;

            var ref = _react2.default.createRef(); // 获取图片预览组件内部的dom ref
            return _react2.default.createElement(
                'div',
                { className: 'x-upload-item-preview', key: 'thirdUploadImg_' + index },
                status <= 1 ? _react2.default.createElement(
                    'div',
                    { className: 'x-upload-loading-box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'x-upload-loading-txt' },
                        _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_UPLOAD_LOADING').d('\u6587\u4EF6\u4E0A\u4F20\u4E2D')
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'x-upload-loading' },
                        _react2.default.createElement('div', {
                            className: 'x-upload-loading-bar',
                            style: { width: (parseInt(percent || 0).toFixed(2) || '0') + '%' }
                        })
                    ),
                    _react2.default.createElement(_icon2.default, { className: 'x-upload-loading-close', type: 'close-a',
                        onClick: this.deleteItem.bind(this, uid) })
                ) : _react2.default.createElement(
                    'div',
                    { className: 'x-upload-img-box' },
                    _react2.default.createElement(_imageView2.default, {
                        size: 'sm',
                        src: imgData,
                        domRef: ref
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'x-upload-img-opt' },
                        _react2.default.createElement(_icon2.default, { type: 'scan', onClick: function onClick() {
                                console.log('this ref', ref.current);
                                ref.current.click();
                            } }),
                        _react2.default.createElement(_icon2.default, { type: 'trash', onClick: this.deleteItem.bind(this, uid) })
                    )
                )
            );
        }
    }, {
        key: 'renderPreviewWithNameItem',
        value: function renderPreviewWithNameItem(data, index) {
            var uid = data.uid,
                percent = data.percent,
                name = data.name,
                imgData = data.imgData,
                status = data.status;

            return _react2.default.createElement(
                'div',
                { className: 'x-upload-item-preview-name',
                    key: 'previewItem_' + index },
                _react2.default.createElement(
                    'div',
                    { className: 'img-name-wrapper' },
                    _react2.default.createElement(_imageView2.default, {
                        size: 'sm',
                        src: imgData
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'x-upload-name' },
                        _react2.default.createElement(
                            'span',
                            null,
                            name
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: status === 1 ? 'x-upload-loading' : 'x-upload-loading none' },
                            _react2.default.createElement('div', {
                                className: 'x-upload-loading-bar',
                                style: { width: (parseInt(percent || 0).toFixed(2) || '0') + '%' } })
                        )
                    )
                ),
                _react2.default.createElement(_icon2.default, {
                    type: "close-a",
                    className: "close-img-icon",
                    onClick: this.deleteItem.bind(this, uid) })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                files = _props.files,
                styleType = _props.styleType;

            return this.state.initDone !== false && _react2.default.createElement(
                'div',
                { className: localStorage.getItem('direction') == 'right' ? 'x-upload-list-i18n' : 'x-upload-list' },
                Object.keys(files).map(function (fileUid, index) {
                    switch (styleType) {
                        case 'preview':
                            return _this3.renderPreviewItem(files[fileUid], index);
                            break;
                        case 'previewWidthName':
                            return _this3.renderPreviewWithNameItem(files[fileUid], index);
                            break;
                        default:
                            return _this3.renderNormalItem(files[fileUid], index);
                            break;
                    }
                })
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, state) {
            if (Object.keys(props.files).length > 0) {
                return props;
            }
            return null;
        }
    }]);

    return _default;
}(_react2.default.Component);

_default.propTypes = {
    locale: _propTypes2.default.string
};
_default.defaultProps = {
    locale: 'zh_CN'
};
exports.default = _default;
module.exports = exports['default'];