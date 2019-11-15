import {Toast} from 'react-x-component';

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
