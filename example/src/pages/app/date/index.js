import React from 'react';
import {Box, TimePicker, TimeSelect} from 'react-x-component';

class TimerDemo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date(2016, 9, 10, 18, 40)
        }
    }

    handleUpdate(value) {
        console.log('time-picker update: ', value)
    }

    render() {
        return (
            <TimePicker
                onChange={(value) => {
                    this.handleUpdate(value);
                }}
                placeholder="选择时间"
                value={this.state.value}
            />
        )
    }
}

class TimerDemoSelect extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            value: new Date(2016, 9, 10, 8, 30),
        }
    }

    handleUpdate(value) {
        console.debug('time-select update: ', value)
    }

    render() {
        return (
            <TimeSelect
                start="08:30"
                step="00:15"
                end="18:30"
                maxTime="12:30"
                onChange={this.handleUpdate.bind(this)}
                value={this.state.value}
                placeholder="选择时间"
            />
        )
    }
}

export default function () {
    return (
        <Box>
            <Box.Header>时间选择器</Box.Header>
            <Box.Body>
                <TimerDemo></TimerDemo>
            </Box.Body>
            <Box.Body>
                <TimerDemoSelect></TimerDemoSelect>
            </Box.Body>
        </Box>
    );
}
