// import './index.scss';
import React, {useState, useEffect} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Switch(props) {
    const {style, className, status, onChange, disabled} = props;
    const [isOn, setIsOn] = useState(status);
    const [isDisabled, setIsDisabled] = useState(disabled);

    useEffect(() => {
        setIsOn(status);
    }, [status]);

    useEffect(() => {
        console.log(1);
        setIsDisabled(disabled);
    }, [disabled]);

    const cls = classnames('x-switch', {'x-switch-off': !isOn}, {'x-switch-disabled': isDisabled}, className);

    return (
        <div style={style} className={cls} onClick={(e) => {
            if (isDisabled) {
                return;
            }
            setIsOn(!isOn);
            onChange(e, !isOn);
        }}><span className="switch-btn"></span>
        </div>
    );
}

Switch.propTypes = {
    classnames: PropTypes.string,
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    onChange: PropTypes.func
}

Switch.defaultProps = {
    classnames: '',
    value: false,
    style: null,
    disabled: false,
    onChange: function () {
    }
}


export default Switch;