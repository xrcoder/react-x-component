import {Select} from 'react-x-component';

class SingleSelecDemo extends React.Component {
    constructor() {
        this.state = {
            singleSelectOpts: [{ value: 0, label: '香蕉' }, { value: 1, label: '苹果' }, { value: 2, label: '葡萄' }],
            searchSelectValue: null
        }
    }

    render() {
        return (
            <Select.Search
                value={this.state.searchSelectValue}
                options={this.state.singleSelectOpts}
                onChange={(value) => {
                    this.setState({
                        searchSelectValue: value
                    });
                }} />
        )
    }
}


