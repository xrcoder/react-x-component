import {Form, Input} from 'react-x-component';


<Form.Group>
    <Form.Name>文本域：</Form.Name>
    <Input.Textarea onChange={(res) => {
        console.log(res);
    }}/>
</Form.Group>