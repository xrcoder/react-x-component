import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Button(props) {

    const {className, style, disabled, size, type, inverse, children, onClick} = props;
    const [btnInverse, setBtnInverse] = useState(inverse);

    useEffect(() => {
        setBtnInverse(inverse);
    }, [inverse]);

    let btnClass = classnames('x-btn', {
        'x-btn-primary': type === 'primary',
        'x-btn-danger': type === 'danger',
        'x-btn-text': type === 'text',
        'x-btn-lg': size === 'lg',
        'x-btn-sm': size === 'sm',
        'x-btn-inverse': btnInverse
    }, className);

    return (
        <button style={style} className={btnClass} disabled={disabled} onClick={(e) => {
            onClick && onClick(e);
        }}>{children}</button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(['primary', 'danger', 'text', null]),
    size: PropTypes.oneOf(['lg', 'sm', null]),
    inverse: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

Button.defaultProps = {
    className: '',
    style: null,
    type: null,
    size: null,
    inverse: false,
    disabled: false,
    onClick: function () {
    }
}

export default Button;
