import {Toast, Button} from 'react-x-component';

 <Button.Box align={'left'}>
    <Button onClick={() => {
        Toast.push("默认类型的通知")
    }}>默认类型</Button>
    <Button type="primary" onClick={() => {
        Toast.push("成功类型的通知", {
            type: 'success'
        })
    }}>成功消息</Button>
    <Button type="danger" onClick={() => {
        Toast.push("错误类型的通知", {
            type: 'error'
        })
    }}>错误提示</Button>
    <Button type="danger" onClick={() => {
        Toast.push("警告类型的通知", {
            type: 'warning'
        })
    }}>警告提示</Button>
</Button.Box>
