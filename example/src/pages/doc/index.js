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
                        <Route path={`${match.url}/tooltip`} component={require('./tooltip')}/>
                        <Route path={`${match.url}/toast`} component={require('./toast')}/>
                        <Route path={`${match.url}/box`} component={require('./box')}/>
                        <Route path={`${match.url}/checkbox`} component={require('./checkbox')}/>
                        <Route path={`${match.url}/radio`} component={require('./radio')}/>
                        <Route path={`${match.url}/select`} component={require('./select')}/>
                        <Route path={`${match.url}/switch`} component={require('./switch')}/>
                        <Route path={`${match.url}/collapse`} component={require('./collapse')}/>
                        <Route path={`${match.url}/upload`} component={require('./upload')}/>
                        <Route path={`${match.url}/modal`} component={require('./modal')}/>
                        <Route path={`${match.url}/remind`} component={require('./remind')}/>
                        <Route path={`${match.url}/table`} component={require('./table')}/>
                        <Route path={`${match.url}/date`} component={require('./date')}/>
                        <Route path={`${match.url}/tree`} component={require('./tree')}/>
                        <Redirect to={`${match.url}/button`}/>
                    </Switch>
                </LayoutB.Content>
            </LayoutB.Container>
        )
    }
}
