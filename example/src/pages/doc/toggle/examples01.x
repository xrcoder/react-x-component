<Toggle.Box 
    drop={'right'} 
    className={'x-toggle-demo'}
    menu={
        (show, close) => {
            return (
                <div>测试 <span onClick={close}>关闭</span></div>
            )
        }
    } 
    onToggle={(res) => {
        console.log('当前显示状态为:' + res);
    }}
>
    <Button type="primary" onClick={toggle}>点这</Button>
</Toggle.Box>