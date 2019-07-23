import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import Icon from '../icon';

function ButtonIcon(props) {

    const {icon, children} = props;
    const [name, setName] = useState(icon);

    useEffect(() => {
        setName(icon);
    }, [icon]);

    return (
        <Button {...props}>
            <Icon className={'x-btn-icon'} name={name}/>
            {children}
        </Button>
    );
}

ButtonIcon.propTypes = {
    icon: PropTypes.string,
}

ButtonIcon.defaultProps = {
    icon: '',
}

export default ButtonIcon;
