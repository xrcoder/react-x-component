/**
 * Created by Rayr Lee on 2019/6/28.
 */

import React from 'react';
import {Icon, Row, Col, Box} from 'react-x-component';

export default function () {
    return (
        <Box>
            <Box.Header>图标列表</Box.Header>
            <Box.Body>
                <Row>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'archive'}/>
                        <span className="icon-name">archive</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'adjust'}/>
                        <span className="icon-name">adjust</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'anchor'}/>
                        <span className="icon-name">anchor</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'area-chart'}/>
                        <span className="icon-name">area-chart</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'asterisk'}/>
                        <span className="icon-name">asterisk</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'arrows-h'}/>
                        <span className="icon-name">arrows-h</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'bank'}/>
                        <span className="icon-name">bank</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'bar-chart'}/>
                        <span className="icon-name">bar-chart</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'bar-chart-o'}/>
                        <span className="icon-name">bar-chart-o</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'barcode'}/>
                        <span className="icon-name">barcode</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'bars'}/>
                        <span className="icon-name">bars</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'battery-0'}/>
                        <span className="icon-name">battery-0</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'battery-1'}/>
                        <span className="icon-name">battery-1</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'circle-o'}/>
                        <span className="icon-name">circle-o</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'bar-chart-o'}/>
                        <span className="icon-name">bar-chart-o</span>
                    </Col>
                    <Col lg={2} md={3} className="icon-item">
                        <Icon name={'automobile'}/>
                        <span className="icon-name">automobile</span>
                    </Col>
                </Row>
            </Box.Body>
        </Box>
    )
}