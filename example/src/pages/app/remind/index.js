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
                <Box>
                    <Box.Header>图像</Box.Header>
                    <Box.Body>
                        <Remind.Avatar source={"http://img2.imgtn.bdimg.com/it/u=1988242408,885963340&fm=26&gp=0.jpg"}/>
                    </Box.Body>
                </Box>
            </Col>
        </Row>
    );
}

