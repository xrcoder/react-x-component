import { Pagination } from 'react-x-component';

<Pagination
    style={{ width: '100%' }}
    menuPlacement={'top'}
    className="combination-pagination" count={this.state.count}
    currPage={this.state.currentPage} pageSize={this.state.pageSize}
    onPageChange={this.onPageChange.bind(this)}
    onPageSizeChange={this.onPageSizeChange.bind(this)}/>
