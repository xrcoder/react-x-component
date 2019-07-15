import './index.scss';
import React from 'react';
import {Col, Box, Row, Toast, Button} from 'react-x-component';

export default class extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col md={6}>
                        <Box>
                            <Box.Header>通知</Box.Header>
                            <Box.Body>
                                <Button onClick={() => {
                                    Toast.push("智能盒子创建成功，请前往关联!")
                                }}>默认类型</Button>
                                <Button onClick={() => {
                                    Toast.push("智能盒子创建成功，请前往关联!", {
                                        type: 'success'
                                    })
                                }}>成功消息</Button>
                                <Button onClick={() => {
                                    Toast.push("智能盒子创建成功，请前往关联!", {
                                        type: 'error'
                                    })
                                }}>错误提示</Button>
                                <Button onClick={() => {
                                    Toast.push("智能盒子创建成功，请前往关联!", {
                                        type: 'warning'
                                    })
                                }}>警告提示</Button>
                            </Box.Body>
                            <Box.Footer>盒子Footer（尾部）</Box.Footer>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box>
                            <Box.Header>消息</Box.Header>
                            <Box.Body>
                                <Button onClick={() => {
                                    Toast.notify("智能盒子创建成功，请前往关联!")
                                }}>默认类型</Button>
                                <Button onClick={() => {
                                    Toast.notify("智能盒子创建成功，请前往关联!", 'error')
                                }}>默认类型</Button>
                            </Box.Body>
                            <Box.Footer>盒子Footer（尾部）</Box.Footer>
                        </Box>
                    </Col>
                </Row>
            </>
        )
    }
}