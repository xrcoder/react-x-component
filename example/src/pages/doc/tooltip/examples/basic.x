import {Tooltip} from 'react-x-component';

<Tooltip 
    content={'提示内容'}
    direction={'top'}
    useStyle={{display: 'inline-block'}}
>
    <Button type="primary" inverse={true}>这个Tooltip显示在上方</Button>
</Tooltip>