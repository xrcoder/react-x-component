import React from 'react';
import {Box, Select, Input, Form} from 'react-x-component';

const stateOptions = [
    {value: '1', label: '身份证'},
    {value: '2', label: '护照'},
    {value: '3', label: '军官证'},
    {value: '4', label: '户口本'}
]

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            passwd: '',
            value: '',
            singleValue: {value: '1', label: '身份证'}
        }
    }

    render() {
        return (
            <>
                <Box>
                    <Box.Header>选择输入框</Box.Header>
                    <Box.Body>
                        <Form.Group>
                            <Form.Name>证件号码</Form.Name>
                            <Input.Group>
                                <Select.Single
                                    value={this.state.singleValue}
                                    options={stateOptions}
                                    onChange={(value) => {
                                        this.setState({
                                            singleValue: value
                                        });
                                    }}/>
                                <Input
                                    value={this.state.passwd}
                                    onChange={(res) => {
                                        this.setState({
                                            passwd: res
                                        });
                                    }}/>
                            </Input.Group>
                        </Form.Group>
                    </Box.Body>
                    <Box.Body>
                        <Input.Group>
                            <Select.Single
                                value={this.state.singleValue}
                                options={stateOptions}
                                onChange={(value) => {
                                    this.setState({
                                        singleValue: value
                                    });
                                }}/>
                            <Input
                                value={this.state.passwd}
                                onChange={(res) => {
                                    this.setState({
                                        passwd: res
                                    });
                                }}/>
                        </Input.Group>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>输入框</Box.Header>
                    <Box.Body>
                        <Input
                            value={this.state.value}
                            onChange={(res) => {
                                this.setState({
                                    value: res
                                });
                            }}/>
                    </Box.Body>
                </Box>
            </>
        )
    }
}
