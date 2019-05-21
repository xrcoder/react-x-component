import React from 'react';
import XIcon from '../icon';

const iconMap = {
    'info': 'toast_info',
    'success': 'alarm',
    'error': 'close-b',
    'warning': 'alarm'
};

export default ({type, msg}) => {
    return (
        <div className="x-toast-notice">
            <div className={`x-toast-icon-box ${type}`}>
                <XIcon type={iconMap[`${type}`]}/>
            </div>
            <div className="x-toast-notice-content">
                {msg}
            </div>
        </div>
    );
}