/**
 * Created by Rayr Lee on 2019/6/28.
 */

import React from 'react';
import {Switch, Row, Col, Box, Button} from 'react-x-component';

export default class extends React.Component {
    constructor() {
        super()
        this.state = {
            status: true,
            disbaled: true
        }
    }

    render() {
        return (
            <Box>
                <Box.Header>开关按钮</Box.Header>
                <Box.Body>
                    <Row>
                        <Col lg={12} md={12} className="icon-item">
                            <Switch status={this.state.status} onChange={(e, res) => {
                                this.setState({
                                    status: res
                                })
                            }}/>
                        </Col>
                        <Col lg={12} md={12} className="icon-item">
                            <Switch status={this.state.status} disabled={this.state.disbaled} onChange={(e, res) => {
                                this.setState({
                                    status: res
                                })
                            }}/>
                        </Col>
                        <Col lg={12} md={12} className="icon-item">
                            当前状态: {this.state.status.toString()}
                        </Col>
                    </Row>
                </Box.Body>
                <Box.Footer>
                    <Button.Box align={"left"}>
                        <Button onClick={() => {
                            this.setState({
                                status: !this.state.status
                            })
                        }}>切换按钮</Button>
                        <Button onClick={() => {
                            this.setState({
                                disbaled: !this.state.disbaled
                            })
                        }}>禁用切换</Button>
                    </Button.Box>
                </Box.Footer>
            </Box>
        )
    }
}
