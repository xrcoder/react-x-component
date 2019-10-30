import React from 'react';
import {Box, Row, Col, Table} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import examples01 from './examples01.x';
import GridMd from './grid.md';

function Show(props) {
    return <div className="color1" style={{backgroundColor: '#98B2FC', color: '#FFF'}}>{props.children}</div>
}

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Grid</Box.Header>
                        <Box.Body><Markdown content={GridMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Grid Example</Box.Header>
                        <Box.Body>
                            <Row className="x-grid-demo" space={10}>
                                <Col lg={3} md={6} sm={12}>
                                    <Show>lg=3, md=6, sm=12</Show>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <Show>lg=3, md=6, sm=12</Show>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <Show>lg=3, md=6, sm=12</Show>
                                </Col>
                                <Col lg={3} md={6} sm={12}>
                                    <Show>lg=3, md=6, sm=12</Show>
                                </Col>
                            </Row>
                            <Prism>{examples01}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Row Props Api</Box.Header>
                        <Box.Body>
                            <Prism>{`import {Row, Col} from 'react-x-component';`}</Prism>
                            <Table>
                                <Table.Head>
                                    <Th>Name</Th>
                                    <Th>Type</Th>
                                    <Th>Default</Th>
                                    <Th>Description</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>space</Td>
                                        <Td>number</Td>
                                        <Td>15</Td>
                                        <Td>栅格的间距，单位px</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>style</Td>
                                        <Td>object</Td>
                                        <Td>null</Td>
                                        <Td>自定义样式</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>''</Td>
                                        <Td>自定义class名称</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Col Props Api</Box.Header>
                        <Box.Body>
                            <Prism>{`import {Row, Col} from 'react-x-component';`}</Prism>
                            <Table>
                                <Table.Head>
                                    <Th>Name</Th>
                                    <Th>Type</Th>
                                    <Th>Default</Th>
                                    <Th>Description</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>lg</Td>
                                        <Td>number</Td>
                                        <Td>null</Td>
                                        <Td>屏幕尺寸1500px以上时，栅格所占份数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>md</Td>
                                        <Td>number</Td>
                                        <Td>null</Td>
                                        <Td>屏幕尺寸1200px以上，1500px以下时，栅格所占份数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>sm</Td>
                                        <Td>number</Td>
                                        <Td>null</Td>
                                        <Td>屏幕尺寸1200px以下时，栅格所占份数</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>style</Td>
                                        <Td>object</Td>
                                        <Td>null</Td>
                                        <Td>自定义样式</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>''</Td>
                                        <Td>自定义class名称</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
