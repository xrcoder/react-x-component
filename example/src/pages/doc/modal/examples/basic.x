import { Button, Modal } from 'react-x-component';

Template(props) {
    return(
        <React.Fragment>
            <Modal.Header {...props}>Modal标题</Modal.Header>
            <Modal.Body>
                <div>正文内容</div>
                <div>{props.data.name}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button.Box>
                    <Button onClick={props.cancel}>取消</Button>
                    <Button type='primary' onClick={props.confirm}>确认</Button>
                </Button.Box>
            </Modal.Footer>
        </React.Fragment>
    )
}

render() {
    return (
        <Button
            onClick={() => {
                Modal.Dialog(this.Template, {
                    size: 'lg',
                    data: {
                        name: 'hello world'
                    }
                }).then(() => {
                    console.log('confirm');
                }, () => {
                    console.log('cancel');
                })
            }}
        >点我</Button>
    )
}