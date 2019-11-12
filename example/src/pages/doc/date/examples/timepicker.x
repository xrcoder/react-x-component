import { TimePicker } from 'react-x-component';

this.state = {
    value3: null
}

render() {
    return(
        <TimePicker 
            value={this.state.value3}
            placeholder={'请选择时间'}
            selectableRange="00:30:00 - 23:00:00"
            format={'HH:mm'}
            onChange={(time) => {
                this.setState({
                    value3: time
                })
            }}
        />
    )
}