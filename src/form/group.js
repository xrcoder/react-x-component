/**
 * Created by Rayr Lee on 2019/7/5.
 */

import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function useErrorMsg(initialValue) {
    const [msg, setMsg] = useState(initialValue);

    const updateMsg = function (value) {
        setMsg(value);
    }

    return {msg, updateMsg};
}

function Group(props) {
    const {horizontal, className, errorMsg, children, required} = props;
    const [Name, Input] = React.Children.map(children, (child) => child);
    const oMsg = useErrorMsg(errorMsg);

    useEffect(() => {
        oMsg.updateMsg(errorMsg);
    }, [errorMsg]);

    return (
        <div className={classnames('x-form-group', {'x-form-group-horizontal': horizontal}, className)}>
            {Name && <Name.type {...Name.props} required={required}/>}
            {Input && <Input.type {...Input.props} error={Boolean(oMsg.msg)}/>}
            {oMsg.msg && <span className="x-form-group-tips">{oMsg.msg}</span>}
        </div>
    );
}

Group.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    errorMsg: PropTypes.string
}

Group.defaultProps = {
    className: '',
    style: null,
    errorMsg: ''
}

export default Group;
