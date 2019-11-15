import React from 'react';
import { Row, Col, Box, Table } from 'react-x-component';
import { Prism, ApiTable } from 'components';
import Example01 from './example01.x';
import { tableApi, tableHeadApi, tableLabelApi } from './api';

const { Tr, Td, Th } = Table;
export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Table</Box.Header>
                        <Box.Body>用于需要展示列表的地方，Table组件做了简单功能及样式的基本封装</Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>基本用法</Box.Header>
                        <Box.Body>
                            <Table>
                                <Table.Head>
                                    <Th>姓名</Th>
                                    <Th>性别</Th>
                                    <Th>年龄</Th>
                                    <Th>操作</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>美国队长</Td>
                                        <Td>男</Td>
                                        <Td>89</Td>
                                        <Td>
                                            <Table.Label>详情</Table.Label>
                                            <Table.Label>编辑</Table.Label>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>钢铁侠</Td>
                                        <Td>男</Td>
                                        <Td>30</Td>
                                        <Td>
                                            <Table.Label>详情</Table.Label>
                                            <Table.Label>编辑</Table.Label>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>神奇博士</Td>
                                        <Td>男</Td>
                                        <Td>30</Td>
                                        <Td>
                                            <Table.Label>详情</Table.Label>
                                            <Table.Label>编辑</Table.Label>
                                        </Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                            <Prism>{Example01}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Table Attribute</Box.Header>
                        <Box.Body>
                            <ApiTable
                                {...tableApi}
                            />
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Table's chidlren Attribute</Box.Header>
                        <Box.Body>
                            <div>Table组件的：Table.Head,Table.Body,Table.Tr,Table.Td,Table.Th都是完全接受外部传入的props属性</div>
                            <ApiTable
                                {...tableHeadApi}
                            />
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Table.Label Attribute</Box.Header>
                        <Box.Body>
                            <ApiTable
                                {...tableLabelApi}
                            />
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
