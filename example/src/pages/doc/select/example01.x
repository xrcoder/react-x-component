import {Select} from 'react-x-component';

class SingleSelecDemo extends React.Component {
    constructor() {
        this.state = {
            singleSelectOpts: [{ value: 0, label: '香蕉' }, { value: 1, label: '苹果' }, { value: 2, label: '葡萄' }],
            singleValue: null
        }
    }

    render() {
        return (
            <Select.Single
                value={this.state.singleValue}
                options={this.state.singleSelectOpts}
                placeholder={"请选择"}
                onChange={(value) => {
                    this.setState({
                        singleValue: value
                    });
                }} />
        )
    }
}


