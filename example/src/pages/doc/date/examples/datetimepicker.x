import { DatePicker } from 'react-x-component';

this.state = {
    value4: null
};

render() {
    return (
        <DatePicker 
            value={this.state.value4}
            isShowTime={true}
            placeholder={'请选择'}
            format={'yyyy-MM-DD HH:mm:ss'}
            onChange={(time) => {
                this.setState({
                    value4: time
                })
            }}
        />
    )
}