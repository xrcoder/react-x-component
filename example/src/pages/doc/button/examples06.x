import {Button, ButtonIcon} from 'react-x-component';

export default function () {
    return (
        <Button.Box align={'left'}>
            <ButtonIcon icon={'plus'} type="primary">加号</ButtonIcon>
            <ButtonIcon icon={'user'} type="primary">用户</ButtonIcon>
        </Button.Box>
    )
}
