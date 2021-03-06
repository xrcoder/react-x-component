import React from 'react';
import {Route, Switch} from 'react-router-dom';

// 加lazy| 模块划分，实现路由懒加载

export default ({match}) => {
    return (
        <Switch>
            <Route path={`${match.url}/button`} component={require('./button')}/>
            <Route path={`${match.url}/grid`} component={require('./grid')}/>
            <Route path={`${match.url}/icon`} component={require('./icon')}/>
            <Route path={`${match.url}/pagination`} component={require('./pagination')}/>
            <Route path={`${match.url}/tooltip`} component={require('./tooltip')}/>
            <Route path={`${match.url}/box`} component={require('./box')}/>
            <Route path={`${match.url}/form`} component={require('./input')}/>
            <Route path={`${match.url}/toggle`} component={require('./toggle')}/>
            <Route path={`${match.url}/checkbox`} component={require('./checkbox')}/>
            <Route path={`${match.url}/toast`} component={require('./toast')}/>
            <Route path={`${match.url}/radio`} component={require('./radio')}/>
            <Route path={`${match.url}/select`} component={require('./select')}/>
            <Route path={`${match.url}/switch`} component={require('./switch')}/>
            <Route path={`${match.url}/collapse`} component={require('./collapse')}/>
            <Route path={`${match.url}/upload`} component={require('./upload')}/>
            <Route path={`${match.url}/modal`} component={require('./modal')}/>
            <Route path={`${match.url}/remind`} component={require('./remind')}/>
            <Route component={() => <div>404</div>}/>
        </Switch>
    );
};
