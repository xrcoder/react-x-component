import React, { Component } from 'react';
// import './index.scss';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class extends Component {

    static propTypes = {
        options: PropTypes.array,               //选项列表
        selectedValueList: PropTypes.array,     //默认已选择列表
        selectedList: PropTypes.array,          //已勾选列表
        size: PropTypes.oneOf(['lg', 'md']),    //尺寸
        locale: PropTypes.string,               //本地化
        placeholder: PropTypes.string,          //placeholder
        mode: PropTypes.string,                 //类型
        selectedValue: PropTypes.number         //已选项
    };

    static defaultProps = {
        size: 'lg',
        locale: 'zh_CN'
    };
      
    constructor(props) {
        super(props)
        this.state = {
            showOptions: false,                                  
            selectedValue: props.selectedValue,
            selectedValueList: props.selectedValueList || [],    
            selected: {},                            
            options: props.options || [],                 
            mode: props.mode ? props.mode : 'single',  
            selectedList: props.selectedValueList || [],
            placeholder: props.placeholder || '请选择',
            multipleHeight: 36
        }
        this.xSelect = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocClick);
        let arr = this.props.options;

        if (this.state.mode === 'single') {
            let value = this.state.selectedValue;
            this.setState({
                selectedValue: value ? value : {},
                selected: this.getSelected(value)
            })
        } else {
            let value = this.state.selectedValueList;
            this.setState({
                selectedList: this.getSelectedList(value)
            })
        }

        this.setState({
            options: this.filterData(arr)
        });

    }

    componentWillReceiveProps(props){
        this.setState({
            options:props.options,
            selectedValue:props.selectedValue,
            selectedValueList:props.selectedValueList,
            selected:this.getSelected(props.selectedValue),
            selectedList:this.getSelectedList(props.selectedList||[])
        })
    }

    handleDocClick = (e) => {
        let that = this;
        const currentNode = that.xSelect.current;
        if (!currentNode.contains(e.target)) {
            that.setState({
                showOptions: false
            })
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocClick);
    }

    filterData(arr) {
        let arr_new = []
        arr.map(item => {
            if ((item.value && item.label) || item.value === 0 || item.label === 0) {
                arr_new.push(item)
            }
        })
        return arr_new
    }

    getSelected(selectedValue){
        let obj={}
        this.filterData(this.props.options).map(item=>{
            if(item.value==selectedValue){
                obj=item
            }
        })
        return obj;
    }

    getSelectedList(selectedValueList){
        let selectedList = [];
        this.filterData(this.props.options).map(item=>{
            selectedValueList.map(item_=>{
                if(item.value==item_){
                    item.selected=true;
                    selectedList.push(item)
                }
            })
        })
        return selectedList
    }

    SelectFn(item) {
        switch (this.state.mode) {
            case 'single':
                this.setState({
                    selected: item,
                    selectedValue:item.value,
                    showOptions: false
                })
                this.props.onChange && this.props.onChange(item)
                break;
            case 'multiple':
                let result = this.state.selectedList;
                if (item.selected) {
                    result = result.filter((subItem) => {
                        if (subItem.value === item.value) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                    item.selected = false;
                } else {
                    item.selected = true;
                    result.push(item);
                }
                this.setState({
                    selectedList: result
                })
                this.props.onChange && this.props.onChange(result);
                setTimeout(() => {
                    this.setState({
                        multipleHeight: this.xSelect.current && this.xSelect.current.clientHeight
                    })
                }, 0);
                break;
            default:
        }
    }

    render() {
        let {showOptions, placeholder, mode, selected, selectedList, options, selectedValue } = this.state;
        let {disabled, onMultiShow, onChange} = this.props;
        return (
            <div className={classnames({
                'x-select': true,
                'x-select-clicked': showOptions,
                'x-select-single': mode === 'single',
                'x-select-multiple': mode === 'multiple',
                'x-select-disabled': disabled,
                'x-select-hasvalue': !!selected.label || selectedList.length > 0
            })} ref={this.xSelect} onClick={(e) => {
                if(disabled){
                    return
                }else{
                    this.setState({
                        showOptions: !showOptions
                    });
                    onMultiShow && onMultiShow(e, showOptions);
                }
            }}>
                <div disabled={true} value={selected.label} className={
                    classnames({
                        'x-select-title': true,
                        'x-select-disabled': disabled
                    })
                } >
                    <span className="arrow"></span>
                    {
                        !!selected.label ? 
                            <span className="value">{selected.label}</span> : 
                            <span className="placeholder">{placeholder}</span>
                    }
                    {
                        mode !== 'single' && selectedList.length ?
                        <ul className="x-select-ul-value">
                            {
                                selectedList.map((item, index) => {
                                    return (
                                        <li key={''+index + item.value} className={classnames('x-select-li')} onClick={(e) => {
                                            this.SelectFn(item)
                                            e.stopPropagation();
                                        }}>{item.label}<span className="cls-icon"></span></li>
                                    )
                                })
                            }
                        </ul> : null
                    }
                </div>
                {
                    options.length ?
                        <ul className="x-select-ul-list" style={{top: `${mode === 'multiple' ? this.state.multipleHeight : ''}px`}}>
                            {
                                options.map((item, index) => {
                                    return (
                                        <li key={''+index + item.value} className={classnames('x-select-li', {'x-select-li-true': item.value === selectedValue || item.selected})} onClick={(e) => {
                                            this.SelectFn(item)
                                            e.stopPropagation();
                                        }}>{item.label}</li>
                                    )
                                })
                            }
                        </ul> : null
                }
            </div>
        )
    }

}