import { Checkbox } from 'react-x-component';


this.state = {
    isMark: false
}

render() {
    return (
        <Checkbox.Item
            label={'记住密码'}
            value={this.state.isMark}
            onChange={(e, res) => {
                this.setState({
                    isMark: res
                })
            }}
        />
    )
}