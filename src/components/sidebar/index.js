// import './index.scss'
import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menu-item';
import MenuTree from './menu-tree';

export default class extends React.Component {
    static propTypes = {
        menuList: PropTypes.array,
        onClick: PropTypes.func
    }

    static defaultProps = {
        menuList: [],
        onClick: ()=>{

        }
    }


    render() {
        const {menuList, defaultId} = this.props;
        return (
            <aside className="x-sidebar">
                <ul className="x-sidebar-menu">
                    {
                        menuList.map((item)=>{
                            return item.children && item.children.length === 0 ? <MenuItem defaultId={defaultId} data={item} key={item.id} onClick={(data)=>{
                                this.props.onClick(data);
                            }}/> :
                                <MenuTree data={item} key={item.id} onClick={(data)=>{
                                    this.props.onClick(data);
                                }}/>
                        })
                    }
                </ul>
            </aside>
        );
    }
}
