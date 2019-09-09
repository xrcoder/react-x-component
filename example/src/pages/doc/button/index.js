import React from 'react';
import {Box, Row, Col} from 'react-x-component';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {ghcolors} from 'react-syntax-highlighter/dist/esm/styles/prism';
import BtnCode from './demo.code';
import BtnMd from './code.md';

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Button</Box.Header>
                        <Box.Body><ReactMarkdown source={BtnMd}/></Box.Body>
                    </Box>
                </Col>
                <Col md={12}>
                    <Box>
                        <Box.Header>代码演示</Box.Header>
                        <Box.Body>
                            <SyntaxHighlighter language="javascript" style={ghcolors}>
                                {BtnCode}
                            </SyntaxHighlighter>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
