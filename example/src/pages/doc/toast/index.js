import React from 'react';
import { Box, Row, Col, Toast, Button } from 'react-x-component';
import { Prism, Markdown, ApiTable } from 'components';
import ToastMd from './toast.md';

import Example01 from './example01.x';
import Example02 from './example02.x';
import Example03 from './example03.x';
import Example04 from './example04.x';

import { pushApi, notifyApi } from './api';

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Toast</Box.Header>
                        <Box.Body>
                            <Markdown content={ToastMd}></Markdown>
                            <div>1.在页面入口调用react-toastify的configure方法，进行全局的配置；</div>
                            <Prism>{Example03}</Prism>
                            <div>2.定义一个Toast.Container组件在页面中</div>
                            <Prism>{Example04}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>通知</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button onClick={() => {
                                    Toast.push("默认类型的通知")
                                }}>默认类型</Button>
                                <Button type="primary" onClick={() => {
                                    Toast.push("成功类型的通知", {
                                        type: 'success'
                                    })
                                }}>成功消息</Button>
                                <Button type="danger" onClick={() => {
                                    Toast.push("错误类型的通知", {
                                        type: 'error'
                                    })
                                }}>错误提示</Button>
                                <Button type="danger" onClick={() => {
                                    Toast.push("警告类型的通知", {
                                        type: 'warning'
                                    })
                                }}>警告提示</Button>
                            </Button.Box>
                            <Prism>{Example01}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>消息</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button onClick={() => {
                                    Toast.notify("默认类型的消息")
                                }}>默认类型</Button>
                                <Button type="danger" onClick={() => {
                                    Toast.notify("错误类型的消息", 'error')
                                }}>错误类型</Button>
                            </Button.Box>
                            <Prism>{Example02}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Toast.push方法</Box.Header>
                        <Box.Body>
                            <Prism>{`Toast.push(message, settings)`}</Prism>
                            <ApiTable
                                {...pushApi}
                            />
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Toast.notify方法</Box.Header>
                        <Box.Body>
                            <Prism>{`Toast.notify(message, type)`}</Prism>
                            <ApiTable
                                {...notifyApi}
                            />
                        </Box.Body>
                    </Box>
                </Col>
            </Row>

        )
    }
}
