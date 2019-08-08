import './index.scss';
import React from 'react';
import {Row, Col, Box, Icon} from 'react-x-component';

export default class extends React.Component {
    render() {
        return (
            <>
                <Row>
                    <Col md={12}>
                        <Box>
                            <Box.Header>基础使用（标题）</Box.Header>
                            <Box.Body>
                                这是一个盒子
                            </Box.Body>
                            <Box.Footer>盒子Footer（尾部）</Box.Footer>
                        </Box>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Box>
                            <Box.Header>
                                <Icon name={'user-o'}/> 带图标Icon的标题
                            </Box.Header>
                            <Box.Body>
                                这是一个盒子
                            </Box.Body>
                            <Box.Footer>盒子Footer（尾部）</Box.Footer>
                        </Box>
                    </Col>
                    <Col md={6}>
                        <Box>
                            <Box.Header>基础使用（标题）</Box.Header>
                            <Box.Body>
                                这是一个盒子
                            </Box.Body>
                            <Box.Footer>盒子Footer（尾部）</Box.Footer>
                        </Box>
                    </Col>
                </Row>
            </>
        )
    }
}
