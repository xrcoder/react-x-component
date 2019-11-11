import React from 'react';
import { Row, Col, Box } from 'react-x-component';

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
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        );
    }
}
