import {Form, Input} from 'react-x-component';

<Form.Group errorMsg={'这里展示错误信息'}>
    <Form.Name>警告：</Form.Name>
    <Input 
        placeholder={'请输入姓名'} 
        onChange={(value) => {
            console.log(value);
        }}
    />
</Form.Group>