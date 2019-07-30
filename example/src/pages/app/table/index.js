import React from 'react';
import {Table, Box} from 'react-x-component';

const {Tr, Td, Th} = Table;

export default function () {
    return (
        <>
            <Box>
                <Box.Header>简单图表</Box.Header>
                <Box.Body style={{paddingLeft: 0, paddingRight: 0}}>
                    <Table>
                        <Table.Head>
                            <Th>任务名称</Th>
                            <Th>报警数量</Th>
                            <Th>布控低库</Th>
                            <Th>布控相机</Th>
                            <Th>布控区域</Th>
                            <Th align={'center'}>操作</Th>
                        </Table.Head>
                        <Table.Body>
                            <Tr>
                                <Td>183</Td>
                                <Td>John Doe</Td>
                                <Td>11-7-2014</Td>
                                <Td><span className="label label-success">Approved</span></Td>
                                <Td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</Td>
                                <Td align={'center'}>
                                    <Table.Label>详情</Table.Label>
                                    <Table.Label>编辑</Table.Label>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>219</Td>
                                <Td>Alexander Pierce</Td>
                                <Td>11-7-2014</Td>
                                <Td><span className="label label-warning">Pending</span></Td>
                                <Td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</Td>
                                <Td align={'center'}>
                                    <Table.Label>详情</Table.Label>
                                    <Table.Label>编辑</Table.Label>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>657</Td>
                                <Td>Bob Doe</Td>
                                <Td>11-7-2014</Td>
                                <Td><span className="label label-primary">Approved</span></Td>
                                <Td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</Td>
                                <Td align={'center'}>
                                    <Table.Label>详情</Table.Label>
                                    <Table.Label>编辑</Table.Label>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>175</Td>
                                <Td>Mike Doe</Td>
                                <Td>11-7-2014</Td>
                                <Td><span className="label label-danger">Denied</span></Td>
                                <Td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</Td>
                                <Td align={'center'}>
                                    <Table.Label>详情</Table.Label>
                                    <Table.Label>编辑</Table.Label>
                                </Td>
                            </Tr>
                        </Table.Body>
                    </Table>
                </Box.Body>
            </Box>
            <Table>
                <Table.Head>
                    <Th>任务名称</Th>
                    <Th>报警数量</Th>
                    <Th>布控低库</Th>
                    <Th>布控相机</Th>
                    <Th>布控区域</Th>
                    <Th align={'center'}>操作</Th>
                </Table.Head>
                <Table.Body>
                    <Tr>
                        <Td>183</Td>
                        <Td>John Doe</Td>
                        <Td>11-7-2014</Td>
                        <Td><span className="label label-success">Approved</span></Td>
                        <Td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</Td>
                        <Td align={'center'}>
                            <Table.Label>详情</Table.Label>
                            <Table.Label>编辑</Table.Label>
                        </Td>
                    </Tr>
                </Table.Body>
            </Table>
        </>
    )
}
