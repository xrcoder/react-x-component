import React, {Fragment} from 'react';
import Templete from '../templete';
import ApiTable from '../templete/api_table';
import {Button, Row, Col} from 'react-x-component';
import './index.scss';

function Show(props) {
    return <div className="color1">{props.children}</div>;
}

export default () => {
    const PrimaryContent = () => {
        return (
            <Fragment>
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
            </Fragment>
        );
    };

    const primaryCode = `
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
    </Row>`;

    const item = {title: 'Row', list: [['className', '容器 className', 'string', '--', '--'], ['space', '栅格间隔', 'number', '--', '15'], ['style', '指定样式', 'object', '--', null]]};
    const item1 = {title: 'Col', list: [['className', '容器 className', 'string', '--', '--'], ['style', '指定样式', 'object', '--', null]]};
    const apiData = [item, item1];
    return (
        <div className="doc-grid">
            {Templete('基础栅格', PrimaryContent, primaryCode)}
            {ApiTable(apiData)}
        </div>
    );
};
