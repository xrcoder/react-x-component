import { Radio } from 'react-x-component';

this.state = {
    selected: null
}

render() {
    return (
        <Radio 
            options={[{
                value: 1,
                label: '苹果',
                disabled: true
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