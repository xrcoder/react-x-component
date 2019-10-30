import {Form, Input} from 'react-x-component';

<Form.Group>
    <Form.Name>手机号输入框(带报警提示)：</Form.Name>
    <Input.Phone
        placeholder="请输入手机号"
        value={this.state.phone}
        maxLength={11}
        onChange={(res) => {
            this.setState({
                phone: res
            });
        }}
    />
</Form.Group>