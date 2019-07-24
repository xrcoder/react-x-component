import './index.scss';
import React from 'react';
import {Pagination, Row, Col, Box, Button} from 'react-x-component';

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 4,
            pageSize: 10,
            count: 120
        }
    }

    onPageChange(num) {
        this.setState({
            currentPage: num
        })
    }

    onPageSizeChange(num) {
        this.setState({
            pageSize: num,
            currentPage: 1
        })
    }

    render() {
        const {count} = this.state;
        return (
            <Row className="x-pagination-demo">
                <Col lg={12} md={12}>
                    <Box>
                        <Box.Header>分页类型</Box.Header>
                        <Box.Body>
                            <Row>
                                <Col md={12}>
                                    <Pagination.Page className="pagination-page" count={this.state.count}
                                                     currPage={this.state.currentPage} pageSize={this.state.pageSize}
                                                     onPageChange={::this.onPageChange}/>
                                </Col>
                                <Col md={12}>
                                    <Pagination.Page className="pagination-page" count={this.state.count}
                                                     currPage={this.state.currentPage} pageSize={this.state.pageSize}
                                                     onPageChange={::this.onPageChange}/>
                                    <Pagination.Size className="pagination-size" count={this.state.count}
                                                     pageSize={this.state.pageSize}
                                                     onPageSizeChange={::this.onPageSizeChange}/>
                                </Col>
                                <Col md={12}>
                                    <Pagination style={{width:'100%'}} className="combination-pagination" count={this.state.count}
                                                currPage={this.state.currentPage} pageSize={this.state.pageSize}
                                                onPageChange={::this.onPageChange}
                                                onPageSizeChange={::this.onPageSizeChange}/>
                                </Col>
                                <Col md={12}>
                                    <Button onClick={() => {
                                        this.setState({count: count + 10})
                                    }}>count +10</Button>
                                    <Button onClick={() => {
                                        this.setState({currentPage: 2})
                                    }}>切换到第二页</Button>
                                    <Button onClick={() => {
                                        this.setState({pageSize: 30})
                                    }}>每页改为30条</Button>
                                </Col>
                            </Row>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        );
    }
}
