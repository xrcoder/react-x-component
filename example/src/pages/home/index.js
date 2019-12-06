import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Box } from 'react-x-component';

@withRouter
export default class extends React.Component {

    render() {
        return (
            <div className="x-component-homepage">
                <Box>
                    <Box.Header></Box.Header>
                    <Box.Body>
                        <div>首页 <Link to="/app/doc">返回</Link></div>
                    </Box.Body>
                </Box>
            </div>
        )
    }
}
