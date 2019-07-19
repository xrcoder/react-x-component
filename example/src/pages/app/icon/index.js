import './index.scss';
import React from 'react';
import {Icon, Row, Col, Box, Dropdown} from 'react-x-component';

import List from './list';

export default () => {

    return (
        <Row className="x-icon-demo">
            <Col md={12}><List></List></Col>
            <Col md={12}>
                <Box>
                    <Box.Header>点击图标</Box.Header>
                    <Box.Body>
                        <Icon name={'archive'} onClick={() => {
                            alert('archive');
                        }}/>
                        <span className="icon-name">archive</span>
                    </Box.Body>
                </Box>
                <Box>
                    <Box.Header>点击图标</Box.Header>
                    <Box.Body>
                        <Dropdown></Dropdown>
                    </Box.Body>
                </Box>
            </Col>
        </Row>
    );
}

