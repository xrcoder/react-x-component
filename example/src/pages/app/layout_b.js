import React, {Component} from 'react';
import {LayoutB} from 'react-x-component';
import Router from './router';
import {withRouter} from 'react-router-dom';

import AppHeader from './common/header';
import AppSider from './common/sider';

const {Sider, Container, Header, Content, Footer} = LayoutB;

@withRouter
export default class extends Component {
    render() {
        return (
            <LayoutB>
                <Header className="app-header">
                    <AppHeader/>
                </Header>
                <Container>
                    <Sider className="app-sider">
                        <AppSider prefix="b"/>
                    </Sider>
                    <Content className="app-content">
                        <Router {...this.props}></Router>
                    </Content>
                </Container>
            </LayoutB>
        )
    }
}
