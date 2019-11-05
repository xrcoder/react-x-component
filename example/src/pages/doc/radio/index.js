import React from 'react';
import {Radio, Row, Col, Box, Table} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import RadioMd from './radio.md';

import basicRadio from './examples/basic.x';
import disabledRadio from './examples/disabled.x';
import btnRadio from './examples/btn.x';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null,
            selectedBtn: {
                value: 1,
                label: '实名档案'
            }
        }
    }

    render() {

        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Radio</Box.Header>
                        <Box.Body><Markdown content={RadioMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>基本用法</Box.Header>
                        <Box.Body>
                            <Radio 
                                options={[{
                                    value: 1,
                                    label: '苹果'
                                },{
                                    value: 2,
                                    label: '桃子'
                                },{
                                    value: 3,
                                    label: '猕猴桃'
                                }]} 
                                value={this.state.selected} 
                                onChange={(res) => {
                                    this.setState({
                                        selected: res
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicRadio}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>禁用状态</Box.Header>
                        <Box.Body>
                            <Radio 
                                options={[{
                                    value: 1,
                                    label: '苹果',
                                    disabled: true
                                },{
                                    value: 2,
                                    label: '桃子'
                                },{
                                    value: 3,
                                    label: '猕猴桃'
                                }]} 
                                value={this.state.selected} 
                                onChange={(res) => {
                                    this.setState({
                                        selected: res
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{disabledRadio}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>按钮组的radio，可做页面切换tab用</Box.Header>
                        <Box.Body>
                            <Radio.BtnGroup
                                options={[{
                                    value: 1,
                                    label: '实名档案'
                                }, {
                                    value: 2,
                                    label: '未实名档案'
                                }]}
                                value={this.state.selectedBtn}
                                onChange={(res) => {
                                    this.setState({
                                        selected: res
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{btnRadio}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>Radio Attributes</Box.Header>
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
                                        <Td>options</Td>
                                        <Td>array</Td>
                                        <Td>-</Td>
                                        <Td>radio可选值的对象{'{value: number, label: string}'}数组</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>value</Td>
                                        <Td>array</Td>
                                        <Td>-</Td>
                                        <Td>在otpins中radio选中的object</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onChange</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>radio value变化时的回调函数，返回当前选中的object</Td>
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
