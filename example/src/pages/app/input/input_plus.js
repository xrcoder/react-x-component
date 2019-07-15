/**
 * Created by Rayr Lee on 2019/7/4.
 */

import React from 'react';
import {Box, Row, Col, Input, Form} from 'react-x-component';

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            passwd: '',
            phone: ''
        }
    }

    render() {
        return (
            <Box>
                <Box.Header>高级输入框</Box.Header>
                <Box.Body>
                    <Row>
                        <Col md={12}>
                            <Form.Name>密码类型输入框带报警提示：</Form.Name>
                            <Input.Passwd
                                className="input-1"
                                placeholder="请输入1-20位的数字"
                                value={this.state.passwd} reg={/^[0-9]{0,20}$/}
                                maxLength={20}
                                onChange={(res) => {
                                    this.setState({
                                        passwd: res
                                    });
                                }}/>
                        </Col>
                        <Col md={12}>
                            <Form.Name>手机号输入框：</Form.Name>
                            <Input.Phone
                                className="input-1"
                                placeholder="请输入手机号"
                                value={this.state.phone}
                                maxLength={11}
                                onChange={(res) => {
                                    console.log(res)
                                    this.setState({
                                        phone: res
                                    });
                                }}/>
                        </Col>
                    </Row>
                </Box.Body>
            </Box>
        )
    }
}