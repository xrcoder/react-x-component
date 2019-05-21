import React from 'react';
import {withRouter} from 'react-router-dom';
import XIcon from '../icon';

@withRouter
export default class extends React.Component {

    render() {
        const {data, match} = this.props;

        let currentColor = location.pathname === match.url + data.codeName ? 'active' : null;
        return (
            <li key={data.id} className={`menu-item ${currentColor}`} onClick={()=>{
                this.props.onClick(data.codeName);
            }}>
            <a>
                { data.englishName && <span className="english-name">{data.englishName}</span> }
                { data.icon && <XIcon className="child-icon" type={data.icon}/> }
                <span className="name">{data.name}</span>
            </a>
            </li>
        )
    }

}
