import React from 'react';
import { Box, Row, Col, Table, Pagination } from 'react-x-component';
import { Prism, Markdown, ApiTable } from 'components';

import PaginationMd from './pagination.md';
import Example01 from './example01.x';
import Example02 from './example02.x';
import Example03 from './example03.x';
import { pageApiConf, sizeApiConf, paginationApiConf } from './api';

const { Tr, Td, Th } = Table;

export default class extends React.Component {
	state = {
		count: 100,
		currentPage: 1,
		pageSize: 10
	}

	onPageChange(res) {
		this.setState({
			currentPage: res
		})
	}

	onPageSizeChange(num) {
		this.setState({
			pageSize: num,
			currentPage: 1
		})
	}

	render() {
		return (
			<Row>
				<Col md={12}>
					<Box>
						<Box.Header>Pagination</Box.Header>
						<Box.Body>
							<Markdown content={PaginationMd} />
						</Box.Body>
					</Box>
					<Box>
						<Box.Header>简单版本的分页（Pagination.Page的使用）</Box.Header>
						<Box.Body>
							<Pagination.Page
								className="pagination-page"
								count={this.state.count}
								currPage={this.state.currentPage}
								pageSize={this.state.pageSize}
								onPageChange={this.onPageChange.bind(this)} />
							<Prism>{Example01}</Prism>
						</Box.Body>
					</Box>
					<Box>
						<Box.Header>组合使用分页（Pagination.Page + Pagination.Size）</Box.Header>
						<Box.Body>
							<Pagination.Page
								className="pagination-page"
								count={this.state.count}
								currPage={this.state.currentPage}
								pageSize={this.state.pageSize}
								onPageChange={this.onPageChange.bind(this)} />
							<Pagination.Size
								className="pagination-size"
								count={this.state.count}
								pageSize={this.state.pageSize}
								onPageSizeChange={this.onPageSizeChange.bind(this)}
							/>
							<Prism>{Example02}</Prism>
						</Box.Body>
					</Box>
					<Box>
						<Box.Header>整体使用</Box.Header>
						<Box.Body>
							<Pagination
								style={{ width: '100%' }}
								menuPlacement={'top'}
								className="combination-pagination" count={this.state.count}
								currPage={this.state.currentPage} pageSize={this.state.pageSize}
								onPageChange={this.onPageChange.bind(this)}
								onPageSizeChange={this.onPageSizeChange.bind(this)} />
							<Prism>{Example03}</Prism>
						</Box.Body>
					</Box>
					<Box>
						<Box.Header>Pagination.Page Props Api</Box.Header>
						<Box.Body>
							<Prism>
								{`import { Pagination } from 'react-x-component';
const { Page } = Pagination;`}
							</Prism>
							<ApiTable
								id="pageApi"
								{...pageApiConf}
							/>
						</Box.Body>
					</Box>
					<Box>
						<Box.Header>Pagination.Size Props Api</Box.Header>
						<Box.Body>
							<Prism>
								{`import { Pagination } from 'react-x-component';
const { Size } = Pagination;`}
							</Prism>
							<ApiTable
								id="sizeApi"
								{...sizeApiConf}
							/>
						</Box.Body>
					</Box>
					<Box>
						<Box.Header>Pagination Props Api</Box.Header>
						<Box.Body>
							<Prism>
								{`import { Pagination } from 'react-x-component';`}
							</Prism>
							<ApiTable
								id="paginationApi"
								{...paginationApiConf}
							/>
						</Box.Body>
					</Box>
				</Col>
			</Row>
		)
	}
}
