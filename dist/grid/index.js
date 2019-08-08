(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "@babel/runtime/helpers/typeof", "@emotion/css", "react", "prop-types", "classnames", "../util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("@babel/runtime/helpers/typeof"), require("@emotion/css"), require("react"), require("prop-types"), require("classnames"), require("../util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global._typeof, global.css, global.react, global.propTypes, global.classnames, global.util);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _typeof2, _css2, _react, _propTypes, _classnames, _util) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Row = Row;
  _exports.Col = Col;
  _extends2 = _interopRequireDefault(_extends2);
  _typeof2 = _interopRequireDefault(_typeof2);
  _css2 = _interopRequireDefault(_css2);
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _classnames = _interopRequireDefault(_classnames);

  function Row(_ref) {
    var children = _ref.children,
        className = _ref.className,
        space = _ref.space,
        style = _ref.style;
    return (0, _core.jsx)("div", {
      className: (0, _classnames["default"])('x-row', className),
      style: style,
      css:
      /*#__PURE__*/
      (0, _css2["default"])({
        marginRight: "-".concat(space, "px"),
        marginLeft: "-".concat(space, "px")
      }, "label:Row;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmlkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNhIiwiZmlsZSI6Ii4uLy4uL3NyYy9ncmlkL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Z2V0RnVuY05hbWV9IGZyb20gJy4uL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gUm93KHtjaGlsZHJlbiwgY2xhc3NOYW1lLCBzcGFjZSwgc3R5bGV9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3gtcm93JywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBgLSR7c3BhY2V9cHhgLFxuICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBgLSR7c3BhY2V9cHhgXG4gICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCAhPT0gJ29iamVjdCcgfHwgZ2V0RnVuY05hbWUoY2hpbGQudHlwZSkgIT09ICdDb2wnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1Jvd+e7hOS7tueahOWtkOe7hOS7tuW/hemhu+aYr0NvbOe7hOS7tu+8gScpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGNoaWxkLnR5cGUgc3BhY2U9e3NwYWNlfSB7Li4uY2hpbGQucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Y2hpbGQudHlwZSBzcGFjZT17c3BhY2V9IHsuLi5jaGlsZC5wcm9wc30vPjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb2woe2NoaWxkcmVuLCBzbSwgbWQsIGxnLCBzcGFjZSwgY2xhc3NOYW1lLCBzdHlsZX0pIHtcblxuICAgIGxldCBfc20gPSBzbSA/IGBjb2wtc20tJHtzbX1gIDogJycsXG4gICAgICAgIF9tZCA9IG1kID8gYGNvbC1tZC0ke21kfWAgOiAnJyxcbiAgICAgICAgX2xnID0gbGcgPyBgY29sLWxnLSR7bGd9YCA6ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoX3NtLCBfbWQsIF9sZywgY2xhc3NOYW1lKX1cbiAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgY3NzPXt7cGFkZGluZ0xlZnQ6IGAke3NwYWNlfXB4YCwgcGFkZGluZ1JpZ2h0OiBgJHtzcGFjZX1weGB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuUm93LnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc3BhY2U6IFByb3BUeXBlcy5udW1iZXJcbn07XG5cblJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBzcGFjZTogMTVcbn07XG5cbkNvbC5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNtOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1kOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxnOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0XG59XG5cbkNvbC5kZWZhdWxlUHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzbTogbnVsbCxcbiAgICBtZDogbnVsbCxcbiAgICBsZzogbnVsbCxcbiAgICBzdHlsZTogbnVsbFxufVxuIl19 */"))
    }, _react["default"].Children.map(children, function (child) {
      if ((0, _typeof2["default"])(child) !== 'object' || (0, _util.getFuncName)(child.type) !== 'Col') {
        console.warn('Row组件的子组件必须是Col组件！');
        return (0, _core.jsx)(child.type, (0, _extends2["default"])({
          space: space
        }, child.props)); // return null;
      } else {
        return (0, _core.jsx)(child.type, (0, _extends2["default"])({
          space: space
        }, child.props));
      }
    }));
  }

  function Col(_ref2) {
    var children = _ref2.children,
        sm = _ref2.sm,
        md = _ref2.md,
        lg = _ref2.lg,
        space = _ref2.space,
        className = _ref2.className,
        style = _ref2.style;

    var _sm = sm ? "col-sm-".concat(sm) : '',
        _md = md ? "col-md-".concat(md) : '',
        _lg = lg ? "col-lg-".concat(lg) : '';

    return (0, _core.jsx)("div", {
      className: (0, _classnames["default"])(_sm, _md, _lg, className),
      style: style,
      css:
      /*#__PURE__*/
      (0, _css2["default"])({
        paddingLeft: "".concat(space, "px"),
        paddingRight: "".concat(space, "px")
      }, "label:Col;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmlkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDYSIsImZpbGUiOiIuLi8uLi9zcmMvZ3JpZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2dldEZ1bmNOYW1lfSBmcm9tICcuLi91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgc3BhY2UsIHN0eWxlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCd4LXJvdycsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogYC0ke3NwYWNlfXB4YCxcbiAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogYC0ke3NwYWNlfXB4YFxuICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgIT09ICdvYmplY3QnIHx8IGdldEZ1bmNOYW1lKGNoaWxkLnR5cGUpICE9PSAnQ29sJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdSb3fnu4Tku7bnmoTlrZDnu4Tku7blv4XpobvmmK9Db2znu4Tku7bvvIEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxjaGlsZC50eXBlIHNwYWNlPXtzcGFjZX0gey4uLmNoaWxkLnByb3BzfS8+O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGNoaWxkLnR5cGUgc3BhY2U9e3NwYWNlfSB7Li4uY2hpbGQucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29sKHtjaGlsZHJlbiwgc20sIG1kLCBsZywgc3BhY2UsIGNsYXNzTmFtZSwgc3R5bGV9KSB7XG5cbiAgICBsZXQgX3NtID0gc20gPyBgY29sLXNtLSR7c219YCA6ICcnLFxuICAgICAgICBfbWQgPSBtZCA/IGBjb2wtbWQtJHttZH1gIDogJycsXG4gICAgICAgIF9sZyA9IGxnID8gYGNvbC1sZy0ke2xnfWAgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKF9zbSwgX21kLCBfbGcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgIGNzcz17e3BhZGRpbmdMZWZ0OiBgJHtzcGFjZX1weGAsIHBhZGRpbmdSaWdodDogYCR7c3BhY2V9cHhgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblJvdy5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNwYWNlOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5Sb3cuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgc3BhY2U6IDE1XG59O1xuXG5Db2wucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZzogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5Db2wuZGVmYXVsZVByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc206IG51bGwsXG4gICAgbWQ6IG51bGwsXG4gICAgbGc6IG51bGwsXG4gICAgc3R5bGU6IG51bGxcbn1cbiJdfQ== */"))
    }, children);
  }

  Row.propTypes = {
    className: _propTypes["default"].string,
    style: _propTypes["default"].object,
    space: _propTypes["default"].number
  };
  Row.defaultProps = {
    className: '',
    style: null,
    space: 15
  };
  Col.propTypes = {
    className: _propTypes["default"].string,
    sm: _propTypes["default"].number,
    md: _propTypes["default"].number,
    lg: _propTypes["default"].number,
    style: _propTypes["default"].object
  };
  Col.defauleProps = {
    className: '',
    sm: null,
    md: null,
    lg: null,
    style: null
  };
});