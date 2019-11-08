import React from 'react';
import {Remind, Row, Col, Box, Table, Button} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import remindMd from './remind.md';

import basicRemind from './examples/basic.x';

export default class extends React.Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Remind</Box.Header>
                        <Box.Body><Markdown content={remindMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Remind.Loading</Box.Header>
                        <Box.Body>
                            <Remind.Loading status={true}/>
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicRemind}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>Remind.Loading Attributes</Box.Header>
                        <Box.Body>
                            <Table>
                                <Table.Head>
                                    <Th>参数</Th>
                                    <Th>类型</Th>
                                    <Th>默认值</Th>
                                    <Th>说明</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>status</Td>
                                        <Td>boolean</Td>
                                        <Td>true</Td>
                                        <Td>是否显示加载态</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>自定义样式class名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>style</Td>
                                        <Td>object</Td>
                                        <Td>-</Td>
                                        <Td>自定义行内样式</Td>
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
