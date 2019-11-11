import { DateRangePicker } from 'react-x-component';

this.state = {
    value5: null
}

render() {
    return (
        <DateRangePicker
            value={this.state.value5}
            format={'yyyy-MM-DD HH:mm'}
            isShowTime={true}
            onChange={(date) => {
                this.setState({
                    value5: date
                })
            }}
            ref={e=>this.daterangepicker2 = e}
            shortcuts={[{
                text: '一周',
                onClick: ()=> {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
    
                    this.setState({value5: [start, end]})
                    this.daterangepicker2.togglePickerVisible()
                }
            }, {
                text: '一个月',
                onClick: ()=> {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
    
                    this.setState({value5: [start, end]})
                    this.daterangepicker2.togglePickerVisible()
                }
            }, {
                text: '三个月',
                onClick: ()=> {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    this.setState({value5: [start, end]})
                    this.daterangepicker2.togglePickerVisible()
                }
            }]}
        />
    )
}