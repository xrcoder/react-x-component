import './index.scss';
import React from 'react';
import {Row, Col, Box} from 'react-x-component';

function Show(props) {
    return <div className="color1">{props.children}</div>
}

export default () => {

    return (
        <>
            <Row className="x-grid-demo" space={0}>
                <Col lg={3} md={6}>
                    <Show>lg=3, md=6</Show>
                </Col>
                <Col lg={3} md={6}>
                    <Show>lg=3, md=6</Show>
                </Col>
                <Col lg={3} md={6}>
                    <Show>lg=3, md=6</Show>
                </Col>
                <Col lg={3} md={6}>
                    <Show>lg=3, md=6</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
                <Col lg={1} md={2}>
                    <Show>lg=1, md=2</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={12} md={12}>
                    <Show>lg=12, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={6} md={12}>
                    <Show>lg=6, md=12</Show>
                </Col>
                <Col lg={6} md={12}>
                    <Show>lg=6, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={4} md={12}>
                    <Show>lg=4, md=12</Show>
                </Col>
                <Col lg={4} md={12}>
                    <Show>lg=4, md=12</Show>
                </Col>
                <Col lg={4} md={12}>
                    <Show>lg=4, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={5} md={12}>
                    <Show>lg=5, md=12</Show>
                </Col>
                <Col lg={7} md={12}>
                    <Show>lg=7, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={7} md={12}>
                    <Show>lg=7, md=12</Show>
                </Col>
                <Col lg={5} md={12}>
                    <Show>lg=5, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={4} md={12}>
                    <Show>lg=4, md=12</Show>
                </Col>
                <Col lg={8} md={12}>
                    <Show>lg=8, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={8} md={12}>
                    <Show>lg=8, md=12</Show>
                </Col>
                <Col lg={4} md={12}>
                    <Show>lg=4, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={3} md={12}>
                    <Show>lg=3, md=12</Show>
                </Col>
                <Col lg={9} md={12}>
                    <Show>lg=9, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={9} md={12}>
                    <Show>lg=9, md=12</Show>
                </Col>
                <Col lg={3} md={12}>
                    <Show>lg=3, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={2} md={12}>
                    <Show>lg=2, md=12</Show>
                </Col>
                <Col lg={10} md={12}>
                    <Show>lg=10, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={10} md={12}>
                    <Show>lg=10, md=12</Show>
                </Col>
                <Col lg={2} md={12}>
                    <Show>lg=2, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={1} md={12}>
                    <Show>lg=1, md=12</Show>
                </Col>
                <Col lg={11} md={12}>
                    <Show>lg=11, md=12</Show>
                </Col>
            </Row>
            <Row className="x-grid-demo">
                <Col lg={11} md={12}>
                    <Show>lg=11, md=12</Show>
                </Col>
                <Col lg={1} md={12}>
                    <Show>lg=1, md=12</Show>
                </Col>
            </Row>
        </>
    );
}

