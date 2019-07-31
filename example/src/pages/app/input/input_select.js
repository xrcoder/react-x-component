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
            phone: '',
            singleValue: {value: '1', label: '身份证'}
        }
    }

    render() {
        return (
            <Box>
                <Box.Header>选择输入框</Box.Header>
                <Box.Body>
                    <Form.Group horizontal>
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
            </Box>
        )
    }
}
