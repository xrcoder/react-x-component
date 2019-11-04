import { Checkbox } from 'react-x-component';

this.state({
    selected: [1, 2]
})

render() {
    return (
        <Checkbox
            options={[{
                    value: 1,
                    label: '苹果'
                },{
                    value: 2,
                    label: '桃子'
                },{
                    value: 3,
                    label: '猕猴桃'
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
