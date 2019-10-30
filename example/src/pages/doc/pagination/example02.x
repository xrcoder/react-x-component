import { Pagination } from 'react-x-component';

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
