import './index.scss';
import React from 'react';
import {Remind, Row, Col, Box, Button} from 'react-x-component';

export default () => {

    return (
        <Row>
            <Col md={12}>
                <Box>
                    <Box.Header>提醒牌</Box.Header>
                    <Box.Body>
                        <Remind.Loading status={true}/>
                    </Box.Body>
                </Box>
            </Col>
        </Row>
    );
}

