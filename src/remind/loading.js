import React, {useState, useEffect} from "react";
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Loading({className, status}) {

    const [value, setValue] = useState(status);

    useEffect(() => {
        setValue(status);
    }, [status]);

    return (
        value ? <div className={classnames('remind-loading', className)}></div> : null
    );
}

Loading.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    status: PropTypes.bool
}

Loading.defaultProps = {
    className: '',
    status: true,
    style: {}
}

export default Loading;
