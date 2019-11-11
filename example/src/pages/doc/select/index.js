import React from 'react';
import { Row, Col, Box, Select } from 'react-x-component';
import { Prism, ApiTable } from 'components';

import Example01 from './example01.x';
import Example02 from './example02.x';
import Example03 from './example03.x';

import { singleApi, multipleApi, searchApi } from './api';

export default class extends React.Component {

    state = {
        singleSelectOpts: [{ value: 0, label: '香蕉' }, { value: 1, label: '苹果' }, { value: 2, label: '葡萄' }],
        singleValue: null,
        multiSelectOpts: [{ value: 0, label: 'apple' }, { value: 1, label: 'banana' }, { value: 2, label: 'grape' }],
        multiValue: null,
        searchSelectValue: null
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>Select</Box.Header>
                        <Box.Body>
                            Select适用于所有需要进行选项选择的场景
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>
                            单选下拉框
                        </Box.Header>
                        <Box.Body>
                            <Row>
                                <Col md={4}>
                                    <Select.Single
                                        value={this.state.singleValue}
                                        options={this.state.singleSelectOpts}
                                        placeholder={"请选择"}
                                        onChange={(value) => {
                                            this.setState({
                                                singleValue: value
                                            });
                                        }} />
                                </Col>
                            </Row>
                            <Prism>{Example01}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>多选下拉框</Box.Header>
                        <Box.Body>
                            <Row>
                                <Col md={4}>
                                    <Select.Multi
                                        options={this.state.multiSelectOpts}
                                        value={this.state.multiValue}
                                        placeholder={"多选请选择"}
                                        onChange={(value) => {
                                            this.setState({
                                                multiValue: value
                                            })
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Prism>{Example02}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>搜索下拉框</Box.Header>
                        <Box.Body>
                            <Row>
                                <Col md={4}>
                                    <Select.Search
                                        value={this.state.searchSelectValue}
                                        options={this.state.singleSelectOpts}
                                        onChange={(value) => {
                                            this.setState({
                                                searchSelectValue: value
                                            });
                                        }} />
                                </Col>
                            </Row>
                            <Prism>{Example03}</Prism>
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Select.Single Attribute</Box.Header>
                        <Box.Body>
                            <ApiTable
                                {...singleApi}
                            />
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Select.Multi Attribute</Box.Header>
                        <Box.Body>
                            <ApiTable
                                {...multipleApi}
                            />
                        </Box.Body>
                    </Box>
                    <Box>
                        <Box.Header>Select.Search Attribute</Box.Header>
                        <Box.Body>
                            <ApiTable
                                {...searchApi}
                            />
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
