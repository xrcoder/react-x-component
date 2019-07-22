import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Close(props) {
    const {size, color, className} = props;
    return (
        <div {...props} className={classnames('x-close', className)} style={{width: size}}>
            <div className="x-close-a" style={{height: size, backgroundColor: color}}></div>
            <div className="x-close-b" style={{height: size, backgroundColor: color}}></div>
        </div>
    );
}

Close.propTypes = {
    className: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string
}

Close.defaultProps = {
    className: '',
    size: 20,
    color: '#979797'
}

export default Close;
