import React from 'react';
import {DatePicker, DateRangePicker as DateRangePickerRc} from 'element-react';

class DateRangePicker extends React.Component {
    elInputTime1 = null;
    elInputTime2 = null;
    daterangepicker = null;
    
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        if (this.props.isShowTime) {
            this.elInputTime1 && this.elInputTime1.removeEventListener('keydown', this.stopDefaultEvents, false);
            this.elInputTime2 && this.elInputTime2.removeEventListener('keydown', this.stopDefaultEvents, false);
        }
    }

    stopDefaultEvents(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        const props = this.props;

        return (
            <DateRangePickerRc 
                {...props}
                shortcuts={
                    props.shortcuts || [{
                        text: '今日',
                        onClick: () => {
                            const end = new Date(new Date(new Date().toLocaleDateString()).getTime()+24*60*60*1000-1);
                            const start = new Date(end.getFullYear(), end.getMonth(), end.getDate());
                            this.setState({value: [start, end]});
                            this.daterangepicker.togglePickerVisible();
                            this.props.onChange && this.props.onChange([start, end]);
                        }
                    },
                    {
                        text: '本周',
                        onClick: () => {
                            const NowDate=new Date();
                            const WeekFirstDay=new Date(NowDate.getTime() - (NowDate.getDay() - 1) * 86400000);
                            const WeekLastDay=new Date((WeekFirstDay.getTime()/1000 + 6*86400)*1000);
                            const M = Number(WeekLastDay.getMonth())+1
                            const tmpTime = new Date(WeekLastDay.getFullYear()+"-"+M+"-"+WeekLastDay.getDate())
                            const end = new Date(tmpTime.getTime()+24*60*60*1000-1);
                            NowDate.setDate(NowDate.getDate() - NowDate.getDay() + 1);
                            const begin = NowDate.getFullYear() + "-" + (NowDate.getMonth() + 1) + "-" + NowDate.getDate() + " 00:00:00";
                            const start = new Date(begin);
                            start.setTime(start.getTime());

                            this.setState({value: [start, end]});
                            this.daterangepicker.togglePickerVisible();
                            this.props.onChange && this.props.onChange([start, end]);
                        }
                    },
                    {
                        text: '本月',
                        onClick: () => {
                            const NowDate=new Date();
                            const MonthNextFirstDay=new Date(NowDate.getFullYear(),NowDate.getMonth()+1,1);
                            const MonthLastDay=new Date(MonthNextFirstDay.getTime()-86400000);
                            const M = Number(MonthLastDay.getMonth())+1
                            const tmpDate = new Date(MonthLastDay.getFullYear()+"-"+M+"-"+MonthLastDay.getDate())
                            const end = new Date(tmpDate.getTime()+24*60*60*1000-1);
                            const start = new Date(end.getFullYear(), end.getMonth(), end.getDate());
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * (end.getDate() - 1));

                            this.setState({value: [start, end]});
                            this.daterangepicker.togglePickerVisible();
                            this.props.onChange && this.props.onChange([start, end]);
                        }
                    }]
                }
                ref={e => this.daterangepicker = e}
                onFocus={
                    (e) => {
                        props.onFocus && props.onFocus(e);
                        // 源码中时间选择器两个input中的一个keydown事件绑定的事件名字写错了...
                        // 导致js报错，并引起两个input在处理keydown时不相同
                        // 索性阻止了keydown事件
                        setTimeout(() => {
                            if (props.isShowTime) {
                                this.elInputTime1 = document.querySelectorAll('.el-date-range-picker input')[0];
                                this.elInputTime2 = document.querySelectorAll('.el-date-range-picker input')[2];

                                this.elInputTime1 && this.elInputTime1.addEventListener('keydown', this.stopDefaultEvents, false);
                                this.elInputTime2 && this.elInputTime2.addEventListener('keydown', this.stopDefaultEvents, false);
                            }
                        }, 500);
                    }
                }
            />
        )
    }
}

export default {
    DatePicker, DateRangePicker
}
