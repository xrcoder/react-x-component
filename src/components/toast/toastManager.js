import React from 'react';
import ReactDOM from 'react-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import Notice from './notice';

class Notification extends React.Component {
    constructor() {
        super();
        this.transitionTime = 500;
        this.state = {
            notices: []
        };
        this.removeNotice = this.removeNotice.bind(this);
    }

    getNoticeKey() {
        const {notices} = this.state;
        return `notice-key-${new Date().getTime()}-${notices.length}`;
    }

    addNotice(notice) {
        const {notices} = this.state;
        notice.key = this.getNoticeKey();
        if (notices.every(item => item.key !== notice.key)) {
            if (notice.length > 0 && notices[notice.length - 1].type === 'loading') {
                notices.push(notice);
                setTimeout(() => {
                    this.setState({notices});
                }, this.transitionTime);
            } else {
                notices.push(notice);
                this.setState({notices});
            }
            if (notice.duration > 0) {
                setTimeout(() => {
                    this.removeNotice(notice.key);
                }, notice.duration);
            }
        }
        return () => {
            this.removeNotice(notice.key);
        };
    }

    removeNotice(key) {
        const {notices} = this.state;
        this.setState({
            notices: notices.filter(notice => {
                // 筛选
                if (notice.key === key) {
                    if (notice.onClose) {
                        setTimeout(notice.onClose, this.transitionTime);
                    }
                    return false;
                }
                return true;
            })
        });
    }

    render() {
        const {notices} = this.state;
        return (
            <TransitionGroup className={localStorage.getItem('direction')=='right'?'x-toast-notification-i18n':'x-toast-notification'}>
                {
                    notices.map((data, index) => {
                        return (
                            <CSSTransition
                                key={data.key}
                                classNames={"toast-notice"}
                                timeout={this.transitionTime}
                            >
                                <Notice type={data.type} msg={data.msg}/>
                            </CSSTransition>
                        );
                    })
                }
            </TransitionGroup>
        );
    }
}

function createNotification() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const ref = React.createRef();
    ReactDOM.render(<Notification ref={ref}/>, div);
    return {
        addNotice(notice) {
            return ref.current.addNotice(notice);
        },
        destroy() {
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    };
}

export default createNotification();