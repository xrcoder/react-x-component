import { Switch } from 'react-x-component';

this.state = {
    status: false
}

render() {
    return() {
        <Switch 
            status={this.state.status} 
            onChange={(e, res) => {
                this.setState({
                    status: res
                })
            }}
        />
    }
}