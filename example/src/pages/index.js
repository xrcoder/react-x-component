import React from 'react';
import {Route, Switch} from 'react-router-dom';
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
                <Route path="/app" component={require('./app')}/>
                <Route component={RedirectTo}/>
            </Switch>
            <Toast.Container/>
        </>
    )
}
