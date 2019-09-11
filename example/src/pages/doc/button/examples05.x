import {Button, ButtonGroup} from 'react-x-component';

<Button.Box align={'left'}>
    <ButtonGroup>
        <Button type="primary" inverse={true} onClick={() => {
            console.log('按钮点击');
        }}>常态按钮</Button>
        <Button type="primary" onClick={() => {
            console.log('按钮点击');
        }}>常态按钮</Button>
        <Button type="primary" onClick={() => {
            console.log('按钮点击');
        }}>常态按钮</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary"><Icon name={'align-center'}/></Button>
        <Button type="primary"><Icon name={'align-justify'}/></Button>
        <Button type="primary"><Icon name={'align-left'}/></Button>
        <Button type="primary"><Icon name={'align-right'}/></Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button><Icon name={'align-center'}/></Button>
        <Button><Icon name={'align-justify'}/></Button>
        <Button><Icon name={'align-left'}/></Button>
        <Button><Icon name={'align-right'}/></Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="danger"><Icon name={'align-center'}/></Button>
        <Button type="danger"><Icon name={'align-justify'}/></Button>
        <Button type="danger"><Icon name={'align-left'}/></Button>
        <Button type="danger"><Icon name={'align-right'}/></Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="danger" inverse><Icon name={'align-center'}/></Button>
        <Button type="danger"><Icon name={'align-justify'}/></Button>
        <Button type="danger" inverse><Icon name={'align-left'}/></Button>
        <Button type="danger" inverse><Icon name={'align-right'}/></Button>
    </ButtonGroup>
</Button.Box>
