import React from 'react';
import {Checkbox, Row, Col, Box, Table} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import CheckboxMd from './checkbox.md';

import basicCheckbox from './examples/basic.x';
import disabledCheckbox from './examples/disabled.x';
import singleItem from './examples/single.x';
import halfItem from './examples/half.x';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMark: false,
            isDisabled: false,
            selected: [1, 2],
            halfValue: 'half'
        }
    }

    render() {

        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Checkbox</Box.Header>
                        <Box.Body><Markdown content={CheckboxMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>基本用法</Box.Header>
                        <Box.Body>
                            <Checkbox
                                options={[
                                    {
                                        value: 1,
                                        label: '苹果'
                                    },
                                    {
                                        value: 2,
                                        label: '桃子'
                                    },
                                    {
                                        value: 3,
                                        label: '猕猴桃'
                                    }
                                ]}
                                value={this.state.selected}
                                onChange={(res) => {
                                    this.setState({
                                        selected: res
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicCheckbox}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>禁用状态</Box.Header>
                        <Box.Body>
                            <Checkbox
                                options={[{
                                    value: 1,
                                    label: '苹果',
                                    disabled: true
                                },{
                                    value: 2,
                                    label: '桃子'
                                },{
                                    value: 3,
                                    label: '牛油果',
                                    disabled: true
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
                            <Prism>{disabledCheckbox}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>单项使用</Box.Header>
                        <Box.Body>
                            <Box>
                                <Checkbox.Item
                                    label={'记住密码'}
                                    value={this.state.isMark}
                                    onChange={(e, res) => {
                                        this.setState({
                                            isMark: res
                                        })
                                    }}
                                />
                            </Box>
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{singleItem}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>有半选状态的选择框</Box.Header>
                        <Box.Body>
                             <Checkbox.Half
                                label={'选择状态'}
                                value={this.state.halfValue}
                                onChange={(e, res) => {
                                    this.setState({
                                        halfValue: res
                                    })
                                }}
                            />
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{halfItem}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>Checkbox Attributes</Box.Header>
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
                                        <Td>options</Td>
                                        <Td>array</Td>
                                        <Td>-</Td>
                                        <Td>checkbox可选值的对象{'{value: number, label: string}'}数组</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>value</Td>
                                        <Td>array</Td>
                                        <Td>-</Td>
                                        <Td>checkbox选中的number数组，对应options中的value值</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>style</Td>
                                        <Td>object</Td>
                                        <Td>-</Td>
                                        <Td>自定义行内样式</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onChange</Td>
                                        <Td>function</Td>
                                        <Td>-</Td>
                                        <Td>checkbox勾选变化时的回调函数，返回当前选中的value数组</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Checkbox.Item && Checkbox.Half Attributes</Box.Header>
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
                                        <Td>label</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>单项checkbox的显示名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>value</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否选中</Td>
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
                                        <Td>checkbox勾选变化时的回调函数，返回event及当前选中状态</Td>
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
