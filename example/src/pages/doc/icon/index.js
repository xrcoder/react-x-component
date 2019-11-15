import React from 'react';
import { Row, Col, Box, Icon } from 'react-x-component';
import { Prism, ApiTable } from 'components';

import Example01 from './example01.x';
import { iconApi } from './api';

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>
                            Icon
                        </Box.Header>
                        <Box.Body>
                            丰富内容显示，展现Icon
                            目前Icon组件默认使用的是font-awesome图标库
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>
                            基本用法
                        </Box.Header>
                        <Box.Body>
                            <Row>
                                <Col lg={2} md={3} className="icon-item">
                                    <Icon name={'archive'} />
                                    <span className="icon-name">archive</span>
                                </Col>
                                <Col lg={2} md={3} className="icon-item">
                                    <Icon name={'adjust'} />
                                    <span className="icon-name">adjust</span>
                                </Col>
                                <Col lg={2} md={3} className="icon-item">
                                    <Icon name={'anchor'} />
                                    <span className="icon-name">anchor</span>
                                </Col>
                                <Col lg={2} md={3} className="icon-item">
                                    <Icon name={'area-chart'} />
                                    <span className="icon-name">area-chart</span>
                                </Col>
                            </Row>
                            <Prism>{Example01}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Icon Attribute</Box.Header>
                        <Box.Body>
                            <ApiTable
                                {...iconApi}
                            />
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        );
    }
}
