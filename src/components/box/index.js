import React from 'react';
// import './index.scss';

export default function ({title, className, children}) {
    let _class = className || ''

    return (
        <div className={`${localStorage.getItem('direction')=='right'?'x-box-i18n':'x-box'}  ${_class}`}>
            { title && <div className="x-box-header">
                <span className="x-box-title">{title}</span>
            </div>}
            {children}
        </div>
    );
}
