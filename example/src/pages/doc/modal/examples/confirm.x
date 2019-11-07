import { Modal, Button } from 'react-x-component';

render() {
    return(
        <Button
            onClick={() => {
                Modal.Confirm({
                    size: 'md',
                    title: 'confirm标题',
                    content: 'confirm自定义content',
                    confirmText: '确认按钮文案',
                    cancelText: '取消按钮文案'
                }).then(() => {
                    console.log('confirm');
                }, () => {
                    console.log('cancel');
                })
            }}
        >点我</Button>
    )
}