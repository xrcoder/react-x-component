import './index.scss';
import React from 'react';
import {Row, Col} from 'react-x-component';

import List from './list';

export default () => {

    return (
        <Row className="x-switch-demo">
            <Col md={12}><List></List></Col>
        </Row>
    );
}

