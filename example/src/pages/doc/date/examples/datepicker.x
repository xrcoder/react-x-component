import { DatePicker } from 'react-x-component';

this.state = {
    value1: null
}

render() {
    return(
        <DatePicker 
            value={this.state.value1}
            placeholder="请选择日期"
            onChange={(date) => {
                console.log(date);
                this.setState({
                    value1: date
                })
            }}
            disabledDate={(date) => {
                return date.getTime() < Date.now() - 8.64e7;    //8.64e7 一天时间的毫秒数
            }}
        />
    )
}