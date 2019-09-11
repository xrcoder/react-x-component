import {Button} from 'react-x-component';

export default function () {
    return (
        <Button.Box align={'left'}>
            <Button disabled>默认</Button>
            <Button disabled type="primary">主要</Button>
            <Button disabled type="danger">危险</Button>
        </Button.Box>
    )
}
