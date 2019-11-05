import { Radio } from 'react-x-component';

this.state = {
    selected: {
        value: 1,
        label: '实名档案'
    }
}

render() {
    return (
        <Radio.BtnGroup
            options={[{
                value: 1,
                label: '实名档案'
            }, {
                value: 2,
                label: '未实名档案'
            }]}
            value={this.state.selected}
            onChange={(res) => {
                this.setState({
                    selected: res
                })
            }}
        />
    )
}