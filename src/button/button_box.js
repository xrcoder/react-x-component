import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function ButtonBox(props) {
    const {style, align, className, children} = props;
    const typeArr = ['Button', 'ButtonGroup', 'ButtonIcon', 'ButtonLink', 'ButtonUpload'];
    return (
        <div style={style} className={classnames('x-btn-box', `x-btn-box-${align}`, className)}>
            {children}
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
