import React, {useState} from 'react';
import {Toggle, Button, Input, Box} from 'react-x-component';
import {Dropdown} from 'react-overlays';

let status = false;

function MenuContainer({show, close, props}) {
    return (
        <Toggle.MenuContainer parentProps={props} show={show}>
            <Button onClick={close}>关闭</Button>
        </Toggle.MenuContainer>
    )
}

function MenuTab({toggle, show, props}) {

    return (
        <Button onClick={toggle}>测试</Button>
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
            <Box.Body style={{marginTop: '1000px', height: '1000px'}}>
                <Dropdown alignEnd>{MenuTarget}</Dropdown>
                <Dropdown drop="up">{MenuTarget}</Dropdown>
            </Box.Body>
        </Box>
    );
}
