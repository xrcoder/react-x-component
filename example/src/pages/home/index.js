import React, { Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Box } from 'react-x-component';
import { Prism, Markdown } from 'components';

import HomepageMd from './homepage.md';

@withRouter
export default class extends React.Component {

    render() {
        return (
            <div className="x-component-homepage">
                <Box>
                    <Box.Header>
                        <h2>React-X-Component</h2>
                    </Box.Header>
                    <Box.Body>
                        <Markdown content={HomepageMd} />
                    </Box.Body>
                </Box>
            </div>
        )
    }
}
