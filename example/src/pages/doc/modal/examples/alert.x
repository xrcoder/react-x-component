import { Button, Modal } from 'react-x-component';

render() {
    return(
        <Button
            onClick={() => {
                Modal.Alert({
                    size: 'sm',
                    title: 'alert标题',
                    content: 'alert自定义content',
                    confirmText: '确认按钮文案'
                }).then(() => {
                    console.log('confirm');
                })
            }}
        >点我</Button>
    )
}