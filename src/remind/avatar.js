import React, {useState, useEffect} from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Avatar(props) {

    const {className, source, alt} = props;
    const [value, setValue] = useState(source);

    useEffect(() => {
        setValue(source);
    }, [source]);

    return (
        <div {...props} className={classnames('x-remind-avatar', {'x-remind-avatar-bg': !Boolean(value)}, className)}>
            {
                value && <img src={source} alt={alt}/>
            }
        </div>
    );
}

Avatar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    source: PropTypes.string
}

Avatar.defaultProps = {
    className: '',
    status: true,
    source: ''
}

export default Avatar;
