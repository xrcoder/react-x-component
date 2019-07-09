'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Portal(_ref) {
    var children = _ref.children;


    var container = document.createElement('div');
    container.className = 'x-tooltip-portal';
    document.body.appendChild(container);

    (0, _react.useEffect)(function () {
        return function () {
            _reactDom2.default.unmountComponentAtNode(container);
            document.body.removeChild(container);
        };
    });

    return _reactDom2.default.createPortal(children, container);
}

Portal.propTypes = {
    children: _propTypes2.default.node.isRequired
};

exports.default = Portal;
module.exports = exports['default'];