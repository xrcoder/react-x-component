import React from 'react';
import {Box, Row, Col, Table} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import basicBox from './examples/basic.x';
import BoxMd from './box.md';

export default class extends React.Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Box</Box.Header>
                        <Box.Body><Markdown content={BoxMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>box容器-基本用法</Box.Header>
                        <Box.Body>
                            <Box>
                                <Box.Header>
                                    这里是Box.Header的content
                                </Box.Header>
                                <Box.Body>
                                    这里是Box.Body的content
                                </Box.Body>
                                <Box.Footer>
                                    这里是Box.Footer的content
                                </Box.Footer>
                            </Box>
                            <Prism>{basicBox}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Box Attributes</Box.Header>
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
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>自定义样式class名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>type</Td>
                                        <Td>string</Td>
                                        <Td>default</Td>
                                        <Td>弹窗类型，可选值为('default', 'primary', 'danger', 'info', 'warning'])</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>nogap</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>Box.Body的padding是否清空</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Box.Header Attributes</Box.Header>
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
                    <Box>
                        <Box.Header>Box.Body Attributes</Box.Header>
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
                    <Box>
                        <Box.Header>Box.Footer Attributes</Box.Header>
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
