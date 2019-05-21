import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import {RayrReact-x-component} from 'react-rayr-react-x-component';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            {/* <RayrReact-x-component/> */}
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
