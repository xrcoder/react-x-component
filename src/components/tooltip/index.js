import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import './index.scss';

const Tooltip = ({ children, className, position, content, style }) => {

    return (
        <span className={classnames('x-tooltip', className)} style={style}>
            <span className="top">{children}</span>
            <span className={classnames('box', `box-${position}`)}>{content}</span>
        </span>
    );
}

export default Tooltip;

Tooltip.propTypes = {
    position: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    className: PropTypes.string,
    style: PropTypes.object
};

Tooltip.defaultProps = {
    position: 'top',
    className: '',
    style: null
};