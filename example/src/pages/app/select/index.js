import React from 'react';
import {Select, Box, Row, Col} from 'react-x-component';
import SelectSingle from './select_single';
import {stateOptions} from './data';

export default class extends React.Component {

    constructor() {
        super()
        this.state = {
            singleValue: {value: 'AR', label: 'Arkansas'},
            multiValue: [{value: 'AR', label: 'Arkansas'}]
        }
    }

    render() {
        return (
            <Row>
                <Col lg={6} md={6}>
                    <Box>
                        <Box.Header>多选</Box.Header>
                        <Box.Body>
                            <Select.Multi
                                options={stateOptions}
                                value={this.state.multiValue}
                                onChange={(value) => {
                                    this.setState({
                                        multiValue: value
                                    })
                                }}
                            />
                        </Box.Body>
                    </Box>
                </Col>
                <Col lg={6} md={6}>
                    <Box>
                        <Box.Header>单选</Box.Header>
                        <Box.Body>
                            <Select.Single
                                value={this.state.singleValue}
                                options={stateOptions}
                                onChange={(value) => {
                                    this.setState({
                                        singleValue: value
                                    });
                                }}/>
                        </Box.Body>
                    </Box>
                </Col>
                <Col lg={6} md={6}>
                    <SelectSingle/>
                </Col>
                <Col lg={6} md={6}>
                    <Box>
                        <Box.Header>搜索</Box.Header>
                        <Box.Body>
                            <Select.Search
                                value={this.state.singleValue}
                                options={stateOptions}
                                onChange={(value) => {
                                    this.setState({
                                        singleValue: value
                                    });
                                }}/>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
