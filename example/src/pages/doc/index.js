import React, { Fragment } from 'react';
import {Route, withRouter,Switch,Redirect } from 'react-router-dom';

export default withRouter(({match})=>{
    return (
        <Switch>
            <Route path={`${match.url}/button`} component={require('./button/index')}/>
            <Route component={() => <Redirect push to={`${match.url}/button`} />} />
        </Switch>
    )
})
