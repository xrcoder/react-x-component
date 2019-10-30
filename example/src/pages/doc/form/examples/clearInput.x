import {Form, Input} from 'react-x-component';

<Form.Group className="form-doc">
    <Form.Name>带清空按钮的输入框：</Form.Name>
    <Input.Clear
        value={this.state.demo}
        onClear={(e) => {
            console.log('clear');
        }}
        onChange={(res) => {
            this.setState({
                demo: res
            });
        }}
    />
</Form.Group>