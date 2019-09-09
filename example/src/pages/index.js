import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Toast} from 'react-x-component';

function RedirectTo(props) {
    props.history.$push('/app/component');
    return null;
}

export default function () {
    return (
        <>
            <Switch>
                <Route path="/home" component={require('./home')}/>
                <Route path="/app" component={require('./app/layout_b')}/>
                <Route component={withRouter(RedirectTo)}/>
            </Switch>
            <Toast.Container/>
        </>
    )
}
