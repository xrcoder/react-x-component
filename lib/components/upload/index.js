'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _upload = require('./upload');

var _upload2 = _interopRequireDefault(_upload);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

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


function getUid() {
    // 获取唯一ID值
    var now = +new Date();
    var index = 0;
    return {
        uid: function uid() {
            return 'upload-' + now + '-' + ++index;
        }
    };
}

var XUpload = function (_React$Component) {
    _inherits(XUpload, _React$Component);

    function XUpload(props) {
        _classCallCheck(this, XUpload);

        var _this = _possibleConstructorReturn(this, (XUpload.__proto__ || Object.getPrototypeOf(XUpload)).call(this, props));

        _this.state = {
            getUid: getUid(),
            initDone: false
        };
        _this.uploadList = {};
        return _this;
    }

    _createClass(XUpload, [{
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
        key: 'onChange',
        value: function onChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            } else {
                this.uploadFiles(files);
            }
            e.target.setAttribute('type', 'text');
        }
    }, {
        key: 'uploadFiles',
        value: function uploadFiles(files) {
            var _this3 = this;

            var postList = Array.prototype.slice.call(files);
            postList.map(function (item) {
                var file = item;
                file.uid = _this3.state.getUid.uid();
                _this3.upload(file, files);
            });
        }
    }, {
        key: 'upload',
        value: function upload(file, fileList) {
            var _this4 = this;

            var _props = this.props,
                onStart = _props.onStart,
                onProgress = _props.onProgress,
                _onSuccess = _props.onSuccess,
                _onError = _props.onError,
                data = _props.data,
                headers = _props.headers,
                timeout = _props.timeout;
            var props = this.props;

            new Promise(function (resolve) {
                var url = props.url;

                resolve(url);
            }).then(function (url) {
                var uid = file.uid;

                _this4.uploadList[uid] = (0, _upload2.default)({
                    url: url,
                    filename: props.name,
                    file: file,
                    data: data,
                    timeout: timeout,
                    headers: headers,
                    onProgress: onProgress ? function (e) {
                        onProgress(e, file);
                    } : null,
                    onSuccess: function onSuccess(res, xhr) {
                        delete _this4.uploadList[uid];
                        _onSuccess(res, file, xhr);
                    },
                    onError: function onError(err, res) {
                        delete _this4.uploadList[uid];
                        _onError(err, file);
                    }
                });
                onStart(file);
            });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            /*
            * 特别说明，input上传文件的时候，有一个小问题，就是连续上传同个文件的时候，第二次会无效
            * 解决办法：每次input选择完之后，将input的type属性设置成text，然后下次点击input上传前，将input的type属性重新设置成file
            * 本代码中解决分布在 onChange和handleClick方法中
            * */
            this.refs.uploadInput.setAttribute('type', 'file');
            this.refs.uploadInput.click();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                fileType = _props2.fileType,
                directory = _props2.directory;

            return this.state.initDone !== false && _react2.default.createElement(
                'div',
                { className: 'x-upload', onClick: this.handleClick.bind(this) },
                _react2.default.createElement(
                    'div',
                    { className: 'x-upload-trigger' },
                    children ? children : _react2.default.createElement(
                        _button2.default,
                        { icon: 'upload' },
                        _reactIntlUniversal2.default.get('KOF_REACT_X_COMPONENT_UPLOAD_UPLOAD').d('\u6587\u4EF6\u4E0A\u4F20')
                    )
                ),
                directory ? _react2.default.createElement('input', {
                    type: 'file',
                    accept: fileType,
                    onChange: this.onChange.bind(this),
                    ref: 'uploadInput',
                    className: 'x-upload-input',
                    webkitdirectory: 'true',
                    multiple: true
                }) : _react2.default.createElement('input', {
                    type: 'file',
                    accept: fileType,
                    onChange: this.onChange.bind(this),
                    ref: 'uploadInput',
                    className: 'x-upload-input'
                })
            );
        }
    }]);

    return XUpload;
}(_react2.default.Component);

XUpload.propTypes = {
    fileType: _propTypes2.default.string,
    url: _propTypes2.default.string,
    onStart: _propTypes2.default.func,
    onProgress: _propTypes2.default.func,
    onSuccess: _propTypes2.default.func,
    onError: _propTypes2.default.func,
    timeout: _propTypes2.default.number,
    name: _propTypes2.default.string,
    locale: _propTypes2.default.string
};
XUpload.defaultProps = {
    fileType: '*',
    timeout: 3000,
    name: 'file',
    locale: 'zh_CN'
};
exports.default = XUpload;
module.exports = exports['default'];