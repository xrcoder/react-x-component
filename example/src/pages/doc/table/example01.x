import React from 'react';
import { Row, Col, Box, Table } from 'react-x-component';
const { Tr, Td, Th } = Table;

export default class extends React.Component {
    render() {
        return (
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
        )
    }
}
