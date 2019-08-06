(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/extends", "@emotion/css", "react", "prop-types", "classnames"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/extends"), require("@emotion/css"), require("react"), require("prop-types"), require("classnames"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global._extends, global.css, global.react, global.propTypes, global.classnames);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _extends2, _css2, _react, _propTypes, _classnames) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Row = Row;
  _exports.Col = Col;
  _extends2 = _interopRequireDefault(_extends2);
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
      }, "label:Row;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmlkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFhIiwiZmlsZSI6Ii4uLy4uL3NyYy9ncmlkL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIFJvdyh7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgc3BhY2UsIHN0eWxlfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCd4LXJvdycsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogYC0ke3NwYWNlfXB4YCxcbiAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogYC0ke3NwYWNlfXB4YFxuICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8Y2hpbGQudHlwZSBzcGFjZT17c3BhY2V9IHsuLi5jaGlsZC5wcm9wc30vPjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQ29sKHtjaGlsZHJlbiwgc20sIG1kLCBsZywgc3BhY2UsIGNsYXNzTmFtZSwgc3R5bGV9KSB7XG5cbiAgICBsZXQgX3NtID0gc20gPyBgY29sLXNtLSR7c219YCA6ICcnLFxuICAgICAgICBfbWQgPSBtZCA/IGBjb2wtbWQtJHttZH1gIDogJycsXG4gICAgICAgIF9sZyA9IGxnID8gYGNvbC1sZy0ke2xnfWAgOiAnJztcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKF9zbSwgX21kLCBfbGcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgIGNzcz17e3BhZGRpbmdMZWZ0OiBgJHtzcGFjZX1weGAsIHBhZGRpbmdSaWdodDogYCR7c3BhY2V9cHhgfX0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblJvdy5wcm9wVHlwZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNwYWNlOiBQcm9wVHlwZXMubnVtYmVyXG59O1xuXG5Sb3cuZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgc3BhY2U6IDE1XG59O1xuXG5Db2wucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzbTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBtZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsZzogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufVxuXG5Db2wuZGVmYXVsZVByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc206IG51bGwsXG4gICAgbWQ6IG51bGwsXG4gICAgbGc6IG51bGwsXG4gICAgc3R5bGU6IG51bGxcbn1cbiJdfQ== */"))
    }, _react["default"].Children.map(children, function (child) {
      return (0, _core.jsx)(child.type, (0, _extends2["default"])({
        space: space
      }, child.props));
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
      }, "label:Col;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmlkL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCYSIsImZpbGUiOiIuLi8uLi9zcmMvZ3JpZC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBSb3coe2NoaWxkcmVuLCBjbGFzc05hbWUsIHNwYWNlLCBzdHlsZX0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygneC1yb3cnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IGAtJHtzcGFjZX1weGAsXG4gICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IGAtJHtzcGFjZX1weGBcbiAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGNoaWxkLnR5cGUgc3BhY2U9e3NwYWNlfSB7Li4uY2hpbGQucHJvcHN9Lz47XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENvbCh7Y2hpbGRyZW4sIHNtLCBtZCwgbGcsIHNwYWNlLCBjbGFzc05hbWUsIHN0eWxlfSkge1xuXG4gICAgbGV0IF9zbSA9IHNtID8gYGNvbC1zbS0ke3NtfWAgOiAnJyxcbiAgICAgICAgX21kID0gbWQgPyBgY29sLW1kLSR7bWR9YCA6ICcnLFxuICAgICAgICBfbGcgPSBsZyA/IGBjb2wtbGctJHtsZ31gIDogJyc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhfc20sIF9tZCwgX2xnLCBjbGFzc05hbWUpfVxuICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICBjc3M9e3twYWRkaW5nTGVmdDogYCR7c3BhY2V9cHhgLCBwYWRkaW5nUmlnaHQ6IGAke3NwYWNlfXB4YH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzcGFjZTogUHJvcFR5cGVzLm51bWJlclxufTtcblxuUm93LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHNwYWNlOiAxNVxufTtcblxuQ29sLnByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc206IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGc6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn1cblxuQ29sLmRlZmF1bGVQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIHNtOiBudWxsLFxuICAgIG1kOiBudWxsLFxuICAgIGxnOiBudWxsLFxuICAgIHN0eWxlOiBudWxsXG59XG4iXX0= */"))
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