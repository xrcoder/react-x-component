import {Form, Input, Icon} from 'react-x-component';

<Form.Group>
    <Input.Search 
        clear 
        onEnter={(res) => {
            console.log('点击回车的回调函数');
        }}
        onChange={(res) => {
            console.log('值改变的回调函数');
        }}
        onSearch={(res) => {
            console.log('点击搜索的回调函数');
        }}
    >
        <Icon name={'search'}/>
    </Input.Search>
</Form.Group>