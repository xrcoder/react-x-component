import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Toast} from 'react-x-component';

function RedirectTo(props) {
    props.history.$push('/b');
    return null;
}

export default class extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path="/home" component={require('./home')}/>
                    <Route path="/a" component={require('./app/layout_a')}/>
                    <Route path="/b" component={require('./app/layout_b')}/>
                    <Route path="/doc" component={require('./doc')}/>
                    <Route component={withRouter(RedirectTo)}/>
                </Switch>
                <Toast.Container/>
            </>
        )
    }
}
