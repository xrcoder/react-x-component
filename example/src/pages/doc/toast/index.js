import React from 'react';
import { Box, Row, Col } from 'react-x-component';
import { Prism, Markdown, ApiTable } from 'components';
import ToastMd from './toast.md';

export default class extends React.Component {
    render() {
        return (
            <Box>
                <Box.Header>Toast</Box.Header>
                <Box.Body>
                    <Markdown content={ToastMd}></Markdown>
                </Box.Body>
            </Box>
        )
    }
}
