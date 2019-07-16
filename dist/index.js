(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./remind", "./layout/a", "./layout/b", "./grid", "./button", "./icon", "./input", "./toggle", "./pagination", "./modal", "./tooltip", "./radio", "./checkbox", "./upload", "./box", "./toast", "./form", "./table", "./select", "./switch", "./collapse"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./remind"), require("./layout/a"), require("./layout/b"), require("./grid"), require("./button"), require("./icon"), require("./input"), require("./toggle"), require("./pagination"), require("./modal"), require("./tooltip"), require("./radio"), require("./checkbox"), require("./upload"), require("./box"), require("./toast"), require("./form"), require("./table"), require("./select"), require("./switch"), require("./collapse"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.remind, global.a, global.b, global.grid, global.button, global.icon, global.input, global.toggle, global.pagination, global.modal, global.tooltip, global.radio, global.checkbox, global.upload, global.box, global.toast, global.form, global.table, global.select, global._switch, global.collapse);
    global.index = mod.exports;
  }
})(this, function (_exports, _remind, _a, _b, _grid, _button, _icon, _input, _toggle, _pagination, _modal, _tooltip, _radio, _checkbox, _upload, _box, _toast, _form, _table, _select, _switch, _collapse) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    Remind: true,
    LayoutA: true,
    LayoutB: true,
    Button: true,
    Icon: true,
    Input: true,
    Toggle: true,
    Pagination: true,
    Modal: true,
    Tooltip: true,
    Radio: true,
    Checkbox: true,
    Upload: true,
    Box: true,
    Toast: true,
    Form: true,
    Table: true,
    Select: true,
    Switch: true,
    Collapse: true
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
  Object.defineProperty(_exports, "Button", {
    enumerable: true,
    get: function get() {
      return _button["default"];
    }
  });
  Object.defineProperty(_exports, "Icon", {
    enumerable: true,
    get: function get() {
      return _icon["default"];
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
  _button = _interopRequireDefault(_button);
  _icon = _interopRequireDefault(_icon);
  _input = _interopRequireDefault(_input);
  _toggle = _interopRequireDefault(_toggle);
  _pagination = _interopRequireDefault(_pagination);
  _modal = _interopRequireDefault(_modal);
  _tooltip = _interopRequireDefault(_tooltip);
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
});