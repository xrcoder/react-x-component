/**
 * Created by Rayr Lee on 2019/7/4.
 */
import React from 'react';
import {Box, Row, Col, Input, Icon, Button, Form} from 'react-x-component';

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            phone: '',
            disabled: false,
            passwd: ''
        }
    }

    render() {
        return (
            <>
                <Box>
                    <Box.Header>输入框</Box.Header>
                    <Box.Body>
                        <Row>
                            <Col md={12}>
                                <Form.Name>基本：{this.state.phone}</Form.Name>
                                <Input className="input-1"
                                       maxLength={11}
                                       value={this.state.phone}
                                       disabled={this.state.disabled}
                                       onChange={(value) => {
                                           this.setState({
                                               phone: value
                                           });
                                       }}/>
                            </Col>
                            <Col md={12}>
                                <Button onClick={() => {
                                    this.setState({
                                        phone: ''
                                    });
                                }}>清空</Button>
                                <Button onClick={() => {
                                    this.setState({
                                        disabled: !this.state.disabled
                                    });
                                }}>禁用</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Name>基本：</Form.Name>
                                <Input placeholder={'请输入姓名'} className="input-1" onChange={(value) => {
                                    console.log(value);
                                }}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Name>禁用：</Form.Name>
                                <Input className="input-1" disabled={true} value={'密码'}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Name>清空：</Form.Name>
                                <Input.Clear disabled={this.state.disabled} className="input-1"
                                             value={this.state.phone} onClear={(e) => {
                                    console.log('clear');
                                }} onChange={(res) => {
                                    this.setState({
                                        phone: res
                                    });
                                }}/>
                            </Col>
                        </Row>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>扩展输入框</Box.Header>
                    <Box.Body>
                        <Row>
                            <Col md={12}>
                                <Form.Name>搜索(组合)：</Form.Name>
                                <Input.Addon
                                    className="input-1"
                                    value='测试'
                                    maxLength={11}
                                    onEnter={(res) => {
                                        console.log(res);
                                    }}
                                    onChange={(res, e) => {
                                        console.log(res);
                                    }}
                                    render={() => {
                                        return (
                                            <Button onClick={() => {

                                            }}>搜索</Button>
                                        )
                                    }}/>
                            </Col>
                            <Col md={12}>
                                <Input.Addon className="input-1" render={() => {
                                    return <Button><Icon name={'search'}/></Button>
                                }}/>
                            </Col>
                            <Col md={12}>
                                <Form.Name>搜索(单例)：</Form.Name>
                                <Input.Search className="input-1" onEnter={(res) => {
                                    console.log(res);
                                }} onChange={(res) => {
                                    console.log(res);
                                }} onSearch={(e) => {
                                    console.log(e);
                                }}>搜索</Input.Search>
                            </Col>
                            <Col md={12}>
                                <Input.Search className="input-1" onEnter={(res) => {
                                    console.log(res);
                                }} onChange={(res) => {
                                    console.log(res);
                                }} onSearch={(e) => {
                                    console.log(e);
                                }}><Icon name={'search'}/></Input.Search>
                            </Col>
                        </Row>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>文本域</Box.Header>
                    <Box.Body>
                        <Input.Textarea className="input-1" onChange={(res) => {
                            console.log(res);
                        }}/>
                    </Box.Body>
                </Box>
            </>
        )
    }
}