import './index.scss';
import React from 'react';
import {Modal, Row, Col, Box, Button} from 'react-x-component';
import Template from './template';

export default class extends React.Component {

    showConfirm(size) {
        Modal.Confirm({size}).then(() => {
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
                        <Box.Header>确认框</Box.Header>
                        <Box.Body>
                            <Button.Box align={"left"}>
                                <Button onClick={this.showConfirm.bind(this, 'lg')}>确认(大)</Button>
                                <Button onClick={this.showConfirm.bind(this, 'md')}>确认(中)</Button>
                                <Button onClick={this.showConfirm.bind(this, 'sm')}>确认(小)</Button>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                </Col>
                <Col md={12}>
                    <Box>
                        <Box.Header>提示框</Box.Header>
                        <Box.Body>
                            <Button.Box align={"left"}>
                                <Button onClick={this.showAlert.bind(this, 'lg')}>提示(大)</Button>
                                <Button onClick={this.showAlert.bind(this, 'md')}>提示(中)</Button>
                                <Button onClick={this.showAlert.bind(this, 'sm')}>提示(小)</Button>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                </Col>
                <Col md={12}>
                    <Box>
                        <Box.Header>自定义</Box.Header>
                        <Box.Body>
                            <Button.Box align={"left"}>
                                <Button onClick={this.showDialog.bind(this, 'lg')}>弹层(大)</Button>
                                <Button onClick={this.showDialog.bind(this, 'md')}>弹层(中)</Button>
                                <Button onClick={this.showDialog.bind(this, 'sm')}>弹层(小)</Button>
                            </Button.Box>
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
