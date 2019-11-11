import {Toast, Button} from 'react-x-component';

<Button.Box align={'left'}>
    <Button onClick={() => {
        Toast.notify("默认类型的消息")
    }}>默认类型</Button>
    <Button type="danger" onClick={() => {
        Toast.notify("错误类型的消息", 'error')
    }}>错误类型</Button>
</Button.Box>
