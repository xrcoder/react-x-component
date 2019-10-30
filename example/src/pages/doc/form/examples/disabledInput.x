import {Form, Input} from 'react-x-component';

<Form.Group>
    <Form.Name>禁用态的输入框：</Form.Name>
    <Input
        disabled={true}
        value={'aaa'}
        onChange={(value) => {
            this.setState({
                demo: value
            });
        }}/>
</Form.Group>