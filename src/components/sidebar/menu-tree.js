import React from 'react';
import {withRouter} from 'react-router-dom';
import MenuItem from './menu-item';
import XIcon from '../icon';

@withRouter
export default class extends React.Component {

    state={
        isToggle : true
    }

    render() {

        const {location, data, onClick, nowId, match} = this.props;
        const {isToggle} = this.state;
        let _h = data.children.length * 41;

        return (
            <li className={`treeview ${this.state.isToggle ? 'menu-open' : ''}`}>
                <div className={`tree-header`} onClick={()=>{
                    this.setState({isToggle: !isToggle})
                }}>
                    {
                        data.icon ? <XIcon className="child-icon" type={data.icon}/>  : null
                    }
                    <span> {data.name}</span>
                    <XIcon className="header-icon pull-right" type="angle-right"></XIcon>
                </div>
                <ul className="treeview-menu" style={{height: `${this.state.isToggle ? _h : 0}px`}}>{
                    data.children.map((item,index) => {
                        return (<MenuItem key={item.id} parent={data} data={item} icon={'circle-o'} onClick={(data)=>{
                            this.props.onClick(data);
                        }}/>);
                    })
                }</ul>
            </li>
        )
    }
}
