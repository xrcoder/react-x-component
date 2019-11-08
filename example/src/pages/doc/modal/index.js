import React from 'react';
import {Modal, Row, Col, Box, Table, Button} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import ModalMd from './modal.md';

import basicModal from './examples/basic.x';
import confirmModal from './examples/confirm.x';
import alertModal from './examples/alert.x';

export default class extends React.Component {
    Template(props){
        return(
            <React.Fragment>
                <Modal.Header {...props}>Modal标题</Modal.Header>
                <Modal.Body>
                    <div>正文内容</div>
                    <div>{props.data.name}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Box>
                        <Button onClick={props.cancel}>取消</Button>
                        <Button type='primary' onClick={props.confirm}>确认</Button>
                    </Button.Box>
                </Modal.Footer>
            </React.Fragment>
        )
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Modal</Box.Header>
                        <Box.Body><Markdown content={ModalMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>基本用法</Box.Header>
                        <Box.Body>
                            <Button
                                onClick={() => {
                                    Modal.Dialog(this.Template, {
                                        size: 'lg',
                                        data: {
                                            name: 'hello world'
                                        }
                                    }).then(() => {
                                        console.log('confirm');
                                    }, () => {
                                        console.log('cancel');
                                    })
                                }}
                            >点我</Button>
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{basicModal}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>Confirm弹窗</Box.Header>
                        <Box.Body>
                            <Button
                                onClick={() => {
                                    Modal.Confirm({
                                        size: 'md',
                                        title: 'confirm标题',
                                        content: 'confirm自定义content',
                                        confirmText: '确认按钮文案',
                                        cancelText: '取消按钮文案'
                                    }).then(() => {
                                        console.log('confirm');
                                    }, () => {
                                        console.log('cancel');
                                    })
                                }}
                            >点我</Button>
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{confirmModal}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>Alert弹窗</Box.Header>
                        <Box.Body>
                            <Button
                                onClick={() => {
                                    Modal.Alert({
                                        size: 'sm',
                                        title: 'alert标题',
                                        content: 'alert自定义content',
                                        confirmText: '确认按钮文案'
                                    }).then(() => {
                                        console.log('confirm');
                                    })
                                }}
                            >点我</Button>
                        </Box.Body>
                        <Box.Footer>
                            <Prism>{alertModal}</Prism>
                        </Box.Footer>
                    </Box>
                    <Box>
                        <Box.Header>Modal Attributes</Box.Header>
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
                                        <Td>size</Td>
                                        <Td>string</Td>
                                        <Td>'md'</Td>
                                        <Td>模态框尺寸，可选值('lg', 'md', 'sm')</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>backDrop</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>点击背景时模态框是否关闭</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>自定义样式class名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>data</Td>
                                        <Td>object</Td>
                                        <Td>-</Td>
                                        <Td>自定义传参</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Modal.Confirm Attributes</Box.Header>
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
                                        <Td>size</Td>
                                        <Td>string</Td>
                                        <Td>'sm'</Td>
                                        <Td>模态框尺寸，可选值('lg', 'md', 'sm')</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>backDrop</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>点击背景时模态框是否关闭</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>自定义样式class名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>title</Td>
                                        <Td>string</Td>
                                        <Td>'系统提示'</Td>
                                        <Td>弹窗标题</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>content</Td>
                                        <Td>string</Td>
                                        <Td>'您确定要执行此操作吗？'</Td>
                                        <Td>弹窗正文内容</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>confirmText</Td>
                                        <Td>string</Td>
                                        <Td>'确认'</Td>
                                        <Td>弹窗确认按钮文案</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>cancelText</Td>
                                        <Td>string</Td>
                                        <Td>'取消'</Td>
                                        <Td>弹窗取消按钮文案</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Modal.Alert Attributes</Box.Header>
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
                                        <Td>size</Td>
                                        <Td>string</Td>
                                        <Td>'sm'</Td>
                                        <Td>模态框尺寸，可选值('lg', 'md', 'sm')</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>backDrop</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>点击背景时模态框是否关闭</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>className</Td>
                                        <Td>string</Td>
                                        <Td>-</Td>
                                        <Td>自定义样式class名称</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>title</Td>
                                        <Td>string</Td>
                                        <Td>'系统提示'</Td>
                                        <Td>弹窗标题</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>content</Td>
                                        <Td>string</Td>
                                        <Td>'您确定要执行此操作吗？'</Td>
                                        <Td>弹窗正文内容</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>confirmText</Td>
                                        <Td>string</Td>
                                        <Td>'确认'</Td>
                                        <Td>弹窗确认按钮文案</Td>
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
