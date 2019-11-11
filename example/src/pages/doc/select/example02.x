import {Select} from 'react-x-component';

class SingleSelecDemo extends React.Component {
    constructor() {
        this.state = {
            multiSelectOpts: [{ value: 0, label: 'apple' }, { value: 1, label: 'banana' }, { value: 2, label: 'grape' }],
            multiValue: null,
        }
    }

    render() {
        return (
            <Select.Multi
                options={this.state.multiSelectOpts}
                value={this.state.multiValue}
                placeholder={"多选请选择"}
                onChange={(value) => {
                    this.setState({
                        multiValue: value
                    })
                }}
            />
        )
    }
}


