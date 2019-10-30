import React from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';
import {LayoutB} from 'react-x-component';
import AppSider from '../app/common/sider';

@withRouter
export default class extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <LayoutB.Container>
                <LayoutB.Sider className="app-sider">
                    <AppSider prefix="app/doc"/>
                </LayoutB.Sider>
                <LayoutB.Content className="app-content">
                    <Switch>
                        <Route path={`${match.url}/button`} component={require('./button')}/>
                        <Route path={`${match.url}/grid`} component={require('./grid')}/>
                        <Route path={`${match.url}/toggle`} component={require('./toggle')}/>
                        <Route path={`${match.url}/form`} component={require('./form')}/>
                        <Redirect to={`${match.url}/button`}/>
                    </Switch>
                </LayoutB.Content>
            </LayoutB.Container>
        )
    }
}
