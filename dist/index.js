(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./remind", "./layout/a", "./layout/b", "./grid", "./use", "./util", "./button", "./icon", "./close", "./input", "./toggle", "./pagination", "./modal", "./tooltip", "./popper", "./radio", "./checkbox", "./upload", "./box", "./toast", "./form", "./table", "./select", "./switch", "./collapse", "./dropdown", "./timepicker", "./datepicker", "./tree"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./remind"), require("./layout/a"), require("./layout/b"), require("./grid"), require("./use"), require("./util"), require("./button"), require("./icon"), require("./close"), require("./input"), require("./toggle"), require("./pagination"), require("./modal"), require("./tooltip"), require("./popper"), require("./radio"), require("./checkbox"), require("./upload"), require("./box"), require("./toast"), require("./form"), require("./table"), require("./select"), require("./switch"), require("./collapse"), require("./dropdown"), require("./timepicker"), require("./datepicker"), require("./tree"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.remind, global.a, global.b, global.grid, global.use, global.util, global.button, global.icon, global.close, global.input, global.toggle, global.pagination, global.modal, global.tooltip, global.popper, global.radio, global.checkbox, global.upload, global.box, global.toast, global.form, global.table, global.select, global._switch, global.collapse, global.dropdown, global.timepicker, global.datepicker, global.tree);
    global.index = mod.exports;
  }
})(this, function (_exports, _remind, _a, _b, _grid, _use, _util2, _button, _icon, _close, _input, _toggle, _pagination, _modal, _tooltip, _popper, _radio, _checkbox, _upload, _box, _toast, _form, _table, _select, _switch, _collapse, _dropdown, _timepicker, _datepicker, _tree) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    Remind: true,
    LayoutA: true,
    LayoutB: true,
    util: true,
    Icon: true,
    Close: true,
    Input: true,
    Toggle: true,
    Pagination: true,
    Modal: true,
    Tooltip: true,
    Popper: true,
    Radio: true,
    Checkbox: true,
    Upload: true,
    Box: true,
    Toast: true,
    Form: true,
    Table: true,
    Select: true,
    Switch: true,
    Collapse: true,
    DropdownSelect: true
  };
  Object.defineProperty(_exports, "Remind", {
    enumerable: true,
    get: function get() {
      return _remind["default"];
    }
  });
  Object.defineProperty(_exports, "LayoutA", {
    enumerable: true,
    get: function get() {
      return _a["default"];
    }
  });
  Object.defineProperty(_exports, "LayoutB", {
    enumerable: true,
    get: function get() {
      return _b["default"];
    }
  });
  Object.defineProperty(_exports, "util", {
    enumerable: true,
    get: function get() {
      return _util2["default"];
    }
  });
  Object.defineProperty(_exports, "Icon", {
    enumerable: true,
    get: function get() {
      return _icon["default"];
    }
  });
  Object.defineProperty(_exports, "Close", {
    enumerable: true,
    get: function get() {
      return _close["default"];
    }
  });
  Object.defineProperty(_exports, "Input", {
    enumerable: true,
    get: function get() {
      return _input["default"];
    }
  });
  Object.defineProperty(_exports, "Toggle", {
    enumerable: true,
    get: function get() {
      return _toggle["default"];
    }
  });
  Object.defineProperty(_exports, "Pagination", {
    enumerable: true,
    get: function get() {
      return _pagination["default"];
    }
  });
  Object.defineProperty(_exports, "Modal", {
    enumerable: true,
    get: function get() {
      return _modal["default"];
    }
  });
  Object.defineProperty(_exports, "Tooltip", {
    enumerable: true,
    get: function get() {
      return _tooltip["default"];
    }
  });
  Object.defineProperty(_exports, "Popper", {
    enumerable: true,
    get: function get() {
      return _popper["default"];
    }
  });
  Object.defineProperty(_exports, "Radio", {
    enumerable: true,
    get: function get() {
      return _radio["default"];
    }
  });
  Object.defineProperty(_exports, "Checkbox", {
    enumerable: true,
    get: function get() {
      return _checkbox["default"];
    }
  });
  Object.defineProperty(_exports, "Upload", {
    enumerable: true,
    get: function get() {
      return _upload["default"];
    }
  });
  Object.defineProperty(_exports, "Box", {
    enumerable: true,
    get: function get() {
      return _box["default"];
    }
  });
  Object.defineProperty(_exports, "Toast", {
    enumerable: true,
    get: function get() {
      return _toast["default"];
    }
  });
  Object.defineProperty(_exports, "Form", {
    enumerable: true,
    get: function get() {
      return _form["default"];
    }
  });
  Object.defineProperty(_exports, "Table", {
    enumerable: true,
    get: function get() {
      return _table["default"];
    }
  });
  Object.defineProperty(_exports, "Select", {
    enumerable: true,
    get: function get() {
      return _select["default"];
    }
  });
  Object.defineProperty(_exports, "Switch", {
    enumerable: true,
    get: function get() {
      return _switch["default"];
    }
  });
  Object.defineProperty(_exports, "Collapse", {
    enumerable: true,
    get: function get() {
      return _collapse["default"];
    }
  });
  Object.defineProperty(_exports, "DropdownSelect", {
    enumerable: true,
    get: function get() {
      return _dropdown["default"];
    }
  });
  _remind = _interopRequireDefault(_remind);
  _a = _interopRequireDefault(_a);
  _b = _interopRequireDefault(_b);
  Object.keys(_grid).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _grid[key];
      }
    });
  });
  Object.keys(_use).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _use[key];
      }
    });
  });
  _util2 = _interopRequireDefault(_util2);
  Object.keys(_button).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _button[key];
      }
    });
  });
  _icon = _interopRequireDefault(_icon);
  _close = _interopRequireDefault(_close);
  _input = _interopRequireDefault(_input);
  _toggle = _interopRequireDefault(_toggle);
  _pagination = _interopRequireDefault(_pagination);
  _modal = _interopRequireDefault(_modal);
  _tooltip = _interopRequireDefault(_tooltip);
  _popper = _interopRequireDefault(_popper);
  _radio = _interopRequireDefault(_radio);
  _checkbox = _interopRequireDefault(_checkbox);
  _upload = _interopRequireDefault(_upload);
  _box = _interopRequireDefault(_box);
  _toast = _interopRequireDefault(_toast);
  _form = _interopRequireDefault(_form);
  _table = _interopRequireDefault(_table);
  _select = _interopRequireDefault(_select);
  _switch = _interopRequireDefault(_switch);
  _collapse = _interopRequireDefault(_collapse);
  _dropdown = _interopRequireDefault(_dropdown);
  Object.keys(_timepicker).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _timepicker[key];
      }
    });
  });
  Object.keys(_datepicker).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _datepicker[key];
      }
    });
  });
  Object.keys(_tree).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _tree[key];
      }
    });
  });
});