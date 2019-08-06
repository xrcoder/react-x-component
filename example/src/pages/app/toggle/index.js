import React, {useState} from 'react';
import {Toggle, Box} from 'react-x-component';
import {Dropdown} from 'react-overlays';

function MenuContainer({show, close, props}) {
    return (
        <Toggle.MenuContainer parentProps={props} show={show}>
            测试
        </Toggle.MenuContainer>
    )
}

function MenuTab({toggle, show, props}) {
    return (
        <button {...props} onClick={toggle}>测试</button>
    )
}

function MenuTarget({props}) {
    return (
        <Toggle.MenuTarget {...props}>
            <Dropdown.Toggle>{MenuTab}</Dropdown.Toggle>
            <Dropdown.Menu flip>{MenuContainer}</Dropdown.Menu>
        </Toggle.MenuTarget>
    )
}

export default function () {
    return (
        <Box>
            <Box.Header>简单Toggle</Box.Header>
            <Box.Body>
                <Dropdown>{MenuTarget}</Dropdown>
            </Box.Body>
        </Box>
    );
}
