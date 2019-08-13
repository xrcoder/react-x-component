import React, { Fragment } from 'react';
import { withRouter,Switch } from 'react-router-dom';
import {Route} from 'react-router-dom';

export default ()=>{
    return (
        <Switch>
            <Route path='/app/doc/button' component={require('./button')}/>
        </Switch>
    )
}
