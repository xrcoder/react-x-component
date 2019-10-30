import {Form, Input} from 'react-x-component';

<Form.Group>
    <Form.Name>基本输入框：</Form.Name>
    <Input
        value={this.state.demo}
        onChange={(value) => {
            this.setState({
                demo: value
            });
        }}/>
</Form.Group>