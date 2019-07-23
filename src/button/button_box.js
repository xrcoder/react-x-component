import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function ButtonBox(props) {
    return (
        <div style={props.style} className={classnames('x-btn-box', `x-btn-box-${props.align}`, props.className)}>
            {props.children}
        </div>
    )
}

ButtonBox.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.oneOf(['left', 'center', 'right'])
};

ButtonBox.defaultProps = {
    className: '',
    style: null,
    align: 'right'
};

export default ButtonBox;
