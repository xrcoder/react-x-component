import { Switch } from 'react-x-component';

this.state = {
    status: true
}

render() {
    return() {
        <Switch 
            status={this.state.status} 
            disabled={true}
            onChange={(e, res) => {
                this.setState({
                    status: res
                })
            }}
        />
    }
}