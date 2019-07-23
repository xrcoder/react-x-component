import React, {Fragment} from 'react';
import {Modal, Button} from 'react-x-component';


export default class extends React.Component {
    constructor() {
        super();
    }

    state = {
        num1: 123
    }


    render() {

        const {Header, Body, Footer} = Modal;
        const {confirm, cancel, data} = this.props;

        return (
            <Fragment>
                <Header {...this.props}>{'demo'}</Header>
                <Body>
                    <p>ceshidemo1</p>
                    <p>ceshidemo2</p>
                    <p>ceshidemo3</p>
                    <p>ceshidemo4</p>
                    <p>{data.name}</p>
                </Body>
                <Footer>
                    <Button.Box>
                        <Button onClick={cancel}>取消</Button>
                        <Button type='primary' onClick={confirm}>确认</Button>
                    </Button.Box>
                </Footer>
            </Fragment>
        )
    }
}
