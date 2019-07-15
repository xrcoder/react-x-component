import React, {Component} from 'react';
import {LayoutA} from 'react-x-component';
import Router from './router';
import {withRouter} from 'react-router-dom';
import AppHeader from './common/header';
import AppSider from './common/sider';

const {Sider, Container, Header, Content, Footer} = LayoutA;

@withRouter
export default class extends Component {
    render() {
        return (
            <LayoutA>
                <Sider className="app-sider" logo={<div>我是logo</div>}>
                    <AppSider prefix="a"/>
                </Sider>
                <Container>
                    <Header className="app-header">
                        <AppHeader/>
                    </Header>
                    <Content className="app-content">
                        <Router {...this.props}></Router>
                    </Content>
                    <Footer>
                        我是尾部
                    </Footer>
                </Container>
            </LayoutA>
        )
    }
}
