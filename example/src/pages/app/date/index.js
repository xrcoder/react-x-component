import React from 'react';
import {Box, TimePicker, TimeSelect, DatePicker} from 'react-x-component';

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

class DateDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value1: null}
    }

    render() {
        const {value1} = this.state

        return (
            <DatePicker
                value={value1}
                placeholder="选择日期"
                onChange={date => {
                    console.debug('DatePicker1 changed: ', date)
                    this.setState({value1: date})
                }}
                disabledDate={time => time.getTime() < Date.now() - 8.64e7}
            />
        )
    }
}

class DateDemoShort extends React.Component {

    constructor(props) {
        super(props)
        this.state = {value2: null}
    }

    render() {
        const {value2} = this.state

        return (
            <DatePicker
                ref={e=>this.datepicker2 = e}
                value={value2}
                align="right"
                placeholder="选择日期"
                onChange={date=>{
                    console.debug('DatePicker2 changed: ', date)
                    this.setState({value2: date})

                }}
                shortcuts={[{
                    text: '今天',
                    onClick: (picker)=> {
                        this.setState({value2: new Date()})
                        this.datepicker2.togglePickerVisible()
                    }
                }, {
                    text: '昨天',
                    onClick: (picker)=> {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        this.setState({value2: date})
                        this.datepicker2.togglePickerVisible()
                    }
                }, {
                    text: '一周前',
                    onClick: (picker)=> {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        this.setState({value2: date})
                        this.datepicker2.togglePickerVisible()
                    }
                }]}
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
            <Box.Body>
                <DateDemo/>
            </Box.Body>
            <Box.Body>
                <DateDemoShort/>
            </Box.Body>
        </Box>
    );
}
