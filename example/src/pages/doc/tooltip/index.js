import React from 'react';
import {Box, Row, Col, Table, Tooltip, Button} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import basicTooltip from './examples/basic.x';
import TooltipMd from './tooltip.md';

export default class extends React.Component {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Tooltip</Box.Header>
                        <Box.Body><Markdown content={TooltipMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>提示框-基本用法</Box.Header>
                        <Box.Body>
                            <Row>
                                <Col md={5}></Col>
                                <Col md={2}>
                                    <Tooltip 
                                        useStyle={{display: 'inline-block'}}
                                        content={'提示内容'}>
                                        <Button type="primary" inverse={true}>这个Tooltip显示在上方</Button>
                                    </Tooltip>
                                </Col>
                                <Col md={5}></Col>
                            </Row>
                            <Row>
                                <Col md={1}></Col>
                                <Col md={2}>
                                    <Tooltip 
                                        useStyle={{display: 'inline-block'}} 
                                        direction={'left'}
                                        content={'提示内容'}
                                    >
                                        <Button type="primary" inverse={true}>这个Tooltip显示在左方</Button>
                                    </Tooltip>
                                </Col>
                                <Col md={6}></Col>
                                <Col md={2}>
                                    <Tooltip 
                                        useStyle={{display: 'inline-block'}} 
                                        direction={'right'}
                                        content={'提示内容'}
                                    >
                                        <Button type="primary" inverse={true}>这个Tooltip显示在右方</Button>
                                    </Tooltip>
                                </Col>
                                <Col md={1}></Col>
                            </Row>
                            <Row>
                                <Col md={5}></Col>
                                <Col md={2}>
                                    <Tooltip 
                                        useStyle={{display: 'inline-block'}} 
                                        direction={'down'}
                                        content={'提示内容'}
                                    >
                                        <Button type="primary" inverse={true}>这个Tooltip显示在下方</Button>
                                    </Tooltip>
                                </Col>
                                <Col md={5}></Col>
                            </Row>
                            <Prism>{basicTooltip}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Tooltip Attributes</Box.Header>
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
                                        <Td>arrow</Td>
                                        <Td>boolean</Td>
                                        <Td>true</Td>
                                        <Td>是否显示箭头</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>arrowSize</Td>
                                        <Td>number</Td>
                                        <Td>5</Td>
                                        <Td>箭头尺寸（单位像素）</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>direction</Td>
                                        <Td>string</Td>
                                        <Td>up</Td>
                                        <Td>提示框展示方向,可选值('up', 'down', 'left', 'right')</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>useHover</Td>
                                        <Td>boolean</Td>
                                        <Td>true</Td>
                                        <Td>是否通过hover触发提示框展示</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>tipContentClassName</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>提示框content的class名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>tipContentHover</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>存疑</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>tagName</Td>
                                        <Td>string</Td>
                                        <Td>div</Td>
                                        <Td>提示框content的容器tagName</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>isOpen</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>是否直接显示提示框（不通过事件触发）</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>hoverDelay</Td>
                                        <Td>number</Td>
                                        <Td>200</Td>
                                        <Td>hover到目标元素后显示提示框的延迟时间（单位毫秒）</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>forceDirection</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>正常情况下，提示框会根据所选方向是否有足够空间展示来决定是展示到对应方向还是自适应展示到另一方向。该选项是用来决定是否强制在所选方向进行展示</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>eventToggle</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>触发提示框展示的事件名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>eventOn</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>存疑</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>eventOff</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>存疑</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>useStyle</Td>
                                        <Td>Object</Td>
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
