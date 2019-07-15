import './index.scss';
import React from 'react';
import {Modal, Row, Col, Box, Button} from 'react-x-component';
import Template from './template';

export default class extends React.Component {

    showConfirm() {
        Modal.Confirm().then(() => {
            console.log('confirm');
        }, () => {
            console.log('cancel');
        })
    }

    showAlert(size) {
        Modal.Alert({size}).then(() => {
            console.log('confirm');
        }, () => {
            console.log('cancel');
        })
    }

    showDialog(size) {
        Modal.Dialog(Template, {
            size: size,
            className: 'x-modal-demo',
            data: {
                name: 'hello world'
            }
        }).then(() => {
            console.log('confirm');
        }, () => {
            console.log('cancel');
        })
    }

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Box>
                        <Box.Header>确认框使用</Box.Header>
                        <Box.Body>
                            <Button onClick={this.showConfirm.bind(this)}>确认框</Button>
                        </Box.Body>
                    </Box>
                </Col>
                <Col md={12}>
                    <Box>
                        <Box.Header>提示框使用</Box.Header>
                        <Box.Body>
                            <Button onClick={this.showAlert.bind(this, 'lg')}>提示框(大)</Button>
                            <Button onClick={this.showAlert.bind(this, 'md')}>提示框(中)</Button>
                            <Button onClick={this.showAlert.bind(this, 'sm')}>提示框(小)</Button>
                        </Box.Body>
                    </Box>
                </Col>
                <Col md={12}>
                    <Box>
                        <Box.Header>自定义弹层</Box.Header>
                        <Box.Body>
                            <Button onClick={this.showDialog.bind(this, 'lg')}>弹层(大)</Button>
                            <Button onClick={this.showDialog.bind(this, 'md')}>弹层(中)</Button>
                            <Button onClick={this.showDialog.bind(this, 'sm')}>弹层(小)</Button>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
