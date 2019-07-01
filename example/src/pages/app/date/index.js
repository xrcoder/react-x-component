import React from 'react';
import {Box, Row, Col, TimePicker, TimeSelect, DatePicker, DateRangePicker} from 'react-x-component';

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
                ref={e => this.datepicker2 = e}
                value={value2}
                align="right"
                placeholder="选择日期"
                onChange={date => {
                    console.debug('DatePicker2 changed: ', date)
                    this.setState({value2: date})

                }}
                shortcuts={[{
                    text: '今天',
                    onClick: (picker) => {
                        this.setState({value2: new Date()})
                        this.datepicker2.togglePickerVisible()
                    }
                }, {
                    text: '昨天',
                    onClick: (picker) => {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        this.setState({value2: date})
                        this.datepicker2.togglePickerVisible()
                    }
                }, {
                    text: '一周前',
                    onClick: (picker) => {
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

class DateDemoRange extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            value: null,
            isShowTime: false    //是否带时间
        }
    }

    render () {
        const {value, isShowTime} = this.state;
        return (
            <DateRangePicker
                value={value}
                isShowTime={isShowTime}
                format={isShowTime ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd'}
                onChange={date => {
                    this.setState({value: date});
                    this.props.onChange && this.props.onChange(date);
                }}
            />
        )
    }
}

class DateDemoRangeWithTime extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            value: null,
            isShowTime: true    //是否带时间
        }
    }

    render () {
        const {value, isShowTime} = this.state;
        return (
            <DateRangePicker
                value={value}
                isShowTime={isShowTime}
                format={isShowTime ? 'yyyy-MM-dd HH:mm' : 'yyyy-MM-dd'}
                onChange={date => {
                    this.setState({value: date});
                    this.props.onChange && this.props.onChange(date);
                }}
            />
        )
    }
}

class DateDemoWeek extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {value} = this.state

        return (
            <DatePicker
                value={value}
                placeholder="选择周"
                onChange={date => {
                    this.setState({value: date})
                }}
                format="yyyy 第 WW 周"
                selectionMode="week"
            />
        )
    }
}

class DateDemoMonth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {value} = this.state

        return (
            <DatePicker
                value={value}
                placeholder="选择月"
                onChange={date => {
                    this.setState({value: date})
                }}
                selectionMode="month"
            />
        )
    }
}

class DateDemoYear extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {value} = this.state

        return (
            <DatePicker
                value={value}
                placeholder="选择年"
                onChange={date => {
                    this.setState({value: date})
                }}
                selectionMode="year"
                align="right"
            />
        )
    }
}

export default function () {
    return (
        <Row>
            <Col md={6}>
                <Box>
                    <Box.Header>时间选择器</Box.Header>
                    <Box.Body>
                        <TimerDemo></TimerDemo>
                    </Box.Body>
                    <Box.Body>
                        <TimerDemoSelect></TimerDemoSelect>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>日期选择器</Box.Header>
                    <Box.Body>
                        <DateDemo/>
                    </Box.Body>
                    <Box.Body>
                        <DateDemoShort/>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>范围选择器</Box.Header>
                    <Box.Body>
                        <DateDemoRange/>
                    </Box.Body>
                    <Box.Body>
                        <DateDemoRangeWithTime/>
                    </Box.Body>
                </Box>
            </Col>
            <Col md={6}>
                <Box>
                    <Box.Header>区间选择器</Box.Header>
                    <Box.Body>
                        <TimerDemo></TimerDemo>
                    </Box.Body>
                    <Box.Body>
                        <TimerDemoSelect></TimerDemoSelect>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>日期单位选择</Box.Header>
                    <Box.Body>
                        <DateDemoWeek></DateDemoWeek>
                    </Box.Body>
                    <Box.Body>
                        <DateDemoMonth></DateDemoMonth>
                    </Box.Body>
                    <Box.Body>
                        <DateDemoYear></DateDemoYear>
                    </Box.Body>
                </Box>
            </Col>
        </Row>
    );
}
