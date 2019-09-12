import {Button} from 'react-x-component';

export default function () {
    return (
        <Button.Box align={'left'}>
            <Button>默认</Button>
            <Button type="primary">主要</Button>
            <Button type="danger">危险</Button>
        </Button.Box>
    )
}
