import {Button} from 'react-x-component';

export default function () {
    return (
        <Button.Box align={'left'}>
            <Button inverse>默认</Button>
            <Button inverse type="primary">主要</Button>
            <Button inverse type="danger">危险</Button>
        </Button.Box>
    )
}
