import {Form, Input, Select} from 'react-x-component';

<Form.Group>
    <Form.Name>带类型单选的输入框</Form.Name>
    <Input.Group>
        <Select.Single
            value={this.state.singleValue}
            options={stateOptions}
            onChange={(value) => {
                this.setState({
                    singleValue: value
                });
            }}/>
        <Input
            value={this.state.demo}
            onChange={(res) => {
                this.setState({
                    demo: res
                });
            }}/>
    </Input.Group>
</Form.Group>