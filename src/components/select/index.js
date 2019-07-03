import React, { Component } from 'react';
// import './index.scss';
import PropTypes from 'prop-types';
import XIcon from '../icon';
import intl from 'react-intl-universal';
import loadLocales from '../locales/loadlocales';

class XSelect extends Component {

    static propTypes = {
        options: PropTypes.array,
        selectedValueList:PropTypes.array,
        selectedList:PropTypes.array,
        size: PropTypes.oneOf(['lg', 'md']),
        locale: PropTypes.string
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
            selected:{},
            options: props.options || [],
            mode: props.mode || 'single',
            selectedValueList:props.selectedValueList||[],
            selectedList:[]
        }
        this.xSelect = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocClick);
        let arr = this.props.options;
        let value = this.state.selectedValue;
        if (value!=-1&&value!==undefined) {
            this.setState({
                options: this.filterData(arr),
                selected: this.getSelected(value)
            })
        } else {
            this.setState({
                options: this.filterData(arr),
                selectedList: this.getSelectedList(this.props.selectedValueList)
            })
        }
        if(window.localStorage.getItem('isStoragelocale')){
            this.setState({initDone: window.localStorage.getItem('initDone')});
        }else{
            loadLocales(this.props.locale).then(()=>{
                this.setState({initDone: true});
            });
        }
    }

    // static getDerivedStateFromProps(props,state){
    //     console.log(this,7777);
    //     console.log(props,state,8888333)
    //     return{
    //         options:props.options,
    //         selectedValue:props.selectedValue,
    //         selectedValueList:props.selectedList,
           
    //     }  
    // }

    componentWillReceiveProps(props){
        this.setState({
            options:props.options,
            selectedValue:props.selectedValue,
            selectedValueList:props.selectedValueList,
            selected:this.getSelected(props.selectedValue),
            selectedList:this.getSelectedList(props.selectedValueList||[])
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

    render() {
        return (
            this.state.initDone !== false && 
            this.state.mode=='multiple'?
            <div className={`${localStorage.getItem('direction')=='right'?'x-select-i18n':'x-select'} ${this.state.showOptions ? 'x-select-clicked' : null}  x-select-clicked-multiple`} ref={this.xSelect} onClick={(e) => {
                if(this.props.disabled){
                    return
                }else{
                    let showOptions = this.state.showOptions
                    this.setState({
                        showOptions: !showOptions
                    })
                }
            }}>
                <div placeholder={intl.get('KOF_REACT_X_COMPONENT_GLOBAL_SELECTPLACEHOLDER').d(`请选择`)} disabled={true} value={this.state.selected.label} className={`x-select-title x-select-title-multiple ${this.props.disabled?'x-select-disabled':null}`} >
                    {
                        this.state.selectedList.map((item,index)=>{
                            return (<span className="x-select-item-multiple" key={''+item.label+index}>{item.label}<XIcon type={`${item.disable?null:'close-a'}`} onClick={(e)=>{
                                let arr = JSON.parse(JSON.stringify(this.state.selectedList));
                                let arr_options = JSON.parse(JSON.stringify(this.state.options));
                                let selected_index;
                                arr_options.map((item_,index_)=>{
                                    if(item.label==item_.label){
                                        selected_index=index_
                                        arr.splice(index,1)
                                        arr_options[selected_index].selected=false;
                                    }
                                })
                                
                                this.setState({
                                    selectedList:arr,
                                    options:arr_options
                                })
                                this.props.onChange(arr)
                                e.nativeEvent.stopImmediatePropagation();
                            }}></XIcon></span>)
                        })
                    }
                </div>
                <div>
                {
                    this.state.options.length ?
                        <ul className={`x-select-ul ${this.state.showOptions?'x-select-ul-show':null}`}>
                            {
                                this.state.options.map((item, index) => {
                                    return (
                                        <li key={''+index + item.value} className={`x-select-li ${item.selected==true?'x-select-li-true':null} ${item.disable?'x-select-li-disable':null}`} onClick={(e) => {
                                            
                                            let arr = JSON.parse(JSON.stringify(this.state.selectedList))
                                            let selected = false;
                                            let selected_index;
                                            arr.map((item_,index)=>{
                                                if(item.label==item_.label){
                                                    selected = true;
                                                    selected_index=index
                                                }
                                            })
                                            
                                            if(!selected){
                                                item.selected=true;
                                                arr.push(item);
                                                this.setState({
                                                    selectedList: arr,
                                                    showOptions: false
                                                })
                                            }else{
                                                item.selected=false;
                                                arr.splice(selected_index,1)
                                                
                                                this.setState({
                                                    selectedList:arr
                                                })
                                            }
                                            this.props.onChange(arr)
                                            // e.nativeEvent.stopImmediatePropagation();
                                        }}>{item.label}</li>
                                    )
                                })
                            }
                        </ul> : null
                }
                </div>

            </div>:
             <div className={`${localStorage.getItem('direction')=='right'?'x-select-i18n':'x-select'} x-select-content-height ${this.state.showOptions ? 'x-select-clicked' : null} x-select-${this.props.size}`} ref={this.xSelect} onClick={(e) => {
                if(this.props.disabled){
                    return
                }else{
                    let showOptions = this.state.showOptions
                    this.setState({
                        showOptions: !showOptions
                    })
                }
                // e.nativeEvent.stopImmediatePropagation();
            }}>
                {
                   
                   (this.state.selected.value!==undefined&&this.state.selected.value!=-1)?<div placeholder={intl.get('KOF_REACT_X_COMPONENT_GLOBAL_SELECTPLACEHOLDER').d(`请选择`)} readOnly disabled={true} value={this.state.selected.label} className={`x-select-title ${this.props.disabled?'x-select-disabled':null}`} >{this.state.selected.label}</div>:<div readOnly disabled={true} value={this.state.selected.label} className={`x-select-title ${this.props.disabled?'x-select-disabled':null}`} >{intl.get('KOF_REACT_X_COMPONENT_GLOBAL_SELECTPLACEHOLDER').d(`请选择`)}</div>
                }
                <XIcon type='angle-left'></XIcon>
                {/* {
                    this.state.showOptions ? <XIcon type='angle-left'></XIcon> : <XIcon type='angle-right'></XIcon>
                } */}
                {
                    this.state.options.length ?
                        <ul className={`x-select-ul ${this.state.showOptions?'x-select-ul-show':null} x-select-ul-${this.props.size}`}>
                            {
                                this.state.options.map((item, index) => {
                                    return (
                                        <li key={''+index + item.value} className={`x-select-li ${item.value==this.state.selectedValue?'x-select-li-true':null}`} onClick={(e) => {
                                            this.setState({
                                                selected: item,
                                                selectedValue:item.value,
                                                showOptions: false
                                            })
                                            this.props.onChange(item)
                                            e.nativeEvent.stopImmediatePropagation();
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

export default XSelect;
