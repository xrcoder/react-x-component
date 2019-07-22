/**
 * Created by Rayr Lee on 2019/7/4.
 */
import React from 'react';
import {Box, Row, Col, Input, Form, Checkbox, Button} from 'react-x-component';

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            isMark: false,
            errMsg: '',
            name: ''
        }
    }

    render() {
        return (
            <>
                <Box>
                    <Box.Header>垂直表单</Box.Header>
                    <Box.Body>
                        <Row>
                            <Col md={12}>
                                <Form.Group errorMsg={'密码格式有误'}>
                                    <Form.Name>邮件</Form.Name>
                                    <Input/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Name>账号</Form.Name>
                                    <Input/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Name>密码</Form.Name>
                                    <Input.Clear type={'password'} onChange={(res) => {
                                        console.log(res);
                                    }} onEnter={(res) => {
                                        console.log(res)
                                    }}/>
                                </Form.Group>
                                <Form.Group>
                                    <Checkbox.Item
                                        label={'记住密码'}
                                        value={this.state.isMark}
                                        onChange={(e, res) => {
                                            this.setState({
                                                isMark: res
                                            })
                                        }}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>水平表单</Box.Header>
                    <Box.Body>
                        <Row>
                            <Col md={12}>
                                <Form.Group horizontal required errorMsg={this.state.errMsg}>
                                    <Form.Name required>访客姓名</Form.Name>
                                    <Input value={this.state.name} onChange={(res) => {
                                        this.setState({
                                            name: res
                                        });
                                    }} onFocus={() => {
                                        this.setState({
                                            errMsg: ''
                                        });
                                    }}/>
                                </Form.Group>
                                <Form.Group horizontal>
                                    <Form.Name>证件号码</Form.Name>
                                    <Input/>
                                </Form.Group>
                                <Form.Group horizontal>
                                    <Form.Name>身份证号码</Form.Name>
                                    <Input.Clear type={'password'} onChange={(res) => {
                                        console.log(res);
                                    }} onEnter={(res) => {
                                        console.log(res)
                                    }}/>
                                </Form.Group>
                                <Form.Group horizontal>
                                    <Form.Name></Form.Name>
                                    <Checkbox.Item
                                        label={'记住密码'}
                                        value={this.state.isMark}
                                        onChange={(e, res) => {
                                            this.setState({
                                                isMark: res
                                            })
                                        }}/>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Box.Body>
                    <Box.Footer align="right">
                        <Button type={'primary'} onClick={() => {
                            console.log(this.state);
                            this.setState({
                                errMsg: '请输入姓名'
                            })
                        }}>确认</Button>
                        <Button onClick={() => {
                            this.setState({
                                errMsg: '',
                                name: ''
                            })
                        }}>重置</Button>
                    </Box.Footer>
                </Box>
            </>
        )
    }
}
