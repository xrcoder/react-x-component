import {Button, ButtonGroup} from 'react-x-component';

export default function () {
    return (
        <Button.Box align={'left'}>
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
        </Button.Box>
    )
}
