import React from 'react';
import {LayoutB} from 'react-x-component';
import {withRouter, Route, Switch} from 'react-router-dom';
import Router from './router';
import AppHeader from './common/header';
import AppSider from './common/sider';

const {Sider, Container, Header, Content, Footer} = LayoutB;

function AppComponent() {
    return (
        <Container>
            <Sider className="app-sider">
                <AppSider prefix="app/component"/>
            </Sider>
            <Content className="app-content">
                <Router/>
            </Content>
        </Container>
    )
}

export default withRouter(function (props) {
    return (
        <LayoutB>
            <Header className="app-header"><AppHeader/></Header>
            <Switch>
                <Route path={`${props.match.url}/doc`} component={() => <div style={{marginTop: '50px'}}>doc</div>}/>
                <Route path={`${props.match.url}/component`} component={() => <AppComponent {...props}/>}/>
            </Switch>
        </LayoutB>
    )
})
