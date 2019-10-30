import {Form, Input, Button} from 'react-x-component';

<Form.Group>
    <Input.Addon
        value='自定义附加内容'
        onEnter={(res) => {
            console.log('点击回车的回调函数');
        }}
        onChange={(res, e) => {
            console.log('值改变的回调函数');
        }}
        render={() => {
            return (
                <Button 
                    onClick={() => {
                }}>自定义</Button>
            )
        }}
    />
</Form.Group>