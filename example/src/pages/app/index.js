import React from 'react';
import { LayoutB } from 'react-x-component';
import { Route, Switch } from 'react-router-dom';
import Router from './router';
import AppHeader from './common/header';
import AppSider from './common/sider';

const { Sider, Container, Header, Content, Footer } = LayoutB;

function Main() {
    return (
        <Container>
            <Sider className="app-sider">
                <AppSider prefix="app/component" />
            </Sider>
            <Content className="app-content">
                <Router />
            </Content>
        </Container>
    )
}

export default class extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const { match } = this.props;
        return (
            <LayoutB>
                <Header className="app-header">
                    <AppHeader />
                </Header>
                <Switch>
                    <Route path={`${match.url}/component`} component={Main} />
                    <Route path={`${match.url}/doc`} component={require('../doc')} />
                    <Route path={`${match.url}/home`} component={require('../home')} />
                </Switch>
            </LayoutB>
        )
    }
}
