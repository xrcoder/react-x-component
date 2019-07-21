import './index.scss';
import React from 'react';
import {Row, Col} from 'react-x-component';

import List from './list';

export default class extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Row className="x-icon-demo">
                <Col md={12}><List></List></Col>
            </Row>
        );
    }
}

