import React from 'react';
import {Switch, Row, Col, Box, Table} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import SwitchMd from './switch.md';

import basicSwitch from './examples/basic.x';
import disabledSwitch from './examples/disabled.x';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            status: false,
            status2: true
        }
    }

    render() {

        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Switch</Box.Header>
                        <Box.Body><Markdown content={SwitchMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>基本用法</Box.Header>
                        <Box.Body>
                            <Switch 
                                status={this.state.status} 
                                onChange={(e, res) => {
                                    this.setState({
                                        status: res
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicSwitch}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>禁用状态</Box.Header>
                        <Box.Body>
                            <Switch 
                                status={this.state.status2} 
                                disabled={true}
                                onChange={(e, res) => {
                                    this.setState({
                                        status2: res
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{disabledSwitch}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>Switch Attributes</Box.Header>
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
                                        <Td>false</Td>
                                        <Td>开关的开启状态</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>disabled</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否禁用</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onChange</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>switch status变化时的回调函数，返回当前event及开关状态</Td>
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
                                        <Td>null</Td>
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
