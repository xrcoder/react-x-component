import './index.scss';

import React from 'react';
import {Row, Col} from 'react-x-component';
import Inputplus from './input_plus';
import InputSelect from './input_select';
import Basic from './basic';
import Form from './form';

export default class extends React.Component {
    render() {
        return (
            <Row className="x-input-demo">
                <Col md={6}>
                    <Basic/>
                    <Form/>
                </Col>
                <Col md={6}>
                    <Inputplus/>
                    <InputSelect/>
                </Col>
            </Row>
        )
    }
}
