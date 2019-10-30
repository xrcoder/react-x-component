import {Form, Input} from 'react-x-component';

<Form.Group>
    <Form.Name>密码输入框(带报错提示)：</Form.Name>
    <Input.Passwd
        placeholder="请输入1-20位的数字"
        value={this.state.password}
        reg={/^[0-9]{0,20}$/}
        maxLength={20}
        onChange={(res) => {
            this.setState({
                password: res
            });
        }}
    />
</Form.Group>