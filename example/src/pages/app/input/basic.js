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
                        <Form.Group>
                            <Form.Name>基本：{this.state.phone}</Form.Name>
                            <Input
                                maxLength={11}
                                value={this.state.phone}
                                disabled={this.state.disabled}
                                onChange={(value) => {
                                    this.setState({
                                        phone: value
                                    });
                                }}/>
                        </Form.Group>
                        <Button.Box>
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
                        </Button.Box>
                        <Form.Group errorMsg={'信息有误'}>
                            <Form.Name>警告：</Form.Name>
                            <Input placeholder={'请输入姓名'} onChange={(value) => {
                                console.log(value);
                            }}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Name>禁用：</Form.Name>
                            <Input disabled={true}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Name>清空：</Form.Name>
                            <Input.Clear
                                disabled={this.state.disabled}
                                value={this.state.phone}
                                onClear={(e) => {
                                    console.log('clear');
                                }}
                                onChange={(res) => {
                                    this.setState({
                                        phone: res
                                    });
                                }}/>
                        </Form.Group>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>扩展输入框</Box.Header>
                    <Box.Body>
                        <Form.Group>
                            <Form.Name>搜索(组合)：</Form.Name>
                            <Input.Addon
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
                        </Form.Group>
                        <Form.Group>
                            <Input.Addon render={() => {
                                return <Button>确认</Button>
                            }}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Name>搜索(单例)：</Form.Name>
                            <Input.Search onEnter={(res) => {
                                console.log(res);
                            }} onChange={(res) => {
                                console.log(res);
                            }} onSearch={(e) => {
                                console.log(e);
                            }}><Icon name={'rss'}/></Input.Search>
                        </Form.Group>
                        <Form.Group>
                            <Input.Search onEnter={(res) => {
                                console.log(res);
                            }} onChange={(res) => {
                                console.log(res);
                            }} onSearch={(e) => {
                                console.log(e);
                            }}><Icon name={'search'}/></Input.Search>
                        </Form.Group>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>文本域</Box.Header>
                    <Box.Body>
                        <Form.Group>
                            <Input.Textarea onChange={(res) => {
                                console.log(res);
                            }}/>
                        </Form.Group>
                    </Box.Body>
                </Box>
            </>
        )
    }
}
