import React from 'react';
import {Button, Row, Col, Box, Icon, ButtonGroup, ButtonIcon, Input} from 'react-x-component';
import './index.scss';

export default class extends React.Component {
    render() {
        return (
            <Row className="x-button-demo">
                <Col lg={12} md={12}>
                    <Box>
                        <Box.Header>按钮类型</Box.Header>
                        <Box.Body>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>Btn</Col>
                                <Col lg={3} md={3}>Icon Btn</Col>
                                <Col lg={3} md={3}>Small</Col>
                                <Col lg={3} md={3}>Disable</Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button onClick={(e) => {
                                        console.log(e);
                                    }}>默认按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'}>常态按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button onClick={() => {
                                        console.log('按钮点击');
                                    }}>默认按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button disabled={true}>默认按钮</Button>
                                </Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button type="primary" onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'} type="primary" onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button type="primary" onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button type="primary" disabled={true}>常态按钮</Button>
                                </Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button type="primary" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'} type="primary" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button type="primary" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button type="primary" inverse={true} disabled={true} onClick={() => {
                                        alert(1)
                                    }}>常态按钮</Button>
                                </Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button type="danger" onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'} type="danger">常态按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button type="danger" onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button type="danger" disabled={true} onClick={() => {
                                        alert(1)
                                    }}>危险按钮</Button>
                                </Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button type="danger" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'} type="danger" inverse={true}>常态按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button type="danger" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button type="danger" inverse={true} disabled={true}>危险按钮</Button>
                                </Col>
                            </Row>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>按钮尺寸</Box.Header>
                        <Box.Body>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>lg</Col>
                                <Col lg={3} md={3}>Icon</Col>
                                <Col lg={3} md={3}>sm</Col>
                                <Col lg={3} md={3}>Disable</Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button size={'lg'} onClick={(e) => {
                                        console.log(e);
                                    }}>默认按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon size={'lg'} icon={'plus'} onClick={() => {
                                        console.log('按钮点击');
                                    }}>默认按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} onClick={() => {
                                        console.log('按钮点击');
                                    }}>默认按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} disabled={true}>默认按钮</Button>
                                </Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button size={'lg'} type="primary" onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'} size={'lg'} type="primary" onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} type="primary" onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} type="primary" disabled={true}>常态按钮</Button>
                                </Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button size={'lg'} type="primary" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'} size={'lg'} type="primary" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} type="primary" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} type="primary" inverse={true} disabled={true}>常态按钮</Button>
                                </Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button size={'lg'} type="danger" onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'} size={'lg'} type="danger" onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} type="danger" onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} type="danger" disabled={true} onClick={() => {
                                        alert(1)
                                    }}>危险按钮</Button>
                                </Col>
                            </Row>
                            <Row className={"button-row"}>
                                <Col lg={3} md={3}>
                                    <Button size={'lg'} type="danger" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <ButtonIcon icon={'plus'} size={'lg'} type="danger" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</ButtonIcon>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} type="danger" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>危险按钮</Button>
                                </Col>
                                <Col lg={3} md={3}>
                                    <Button size={'sm'} type="danger" inverse={true} disabled={true}>危险按钮</Button>
                                </Col>
                            </Row>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>静态按钮组</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <ButtonGroup>
                                    <Button type="primary" inverse={true} onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                    <Button type="primary" onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                    <Button type="primary" onClick={() => {
                                        console.log('按钮点击');
                                    }}>常态按钮</Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button type="primary"><Icon name={'align-center'}/></Button>
                                    <Button type="primary"><Icon name={'align-justify'}/></Button>
                                    <Button type="primary"><Icon name={'align-left'}/></Button>
                                    <Button type="primary"><Icon name={'align-right'}/></Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button><Icon name={'align-center'}/></Button>
                                    <Button><Icon name={'align-justify'}/></Button>
                                    <Button><Icon name={'align-left'}/></Button>
                                    <Button><Icon name={'align-right'}/></Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button type="danger"><Icon name={'align-center'}/></Button>
                                    <Button type="danger"><Icon name={'align-justify'}/></Button>
                                    <Button type="danger"><Icon name={'align-left'}/></Button>
                                    <Button type="danger"><Icon name={'align-right'}/></Button>
                                </ButtonGroup>
                                <ButtonGroup>
                                    <Button type="danger" inverse><Icon name={'align-center'}/></Button>
                                    <Button type="danger"><Icon name={'align-justify'}/></Button>
                                    <Button type="danger" inverse><Icon name={'align-left'}/></Button>
                                    <Button type="danger" inverse><Icon name={'align-right'}/></Button>
                                </ButtonGroup>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>纯文字按钮</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button type="text" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>常态按钮</Button>
                                <Button type="text" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>常态按钮</Button>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>带图标按钮</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <ButtonIcon icon={'plus'} type="primary" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>加号</ButtonIcon>
                                <ButtonIcon icon={'user'} type="primary" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>用户</ButtonIcon>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>按钮定位器（靠左）</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <ButtonIcon icon={'plus'} type="primary" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>加号</ButtonIcon>
                                <ButtonIcon icon={'user'} type="primary" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>用户</ButtonIcon>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>按钮定位器（居中）</Box.Header>
                        <Box.Body>
                            <Button.Box align={'center'}>
                                <ButtonIcon icon={'plus'} type="primary" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>居中</ButtonIcon>
                                <ButtonIcon icon={'user'} type="primary" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>居中</ButtonIcon>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>按钮定位器（默认）</Box.Header>
                        <Box.Body>
                            <Button.Box>
                                <Input.Search><Icon name={'search'}/></Input.Search>
                                <Button type="primary" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>重置</Button>
                                <Button type="primary" inverse={true} onClick={() => {
                                    console.log('按钮点击');
                                }}>查询</Button>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>链接按钮</Box.Header>
                        <Box.Body>
                            <Button.Box align={'left'}>
                                <Button.Link type="primary" inverse={true}>重置</Button.Link>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        );
    }
}
