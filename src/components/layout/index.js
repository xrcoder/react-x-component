import React from 'react';
// import './index.scss';

const XLayout = (props) =>{
    return (
        <div className={`x-layout ${props.className}`}>{props.children}</div>
    )
}
export default XLayout;