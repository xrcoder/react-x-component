import React, {Fragment} from 'react';
import {withRouter, Link} from 'react-router-dom';

@withRouter
export default class extends React.Component {

    render() {
        return (
            <div>首页 <Link to="/app/doc">返回</Link></div>
        )
    }
}
