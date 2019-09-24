(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/inherits", "react", "element-react", "../input", "../tooltip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/assertThisInitialized"), require("@babel/runtime/helpers/inherits"), require("react"), require("element-react"), require("../input"), require("../tooltip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.assertThisInitialized, global.inherits, global.react, global.elementReact, global.input, global.tooltip);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _inherits2, React, _elementReact, _input, _tooltip) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _inherits2 = _interopRequireDefault(_inherits2);
  React = _interopRequireWildcard(React);
  _input = _interopRequireDefault(_input);
  _tooltip = _interopRequireDefault(_tooltip);
  var tmpItem = null;
  var treeId = -1;

  var DataTree =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(DataTree, _React$Component);

    //临时节点
    //树的store
    //编辑类型 add or edit
    //当前父节点ID
    function DataTree(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, DataTree);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DataTree).call(this, props));
      _this.tmpItem = void 0;
      _this.store = void 0;
      _this.editType = void 0;
      _this.parentId = void 0;
      _this.tree = void 0;
      _this.cancelFn = _this.cancelEditAll.bind((0, _assertThisInitialized2["default"])(_this));
      _this.state = {
        data: props.data,
        isEditing: false,
        inEditingItemValue: ''
      };
      return _this;
    }

    (0, _createClass2["default"])(DataTree, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.canEdit) {
          document.addEventListener('click', this.cancelFn, false);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.canEdit) {
          document.removeEventListener('click', this.cancelFn, false);
        }
      }
    }, {
      key: "cancelEditAll",

      /**
       * 全局取消操作
       * @param e
       */
      value: function cancelEditAll(e) {
        var treeNode = this.refs.dataTree;

        if (!treeNode.contains(e.target) && this.state) {
          this.setState({
            isEditing: false,
            inEditingItemValue: ''
          });

          if (tmpItem) {
            tmpItem.isEditing = false;

            if (this.editType === 'add') {
              this.store.remove(tmpItem);
              tmpItem = null;
            }

            this.forceUpdate();
          }
        }
      }
      /**
       * 添加操作
       * @param store
       * @param data
       * @param nodeModel
       */

    }, {
      key: "append",
      value: function append(store, data, nodeModel) {
        // 未展开，展开
        if (!nodeModel.expanded) {
          nodeModel.expanded = true;
        }

        tmpItem = {
          id: treeId--,
          label: 'temp',
          children: [],
          isEditing: true
        };

        if (data.tag !== undefined && data.tag === 0) {
          tmpItem.tag = 1;
        }

        if (this.props.nodeKey && this.props.nodeKey === 'treeId') {
          tmpItem.treeId = tmpItem.id + '_' + tmpItem.tag;
        }

        nodeModel.store.append(tmpItem, data);
        this.setState({
          isEditing: true,
          inEditingItemValue: ''
        });
        this.editType = 'add';
        this.parentId = data.id;
        this.forceUpdate();
        setTimeout(function () {
          document.querySelector('.operation-bar.show-op').scrollIntoView(false);
          var input = document.querySelectorAll('.operation-bar.show-op input');
          input[0].focus();
        }, 300);
      }
      /**
       * 删除操作
       * @param store
       * @param data
       */

    }, {
      key: "remove",
      value: function remove(store, data) {
        var _this2 = this;

        this.props.onRemoveNode(data, function (res, list) {
          if (res === 'success') {
            if (_this2.props.nodeKey && _this2.props.nodeKey === 'treeId') {
              var key = data.id + '_' + data.tag;
              store.nodesMap[key].visible = false;
            } else {
              // 直接删报错，姑且隐藏吧
              store.nodesMap[data.id].visible = false;
            }

            _this2.forceUpdate();
          }
        });
      }
      /**
       * 编辑操作
       * @param store
       * @param data
       */

    }, {
      key: "doEdit",
      value: function doEdit(store, data, nodeModel) {
        this.setState({
          isEditing: true,
          inEditingItemValue: data.label
        });
        data.isEditing = true;
        this.editType = 'edit';
        tmpItem = data;
        setTimeout(function () {
          var input = document.querySelectorAll('.operation-bar.show-op input');
          input[0].focus();
        }, 300);
      }
      /**
       * 单项后的取消操作
       * @param store
       * @param data
       */

    }, {
      key: "cancelEdit",
      value: function cancelEdit(store, data) {
        this.setState({
          isEditing: false,
          inEditingItemValue: ''
        });
        data.isEditing = false;

        if (tmpItem) {
          if (this.editType === 'add') {
            this.store.remove(data);
          }

          this.forceUpdate();
        }
      }
      /**
       * 确认操作，add or edit
       * @param store
       * @param data
       */

    }, {
      key: "confirmEdit",
      value: function confirmEdit(store, data) {
        var _this3 = this;

        if (this.editType === 'add') {
          this.props.onAddNode({
            parentId: this.parentId || '-1',
            name: this.state.inEditingItemValue,
            tag: data.tag === undefined ? '' : data.tag
          }, function (res, resId) {
            if (res === 'success') {
              if (_this3.props.nodeKey && _this3.props.nodeKey === 'treeId') {
                // 重新赋值 id
                data.id = resId;
                var key = treeId + 1 + '_' + data.tag; // 依据新生成的ID，复制一份树store的nodesMap传入，并删除之前的负ID节点

                store.nodesMap[resId + '_' + data.tag] = store.nodesMap[key];
              } else {
                // 重新赋值 id
                data.id = resId; // 依据新生成的ID，复制一份树store的nodesMap传入，并删除之前的负ID节点

                store.nodesMap[resId] = store.nodesMap[treeId + 1];
              }

              delete store.nodesMap[treeId + 1];

              _this3.clearStatus(data);

              _this3.forceUpdate();
            }
          });
        } else if (this.editType === 'edit') {
          this.props.onEditNode({
            id: data.id,
            name: this.state.inEditingItemValue,
            tag: data.tag === undefined ? '' : data.tag
          }, function (res) {
            if (res === 'success') {
              _this3.clearStatus(data);

              _this3.forceUpdate();
            }
          });
        }
      }
      /**
       * 清除编辑状态
       * @param data
       */

    }, {
      key: "clearStatus",
      value: function clearStatus(data) {
        data.label = this.state.inEditingItemValue;
        data.isEditing = false;
        this.setState({
          inEditingItemValue: '',
          isEditing: false
        });
        this.parentId = '';
        tmpItem = null;
      }
    }, {
      key: "renderContent",
      value: function renderContent(nodeModel, data, store) {
        var _this4 = this;

        this.store = store;
        var canEdit = this.props.canEdit;
        var _this$state = this.state,
            isEditing = _this$state.isEditing,
            inEditingItemValue = _this$state.inEditingItemValue;
        return (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)(_tooltip["default"], {
          className: [canEdit && isEditing && data.isEditing ? 'hide-op' : 'tree-label', data.tag === undefined ? '' : 'label-tag-' + data.tag].join(' '),
          tagName: "span",
          content: data.label
        }, data.label), (0, _core.jsx)("span", {
          className: ['operation-bar', canEdit && isEditing && data.isEditing ? 'show-op' : '', data.tag === undefined ? '' : 'operation-tag-' + data.tag].join(' ')
        }, (0, _core.jsx)("span", {
          className: "input-box",
          onClick: function onClick(e) {
            e.stopPropagation();
          }
        }, (0, _core.jsx)(_input["default"], {
          value: inEditingItemValue,
          className: "datatree-edit-input tree-input-".concat(data.id),
          maxLength: 32,
          onChange: function onChange(res) {
            _this4.setState({
              inEditingItemValue: res
            });
          }
        })), (0, _core.jsx)("span", {
          className: "icon-bar"
        }, (0, _core.jsx)("span", {
          className: "icon icon-add",
          onClick: function onClick(e) {
            _this4.append(store, data, nodeModel);

            e.stopPropagation();
          }
        }), (0, _core.jsx)("span", {
          className: "icon icon-edit",
          onClick: function onClick(e) {
            _this4.doEdit(store, data, nodeModel);

            e.stopPropagation();
          }
        }), (0, _core.jsx)("span", {
          className: "icon icon-delete",
          onClick: function onClick(e) {
            _this4.remove(store, data);

            e.stopPropagation();
          }
        }), (0, _core.jsx)("span", {
          className: "icon icon-confirm",
          onClick: function onClick(e) {
            _this4.confirmEdit(store, data);

            e.stopPropagation();
          }
        }), (0, _core.jsx)("span", {
          className: "icon icon-cancel",
          onClick: function onClick(e) {
            _this4.cancelEdit(store, data);

            e.stopPropagation();
          }
        }))));
      }
    }, {
      key: "render",
      value: function render() {
        var _this5 = this;

        var _this$props = this.props,
            _onCheckChange = _this$props.onCheckChange,
            _onNodeClicked = _this$props.onNodeClicked,
            canEdit = _this$props.canEdit,
            canCheck = _this$props.canCheck,
            canSearch = _this$props.canSearch,
            defaultCheckedKeys = _this$props.defaultCheckedKeys,
            _onCurrentChange = _this$props.onCurrentChange,
            defaultExpandAll = _this$props.defaultExpandAll,
            expandOnClickNode = _this$props.expandOnClickNode,
            defaultExpandedKeys = _this$props.defaultExpandedKeys,
            type = _this$props.type,
            maxChoose = _this$props.maxChoose;
        var _this$state2 = this.state,
            data = _this$state2.data,
            isEditing = _this$state2.isEditing,
            selectedKeys = _this$state2.selectedKeys;
        return (0, _core.jsx)("div", {
          className: "el-tree-container",
          ref: "dataTree"
        }, canSearch ? (0, _core.jsx)("div", {
          className: "c-row"
        }, (0, _core.jsx)(_input["default"], {
          placeholder: "\u8BF7\u8F93\u5165",
          onChange: function onChange(text) {
            return _this5.tree.filter(text);
          }
        }), (0, _core.jsx)("span", {
          className: "icon-search"
        })) : null, (0, _core.jsx)(_elementReact.Tree, {
          data: data,
          className: [canEdit ? 'can-edit' : 'no-edit', isEditing ? 'inediting' : '', type ? type : ''].join(' '),
          options: this.props.options ? this.props.options : {
            children: 'children',
            label: 'label'
          },
          isShowCheckbox: canCheck,
          highlightCurrent: true,
          onCheckChange: function onCheckChange(data, checked, indeterminate) {
            _onCheckChange && _onCheckChange(data, checked, indeterminate);

            _this5.forceUpdate();
          },
          onNodeClicked: function onNodeClicked(data, reactElement) {
            _onNodeClicked && _onNodeClicked(data, reactElement);

            _this5.forceUpdate();
          },
          onCurrentChange: function onCurrentChange(data, node) {
            _onCurrentChange && _onCurrentChange(_this5.tree.getCheckedKeys(), _this5.tree.getCheckedNodes());

            _this5.forceUpdate();
          },
          nodeKey: this.props.nodeKey ? this.props.nodeKey : 'id',
          renderContent: function renderContent() {
            return _this5.renderContent.apply(_this5, arguments);
          },
          ref: function ref(e) {
            return _this5.tree = e;
          },
          filterNodeMethod: function filterNodeMethod(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          },
          defaultExpandAll: defaultExpandAll,
          defaultCheckedKeys: defaultCheckedKeys,
          expandOnClickNode: expandOnClickNode || true,
          defaultExpandedKeys: defaultExpandedKeys,
          maxChoose: maxChoose
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, preState) {
        if (preState.data !== nextProps.data) {
          return {
            data: nextProps.data
          };
        }

        return null;
      }
    }]);
    return DataTree;
  }(React.Component);

  DataTree.defaultProps = {
    canEdit: false,
    nodeKey: 'id',
    maxChoose: 0
  };
  var _default = DataTree;
  _exports["default"] = _default;
  module.exports = exports.default;
});