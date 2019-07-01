(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@babel/runtime/helpers/classCallCheck", "@babel/runtime/helpers/createClass", "@babel/runtime/helpers/possibleConstructorReturn", "@babel/runtime/helpers/getPrototypeOf", "@babel/runtime/helpers/assertThisInitialized", "@babel/runtime/helpers/inherits", "react", "element-react", "../input", "../tooltip", "../button", "../popper"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@babel/runtime/helpers/classCallCheck"), require("@babel/runtime/helpers/createClass"), require("@babel/runtime/helpers/possibleConstructorReturn"), require("@babel/runtime/helpers/getPrototypeOf"), require("@babel/runtime/helpers/assertThisInitialized"), require("@babel/runtime/helpers/inherits"), require("react"), require("element-react"), require("../input"), require("../tooltip"), require("../button"), require("../popper"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.getPrototypeOf, global.assertThisInitialized, global.inherits, global.react, global.elementReact, global.input, global.tooltip, global.button, global.popper);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _getPrototypeOf2, _assertThisInitialized2, _inherits2, React, _elementReact, _input, _tooltip, _button, _popper) {
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
  _button = _interopRequireDefault(_button);
  _popper = _interopRequireDefault(_popper);
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

  var TreeSelection =
  /*#__PURE__*/
  function (_React$Component2) {
    (0, _inherits2["default"])(TreeSelection, _React$Component2);

    function TreeSelection(props) {
      var _this6;

      (0, _classCallCheck2["default"])(this, TreeSelection);
      _this6 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TreeSelection).call(this, props));
      _this6.xSelect = void 0;
      _this6.xTree = void 0;
      _this6.xTreeSecond = void 0;
      _this6.xTreeIsInit = false;
      _this6.state = {
        checkedList: props.checkedList && props.checkedList.length > 0 ? props.checkedList : [],
        list: props.list && props.list.length > 0 ? props.list : [],
        checkedKeys: props.checkedKeys && props.checkedKeys.length > 0 ? props.checkedKeys : [],
        defaultCheckedObjs: props.defaultCheckedObjs && props.defaultCheckedObjs.length > 0 ? props.defaultCheckedObjs : [],
        tabIndex: 0,
        searchTxt: '',
        defaultCheckedKeys: props.defaultCheckedKeys || [],
        nodeList: props.checkedList && props.checkedList.length > 0 ? props.checkedList : []
      };
      _this6.removeItem = _this6.removeItem.bind((0, _assertThisInitialized2["default"])(_this6));
      _this6.removeAll = _this6.removeAll.bind((0, _assertThisInitialized2["default"])(_this6));
      _this6.onPoperChange = _this6.onPoperChange.bind((0, _assertThisInitialized2["default"])(_this6));
      _this6.xSelect = React.createRef();
      return _this6;
    } // componentWillReceiveProps(props) {
    //     if (props.list && props.list.length !== this.state.list.length) {
    //         this.setState({
    //             list: props.list
    //         });
    //     }
    //     if (props.defaultCheckedObjs &&
    //             props.defaultCheckedObjs.length > 0 && props.defaultCheckedObjs.length != this.state.defaultCheckedObjs.length) {
    //                 console.log('??????', props.defaultCheckedObjs)
    //         this.setState({
    //             checkedList: props.defaultCheckedObjs
    //         });
    //     }
    //     if (props.checkedKeys &&
    //             props.checkedKeys.length > 0 && props.checkedKeys.length != this.state.checkedKeys.length) {
    //         this.setState({
    //             checkedKeys: props.checkedKeys
    //         })
    //     }
    // }


    (0, _createClass2["default"])(TreeSelection, [{
      key: "removeItem",
      value: function removeItem(item) {
        var _this$state3 = this.state,
            checkedList = _this$state3.checkedList,
            checkedKeys = _this$state3.checkedKeys;
        var onChange = this.props.onChange;

        for (var i = 0; i < checkedList.length; i++) {
          if (checkedList[i].id == item.id) {
            checkedList.splice(i, 1);
            break;
          }
        }

        for (var _i = 0; _i < checkedKeys.length; _i++) {
          if (checkedKeys[_i] == item.id) {
            checkedKeys.splice(_i, 1);
            var tree = this.xTree || this.xTreeSecond;

            try {
              tree && tree.setChecked(item.id, false);
            } catch (e) {
              console.log(e);
            }

            break;
          }
        }

        this.setState({
          checkedList: checkedList,
          checkedKeys: checkedKeys
        });
        onChange && onChange(checkedList, checkedKeys);
        this.forceUpdate();
      }
    }, {
      key: "removeAll",
      value: function removeAll() {
        var _this$state4 = this.state,
            checkedList = _this$state4.checkedList,
            checkedKeys = _this$state4.checkedKeys;
        var onChange = this.props.onChange;

        for (var i = 0; i < checkedKeys.length; i++) {
          var tree = this.xTree || this.xTreeSecond;

          try {
            tree && tree.setChecked(checkedKeys[i], false);
          } catch (e) {
            console.log(e);
          }
        }

        checkedList = [];
        checkedKeys = [];
        this.setState({
          checkedList: checkedList,
          checkedKeys: checkedKeys
        });
        onChange && onChange(checkedList, checkedKeys);
        this.forceUpdate();
      }
    }, {
      key: "onPoperChange",
      value: function onPoperChange(isShow) {
        var _this7 = this;

        if (isShow) {
          setTimeout(function () {
            var tree = _this7.xTree || _this7.xTreeSecond;

            try {
              if (tree) {
                _this7.xTreeIsInit = true;
                tree.setCheckedNodes(_this7.state.checkedList);

                _this7.forceUpdate();
              }
            } catch (e) {}
          }, 300);
        }
      }
    }, {
      key: "renderContent",
      value: function renderContent(nodeModel, data, store) {
        return (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)("span", {
          className: ['tree-label', data.tag === undefined ? '' : 'label-tag-' + data.tag].join(' ')
        }, data.label || data.name));
      }
    }, {
      key: "render",
      value: function render() {
        var _this8 = this;

        var _this$state5 = this.state,
            checkedList = _this$state5.checkedList,
            list = _this$state5.list,
            checkedKeys = _this$state5.checkedKeys,
            tabIndex = _this$state5.tabIndex,
            searchTxt = _this$state5.searchTxt;
        var _this$props2 = this.props,
            secondList = _this$props2.secondList,
            _onNodeClicked2 = _this$props2.onNodeClicked,
            canSearch = _this$props2.canSearch,
            canCount = _this$props2.canCount,
            placeholder = _this$props2.placeholder,
            onChange = _this$props2.onChange,
            tab = _this$props2.tab,
            onTabChange = _this$props2.onTabChange,
            defaultCheckedKeys = _this$props2.defaultCheckedKeys,
            clearable = _this$props2.clearable;
        return (0, _core.jsx)(_popper["default"], {
          placement: "rightTop",
          trigger: "click",
          overlayClassName: "tree-selection-popup",
          onVisibleChange: this.onPoperChange,
          content: (0, _core.jsx)(React.Fragment, null, onTabChange && (0, _core.jsx)("div", {
            className: "c-row"
          }, (0, _core.jsx)(_button["default"], {
            type: tab[tabIndex] === tab[0] ? 'primary' : null,
            onClick: function onClick(res) {
              onTabChange(tab[0]);

              _this8.setState({
                tabIndex: 0
              }, function () {
                _this8.xTree.setCheckedKeys(checkedKeys);

                _this8.xTree.filter(searchTxt);
              });
            }
          }, tab[0]), (0, _core.jsx)(_button["default"], {
            type: tab[tabIndex] === tab[1] ? 'primary' : null,
            onClick: function onClick(res) {
              onTabChange(tab[1]);

              _this8.setState({
                tabIndex: 1
              }, function () {
                _this8.xTreeSecond.setCheckedKeys(checkedKeys);

                _this8.xTreeSecond.filter(searchTxt);
              });
            }
          }, tab[1])), canSearch ? (0, _core.jsx)("div", {
            className: "c-row"
          }, (0, _core.jsx)(_input["default"], {
            placeholder: "\u8BF7\u8F93\u5165",
            onChange: function onChange(text) {
              _this8.setState({
                searchTxt: text
              });

              console.log(_this8.xTree, _this8.xTreeSecond);
              tabIndex == 0 && _this8.xTree.filter(text);
              tabIndex == 1 && _this8.xTreeSecond.filter(text);
            }
          }), (0, _core.jsx)("span", {
            className: "icon-search"
          })) : null, tabIndex === 0 && (0, _core.jsx)(_elementReact.Tree, {
            data: list,
            className: ['no-edit', this.props.type == 'device' ? 'device' : ''].join(' '),
            options: this.props.options ? this.props.options : {
              children: 'children',
              label: 'label'
            },
            isShowCheckbox: true,
            highlightCurrent: false,
            onCheckChange: function onCheckChange(data, checked, indeterminate) {},
            onNodeClicked: function onNodeClicked(data, reactElement) {
              _onNodeClicked2 && _onNodeClicked2(data, reactElement);

              if (_this8.props.isHideAfterClick && _this8.xSelect && _this8.xSelect.current) {
                _this8.xSelect.current.click();
              }
            },
            onCurrentChange: function onCurrentChange(data, node) {
              var nodeList = [],
                  nodeKey = [];

              var nowCheckedList = _this8.xTree.getCheckedNodes();

              nowCheckedList && nowCheckedList.forEach(function (item, index) {
                if (!item.children) {
                  if (!_this8.props.showTag) {
                    nodeList.push(item);
                    nodeKey.push(item.id);
                  } else {
                    if (_this8.props.showTag === item.tag) {
                      nodeList.push(item);
                      nodeKey.push(item.id);
                    }
                  }
                }
              });

              _this8.setState({
                checkedKeys: _this8.xTree.getCheckedKeys(),
                checkedList: nodeList
              });

              onChange && onChange(nodeList, nodeKey);
            },
            nodeKey: "id",
            ref: function ref(e) {
              _this8.xTree = e;
            },
            filterNodeMethod: function filterNodeMethod(value, data) {
              if (!value) return true;
              return data.label.indexOf(value) !== -1;
            },
            defaultCheckedKeys: defaultCheckedKeys,
            renderContent: function renderContent() {
              return _this8.renderContent.apply(_this8, arguments);
            }
          }), tabIndex === 1 && (0, _core.jsx)(_elementReact.Tree, {
            data: secondList,
            className: ['no-edit', this.props.type == 'device' ? 'device' : ''].join(' '),
            options: this.props.options ? this.props.options : {
              children: 'children',
              label: 'label'
            },
            isShowCheckbox: true,
            highlightCurrent: false,
            onCurrentChange: function onCurrentChange(data, node) {
              var nodeList = [],
                  nodeKey = [];

              var nowCheckedList = _this8.xTreeSecond.getCheckedNodes();

              nowCheckedList && nowCheckedList.forEach(function (item, index) {
                if (!item.children) {
                  if (!_this8.props.showTag) {
                    nodeList.push(item);
                    nodeKey.push(item.id);
                  } else {
                    if (_this8.props.showTag === item.tag) {
                      nodeList.push(item);
                      nodeKey.push(item.id);
                    }
                  }
                }
              });

              _this8.setState({
                checkedKeys: _this8.xTreeSecond.getCheckedKeys(),
                checkedList: nodeList
              });

              onChange && onChange(nodeList, nodeKey);
            },
            onCheckChange: function onCheckChange(data, checked, indeterminate) {// let arr = checkedList;
              // let keyArr = checkedKeys;
              // if (checked) {
              //     let i;
              //     for (i = 0; i < arr.length; i++) {
              //         if (arr[i].id == data.id) {
              //             break;
              //         }
              //     }
              //     if (i >= arr.length) {
              //         arr.push(data);
              //         keyArr.push(data.id);
              //     }
              // } else {
              //     for (let i = 0; i < arr.length; i++) {
              //         if (arr[i].id == data.id) {
              //             arr.splice(i, 1);
              //             keyArr.splice(i, 1);
              //             break;
              //         }
              //     }
              // }
              // this.setState({
              //     checkedList: arr,
              //     checkedKeys: keyArr
              // });
              // onChange && onChange(arr, keyArr);
            },
            onNodeClicked: function onNodeClicked(data, reactElement) {
              _onNodeClicked2 && _onNodeClicked2(data, reactElement); // this.forceUpdate();
            },
            nodeKey: "id",
            ref: function ref(e) {
              return _this8.xTreeSecond = e;
            },
            filterNodeMethod: function filterNodeMethod(value, data) {
              if (!value) return true;
              return data.label.indexOf(value) !== -1;
            },
            defaultCheckedKeys: defaultCheckedKeys,
            renderContent: function renderContent() {
              return _this8.renderContent.apply(_this8, arguments);
            }
          }))
        }, (0, _core.jsx)("div", {
          className: ['x-select', 'x-select-multiple', checkedList && checkedList.length > 0 ? 'x-select-hasvalue' : ''].join(' '),
          ref: this.xSelect
        }, (0, _core.jsx)("div", {
          className: "x-select-title"
        }, (0, _core.jsx)("span", {
          className: clearable && checkedList && checkedList.length > 0 ? 'cls' : 'arrow',
          onClick: function onClick(e) {
            if (clearable && checkedList && checkedList.length > 0) {
              e.stopPropagation();

              _this8.removeAll();
            }
          }
        }), (0, _core.jsx)("span", {
          className: "input-placeholder"
        }, placeholder || '选择设备'), checkedList && checkedList.length > 0 ? (0, _core.jsx)("ul", {
          className: "x-select-ul-value"
        }, checkedList.map(function (item, index) {
          return (0, _core.jsx)("li", {
            key: '' + index + item.value,
            className: "x-select-li"
          }, item.label || item.name, (0, _core.jsx)("span", {
            className: "cls-icon",
            onClick: function onClick(e) {
              _this8.removeItem(item);

              e.preventDefault();
              e.stopPropagation();
            }
          }));
        })) : null, canCount && (0, _core.jsx)("span", {
          className: "count"
        }, "\u5DF2\u9009".concat(checkedList ? checkedList.length : 0, "\u4E2A")))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        // if (nextProps.list && nextProps.list.length !== prevState.list.length) {
        return {
          list: nextProps.list,
          checkedList: nextProps.checkedList,
          checkedKeys: nextProps.checkedKeys
        }; // }
        // console.log(nextProps.checkedList, nextProps)
        // //defaultCheckedObjs 做标记用
        // if (nextProps.checkedList.length > 0) {
        //     return {
        //     }
        // }
        // if (nextProps.checkedKeys && nextProps.checkedKeys.length !== prevState.checkedKeys.length) {
        //     return {
        //     }
        // }
        // return null
      }
    }]);
    return TreeSelection;
  }(React.Component);

  TreeSelection.defaultProps = {
    list: [],
    secondList: [],
    onChange: function onChange() {},
    checkedList: [],
    options: {},
    canSearch: false,
    onCheckChange: function onCheckChange() {},
    onNodeClicked: function onNodeClicked() {},
    defaultCheckedKeys: [],
    defaultCheckedObjs: [],
    selectedKeys: [],
    placeholder: '请输入',
    checkedKeys: [],
    tab: [],
    onTabChange: function onTabChange() {},
    canCount: false,
    showTag: 0,
    type: '',
    isHideAfterClick: false,
    clearable: false
  };
  var _default = {
    DataTree: DataTree,
    TreeSelection: TreeSelection
  };
  _exports["default"] = _default;
  module.exports = exports.default;
});