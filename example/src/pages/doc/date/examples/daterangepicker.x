import { DateRangePicker } from 'react-x-component';

this.state = {
    value2: null
}

render() {
    return(
        <DateRangePicker 
            value={this.state.value2}
            onChange={(date) => {
                this.setState({
                    value2: date
                })
            }}
        />
    )
}