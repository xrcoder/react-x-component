import React from 'react';
import {Box, Row, Col, Button} from 'react-x-component';
import {Prism, Markdown} from 'components';

import examples01 from './examples01.x';
import examples02 from './examples02.x';
import examples03 from './examples03.x';
import BtnMd from './code.md';

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Button</Box.Header>
                        <Box.Body><Markdown content={BtnMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Simple buttons</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button>默认</Button>
                                <Button type="primary">主要</Button>
                                <Button type="danger">危险</Button>
                            </Button.Box>
                            <Prism>{examples01}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Outline buttons</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button inverse>默认</Button>
                                <Button inverse type="primary">主要</Button>
                                <Button inverse type="danger">危险</Button>
                            </Button.Box>
                            <Prism>{examples02}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Sizes buttons</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button size={'sm'}>小按钮</Button>
                                <Button>正常按钮</Button>
                            </Button.Box>
                            <Prism>{examples03}</Prism>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
