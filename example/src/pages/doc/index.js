import React, { Fragment } from 'react';
import {Route, withRouter,Switch,Redirect } from 'react-router-dom';

export default withRouter(({match})=>{
    return (
        <Switch>
            <Route path={`${match.url}/button`} component={require('./button/index')}/>
            <Route path={`${match.url}/icon`} component={require('./icon/index')}/>
            <Route path={`${match.url}/form`} component={require('./form/index')}/>
            <Route path={`${match.url}/tooltip`} component={require('./tooltip/index')}/>
            <Route path={`${match.url}/box`} component={require('./box/index')}/>
            <Route path={`${match.url}/radio`} component={require('./radio/index')}/>
            <Route component={() => <Redirect push to={`${match.url}/button`} />} />
        </Switch>
    )
})
