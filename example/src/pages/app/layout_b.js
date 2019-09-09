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

export default function (props) {
    console.log('1');
    return (
        <LayoutB>
            <Header className="app-header"><AppHeader/></Header>
            <Switch>
                <Route path={`/app/component`} component={() => <AppComponent {...props}/>}/>
                <Route path={`/app/doc`} component={() => <div style={{marginTop: '50px'}}>doc</div>}/>
            </Switch>
        </LayoutB>
    )
}
