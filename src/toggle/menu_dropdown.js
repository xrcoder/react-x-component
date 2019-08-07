import React from 'react';
import classnames from 'classnames';
import {Dropdown} from 'react-overlays';

import Container from './menu_container';
import Target from './menu_target';

const MenuBox = menu => ({show, close, props}) => {
    return (
        <Container parentProps={props} show={show}>
            {menu(show, close)}
        </Container>
    )
}

const MenuTarget = (children, menu, alignEnd, className) => ({props}) => {
    return (
        <Target {...props} className={className}>
            <Dropdown.Toggle>{children}</Dropdown.Toggle>
            <Dropdown.Menu flip alignEnd={alignEnd}>{MenuBox(menu)}</Dropdown.Menu>
        </Target>
    )
}

export default function (props) {
    const {children, menu, alignEnd, drop, onToggle, className} = props;
    return (
        <Dropdown drop={drop} onToggle={onToggle}>{MenuTarget(children, menu, alignEnd, className)}</Dropdown>
    );
}
