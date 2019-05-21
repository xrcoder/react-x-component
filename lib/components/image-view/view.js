'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * name:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * desc:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * date: 2018/12/29
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * author: kelvin
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


exports.default = function (src) {
    var oModal = document.createElement('div');
    document.body.appendChild(oModal);

    return new Promise(function (resolve, reject) {
        var Modal = function (_React$Component) {
            _inherits(Modal, _React$Component);

            function Modal() {
                _classCallCheck(this, Modal);

                var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

                _this.state = {
                    isLoading: true,
                    loadingStr: '图片加载中...',
                    boxW: 100,
                    boxH: 100
                };
                return _this;
            }

            _createClass(Modal, [{
                key: 'componentDidMount',
                value: function componentDidMount() {
                    this.imgToCanvas();
                }
            }, {
                key: 'imgToCanvas',
                value: function imgToCanvas() {
                    var _this2 = this;

                    // 图片加载&图片到canvas的转换
                    var canvas = this.refs.imgCanvas;
                    var image = new Image();
                    image.src = src;
                    image.onload = function () {
                        var width = image.width;
                        var height = image.height;
                        // 根据屏幕高度设置最适应的宽度
                        var boxH = window.innerHeight * 0.7;
                        var boxW = boxH / height * width;
                        _this2.setState({
                            boxW: boxW,
                            boxH: boxH,
                            isLoading: false
                        });
                        canvas.width = width * 1.5;
                        canvas.height = height * 1.5;
                        canvas.getContext('2d').drawImage(image, 0, 0, width * 1.5, height * 1.5);
                    };
                    image.onerror = function () {
                        _this2.setState({
                            isLoading: true,
                            loadingStr: '图片加载失败'
                        });
                    };
                }
            }, {
                key: 'handleBgClick',
                value: function handleBgClick(e) {
                    var target = e.target;
                    var cls = target.className;
                    if (cls === 'x-imgview-box') {
                        this.close();
                    }
                }
            }, {
                key: 'close',
                value: function close() {
                    _reactDom2.default.unmountComponentAtNode(oModal);
                    document.body.removeChild(oModal);
                }
            }, {
                key: 'render',
                value: function render() {
                    var _state = this.state,
                        boxW = _state.boxW,
                        boxH = _state.boxH,
                        isLoading = _state.isLoading,
                        loadingStr = _state.loadingStr;

                    var style = { width: boxW + 'px', height: boxH + 'px' };
                    return _react2.default.createElement(
                        'div',
                        { className: 'x-imgview-box', ref: 'imgviewBox', onClick: this.handleBgClick.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: 'imgview-box', ref: 'imgview', style: style },
                            _react2.default.createElement('canvas', { id: 'imgCanvas', ref: 'imgCanvas', className: 'img-canvas', style: style }),
                            isLoading ? _react2.default.createElement(
                                'div',
                                { className: 'x-imgview-loading' },
                                loadingStr
                            ) : _react2.default.createElement(
                                'div',
                                { className: 'x-imgview-close' },
                                _react2.default.createElement(_icon2.default, { type: 'close-a', onClick: this.close.bind(this) })
                            )
                        ),
                        _react2.default.createElement('div', { className: 'imgview-tools' })
                    );
                }
            }]);

            return Modal;
        }(_react2.default.Component);

        _reactDom2.default.render(_react2.default.createElement(Modal, null), oModal);
    });
};

module.exports = exports['default'];