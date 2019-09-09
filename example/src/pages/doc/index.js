import React from 'react';
import {withRouter, Switch, Route, Redirect} from 'react-router-dom';

@withRouter
export default class extends React.Component {
    render() {
        const {match} = this.props;
        return (
            <div className="app-doc-layout">
                <Switch>
                    <Route path={`${match.url}/button`} component={require('./button')}/>
                    <Redirect to={`${match.url}/button`}/>
                </Switch>
            </div>
        )
    }
}
