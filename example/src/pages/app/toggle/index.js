import React, {useState} from 'react';
import {Toggle, Box} from 'react-x-component';

//显示区域
function MenuDemo(show, close) {
    return (
        <div>测试 <span onClick={close}>关闭</span></div>
    )
}

//点击区域
function MenuTab({toggle, show, props}) {
    return (
        <button {...props} onClick={toggle}>测试</button>
    )
}

export default function () {
    return (
        <Box>
            <Box.Header>简单Toggle</Box.Header>
            <Box.Body>
                <Toggle.Box className={'x-toggle-demo'} menu={MenuDemo} onToggle={(res) => {
                    console.log(res);
                }}>{MenuTab}</Toggle.Box>
            </Box.Body>
        </Box>
    );
}
