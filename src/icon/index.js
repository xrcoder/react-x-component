import React from "react";
import classnames from 'classnames';

export default ({name, onClick = null, className}) => {

    let _name = name ? `fa-${name}` : null;

    return (
        <i className={classnames('fa', _name, className)} onClick={(e) => {
            onClick && onClick(e);
        }}></i>
    );
};
