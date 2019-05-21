import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XTabs extends Component {

    static propTypes = {
        tabList:PropTypes.array
    };
    
    constructor(props){
        super(props)
        this.state={
            activeTabValue:props.activeTabValue||props.tabList[0].value,
            activeTab:{}
        }
    }

    render(){
        let len = this.props.tabList.length;
        return (
            <div className="x-tabs-content">
            <div className="x-tabs">
                {
                    this.props.tabList.map((item,index)=>{
                        return (
                            <div  key={item.label+index} className={`x-tab-li ${item.value==this.state.activeTabValue?'active-tab':null} ${item.disable==true?'tab-disable':null}`} onClick={(e)=>{
                                if(item.disable==true){
                                    return;
                                }
                                if(len>5){
                                    if(index>2&&index<len-2){
                                        e.target.parentNode.style.left=-1.2*(index-2)+'rem';
                                    }else if(index<=2){
                                        e.target.parentNode.style.left=0;
                                    }else if(index>=len-2){
                                        e.target.parentNode.style.right=0
                                    }
                                }
                                this.setState({
                                    activeTabValue:item.value
                                })
                                this.props.onChange(item)
                            }}>{item.label}</div>    
                        )
                    })
                }
            </div>
            </div>
        )
    }
}

export default XTabs;