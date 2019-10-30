import React from 'react';
import {Box, Row, Col, Table, Toggle} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import examples01 from './examples01.x';
import TollgeMd from './toggle.md';

//显示区域
function MenuDemo(show, close) {
    return (
        <div><span onClick={close}>点我关闭</span></div>
    )
}

//点击区域
function MenuTab({toggle, show, props}) {
    return (
        <button className="x-btn" {...props} onClick={toggle}>点我打开</button>
    )
}

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Toggle</Box.Header>
                        <Box.Body><Markdown content={TollgeMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Toggle Example</Box.Header>
                        <Box.Body>
                            <Row>
                                <Col lg={3} md={3} sm={3}>
                                    <Toggle.Box 
                                        drop={'right'} 
                                        className={'x-toggle-demo'}
                                        menu={MenuDemo} 
                                        onToggle={(res) => {
                                            console.log(res);
                                        }}
                                    >{MenuTab}</Toggle.Box>
                                </Col>
                                <Col lg={3} md={3} sm={3}>
                                    <Toggle.Box
                                        drop={'up'} 
                                        className={'x-toggle-demo'}
                                        menu={MenuDemo} 
                                        onToggle={(res) => {
                                            console.log(res);
                                        }}
                                    >{MenuTab}</Toggle.Box>
                                </Col>
                                <Col lg={3} md={3} sm={3}>
                                    <Toggle.Box
                                        drop={'left'} 
                                        className={'x-toggle-demo'}
                                        menu={MenuDemo} 
                                        onToggle={(res) => {
                                            console.log(res);
                                        }}
                                    >{MenuTab}</Toggle.Box>
                                </Col>
                                <Col lg={3} md={3} sm={3}>
                                    <Toggle.Box
                                        drop={'down'} 
                                        className={'x-toggle-demo'}
                                        menu={MenuDemo} 
                                        onToggle={(res) => {
                                            console.log(res);
                                        }}
                                    >{MenuTab}</Toggle.Box>
                                </Col>
                            </Row>
                            <Prism>{examples01}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Toggle Props Api</Box.Header>
                        <Box.Body>
                            <Prism>{`import {Toggle} from 'react-x-component';`}</Prism>
                            <Table>
                                <Table.Head>
                                    <Th>Name</Th>
                                    <Th>Type</Th>
                                    <Th>Default</Th>
                                    <Th>Description</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>drop</Td>
                                        <Td>string</Td>
                                        <Td>down</Td>
                                        <Td>显示视图相对于目标位置</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onToggle</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>显示状态切换时的回调函数，返回当前显示状态</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>menu</Td>
                                        <Td>JSX</Td>
                                        <Td>-</Td>
                                        <Td>视图content</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>null</Td>
                                        <Td>自定义className</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>alignEnd</Td>
                                        <Td>未知</Td>
                                        <Td>未知</Td>
                                        <Td>未知</Td>
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
