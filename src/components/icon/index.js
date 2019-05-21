import React, {Component} from "react";
import classnames from 'classnames';

 const XIcon = (props) => {
    return (
        <i className={classnames('xicon', 'xicon-' + props.type, props.className)} onClick={(e) => {
            props.onClick && props.onClick(e)
        }}></i>
    );
};

export default XIcon;
