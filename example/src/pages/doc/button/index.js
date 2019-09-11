import React from 'react';
import {Box, Row, Col, Button, Table, ButtonGroup, Icon, ButtonIcon} from 'react-x-component';
import {Prism, Markdown} from 'components';
const {Tr, Td, Th} = Table;

import examples01 from './examples01.x';
import examples02 from './examples02.x';
import examples03 from './examples03.x';
import examples04 from './examples04.x';
import examples05 from './examples05.x';
import examples06 from './examples06.x';

import BtnMd from './button.md';
import ButtonGroupMd from './button_group.md';

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Button</Box.Header>
                        <Box.Body><Markdown content={BtnMd}/></Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Simple buttons</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button>默认</Button>
                                <Button type="primary">主要</Button>
                                <Button type="danger">危险</Button>
                            </Button.Box>
                            <Prism>{examples01}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Outline buttons</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button inverse>默认</Button>
                                <Button inverse type="primary">主要</Button>
                                <Button inverse type="danger">危险</Button>
                            </Button.Box>
                            <Prism>{examples02}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Sizes buttons</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button size={'sm'}>小按钮</Button>
                                <Button>正常按钮</Button>
                            </Button.Box>
                            <Prism>{examples03}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Disabled state</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button disabled>默认</Button>
                                <Button disabled type="primary">主要</Button>
                                <Button disabled type="danger">危险</Button>
                            </Button.Box>
                            <Prism>{examples04}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Button Props Api</Box.Header>
                        <Box.Body>
                            <Prism>{`import {Button} from 'react-x-component';`}</Prism>
                            <Table>
                                <Table.Head>
                                    <Th>Name</Th>
                                    <Th>Type</Th>
                                    <Th>Default</Th>
                                    <Th>Description</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>type</Td>
                                        <Td>string</Td>
                                        <Td>null</Td>
                                        <Td>按钮类型，主要值有：'primary', 'danger', 'text', null</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>size</Td>
                                        <Td>string</Td>
                                        <Td>md</Td>
                                        <Td>尺寸大小，主要值有：'lg', 'sm', null</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>inverse</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>样式翻转，变成线框了按钮</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>disabled</Td>
                                        <Td>boolean</Td>
                                        <Td>false</Td>
                                        <Td>按钮禁用或者置灰</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>onClick</Td>
                                        <Td>function</Td>
                                        <Td>null</Td>
                                        <Td>点击事件，Callback fired when a button is pressed，回调参数：e</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Button Icon</Box.Header>
                        <Box.Body>
                            <Markdown content={`带有Icon的按钮、Icon目前采用font awesome图标库，Icon在按钮左边，APi同Button`}/>
                        </Box.Body>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <ButtonIcon icon={'plus'} type="primary" onClick={() => {
                                    console.log('按钮点击');
                                }}>加号</ButtonIcon>
                                <ButtonIcon icon={'user'} type="primary" onClick={() => {
                                    console.log('按钮点击');
                                }}>用户</ButtonIcon>
                            </Button.Box>
                            <Prism>{examples06}</Prism>
                            <Table>
                                <Table.Head>
                                    <Th>Name</Th>
                                    <Th>Type</Th>
                                    <Th>Default</Th>
                                    <Th>Description</Th>
                                </Table.Head>
                                <Table.Body>
                                    <Tr>
                                        <Td>icon</Td>
                                        <Td>string</Td>
                                        <Td>null</Td>
                                        <Td>主要是font awesome图标库icon名称，如：'plus'，'user'；</Td>
                                    </Tr>
                                </Table.Body>
                            </Table>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Button Group</Box.Header>
                        <Box.Body>
                            <Markdown content={ButtonGroupMd}/>
                        </Box.Body>
                        <Box.Body>
                            <ButtonGroup>
                                <Button type="primary"><Icon name={'align-center'}/></Button>
                                <Button type="primary"><Icon name={'align-justify'}/></Button>
                                <Button type="primary"><Icon name={'align-left'}/></Button>
                                <Button type="primary"><Icon name={'align-right'}/></Button>
                            </ButtonGroup>
                            <Prism>{examples05}</Prism>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
