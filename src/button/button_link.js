import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function ButtonLink(props) {

    const {className, size, type, inverse, children} = props;
    const [btnInverse, setBtnInverse] = useState(inverse);
    const [btnType, setBtnType] = useState(type);

    useEffect(() => {
        setBtnInverse(inverse);
    }, [inverse]);

    useEffect(() => {
        setBtnType(type);
    }, [type]);

    let btnClass = classnames('x-btn', {
        'x-btn-primary': btnType === 'primary',
        'x-btn-danger': btnType === 'danger',
        'x-btn-text': btnType === 'text',
        'x-btn-lg': size === 'lg',
        'x-btn-sm': size === 'sm',
        'x-btn-inverse': btnInverse
    }, className);

    return (
        <Link {...props} className={btnClass} inverse={null} type={null} size={null}>{children}</Link>
    );
}

ButtonLink.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['primary', 'danger', 'text', null]),
    size: PropTypes.oneOf(['lg', 'sm', null]),
    inverse: PropTypes.bool
}

ButtonLink.defaultProps = {
    className: '',
    type: null,
    size: null,
    inverse: false
}

export default ButtonLink;
