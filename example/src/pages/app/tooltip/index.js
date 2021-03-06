import './index.scss';
import * as React from 'react';
import {Box, Tooltip, Row, Col, Button, Input, Popper} from 'react-x-component';

export default () => {

    return (
        <Row className="x-tooltip-demo">
            <Col md={12}>
                <Box>
                    <Box.Header>基础使用</Box.Header>
                    <Box.Body>
                        <Row>
                            <Col md={3}>
                                <Tooltip useStyle={{display: 'inline-block'}} content={'框的内容这是提示框的内容这是提示框的内容'}>
                                    提示框在上方
                                </Tooltip>
                            </Col>
                            <Col md={3}>
                                <Tooltip useStyle={{display: 'inline-block'}} direction={'down'}
                                         content={'框的内容这是提示框的内容这是提示框的内容'}>
                                    提示框在下方
                                </Tooltip>
                            </Col>
                            <Col md={3}>
                                <Tooltip useStyle={{display: 'inline-block'}} direction={'right'}
                                         content={'框的内容这是提示框的内容这是提示框的内容'}>
                                    提示框在右方
                                </Tooltip>
                            </Col>
                            <Col md={3}>
                                <Tooltip useStyle={{display: 'inline-block'}} direction={'right'}
                                         content={'框的内容这是提示框的内容这是提示框的内容'}>
                                    提示框在左方
                                </Tooltip>
                            </Col>
                        </Row>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>符合使用</Box.Header>
                    <Box.Body>
                        <Row>
                            <Col md={3}>
                                <Tooltip useStyle={{display: 'inline-block'}} eventToggle="onClick"
                                         content={'框的内容这是提示框的内容这是提示框的内容'}>
                                    点击打开和关闭
                                </Tooltip>
                            </Col>
                            <Col md={3}>
                                <Tooltip useStyle={{display: 'inline-block'}} direction={'down'}
                                         content={'框的内容这是提示框的内容这是提示框的内容'}>
                                    <Button onClick={() => {
                                        alert('hello world')
                                    }}>我是按钮</Button>
                                </Tooltip>
                            </Col>
                            <Col md={3}>
                                <Tooltip useStyle={{display: 'inline-block'}}
                                         content={'框的内容这是提示框的内容这是提示框的内容'}>
                                    <Input/>
                                </Tooltip>
                            </Col>
                            <Col md={3}>
                                <Popper placement="left" trigger="click" content={
                                    <span>框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容框的内容这是提示框的内容这是提示框的内容</span>}>
                                    <Button onClick={() => {
                                        console.log('hello world')
                                    }}>我是按钮</Button>
                                </Popper>
                            </Col>
                        </Row>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>Popper使用</Box.Header>
                    <Box.Body>
                        <Row>
                            <Col md={2}>
                                <Popper placement="right" content={'right'}><span>right</span></Popper>
                            </Col>
                            <Col md={2}>
                                <Popper placement="left" content={'Left'}><span>Left</span></Popper>
                            </Col>
                        </Row>
                    </Box.Body>
                </Box>
            </Col>
        </Row>
    )
}
