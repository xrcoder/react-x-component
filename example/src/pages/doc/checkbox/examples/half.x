import { Checkbox } from 'react-x-component';


this.state = {
    halfValue: 'half'
}

render() {
    return (
        <Checkbox.Half
            label={'选择状态'}
            value={this.state.halfValue}
            onChange={(e, res) => {
                this.setState({
                    halfValue: res
                })
            }}
        />
    )
}