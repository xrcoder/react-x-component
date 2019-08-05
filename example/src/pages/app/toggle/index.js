import React, {useState} from 'react';
import {Toggle, Button, Box, TimePicker} from 'react-x-component';
import {Dropdown} from 'react-overlays';

class TimerDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date(2016, 9, 10, 18, 40)
        }
    }

    handleUpdate(value) {
        console.debug('time-picker update: ', value)
    }

    render() {
        return (
            <TimePicker
                onChange={this.handleUpdate.bind(this)}
                selectableRange="18:30:00 - 20:30:00"
                placeholder="选择时间"
                value={this.state.value}
            />
        )
    }
}

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
                <TimerDemo></TimerDemo>
            </Box.Body>
        </Box>
    );
}
