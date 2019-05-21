import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Modal = (C, opt) => {

    const CONTAINER = document.querySelector('body');

    let _Modal = document.createElement('div');
    let _opt = {
        backDrop: false,
        size: 'md',
        className: '',
        data: null
    };

    Object.assign(_opt, opt);

    CONTAINER.appendChild(_Modal);

    return new Promise((resolve, reject) => {
        class Modal extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    className: ''
                };
                this.timer = null;
            }

            componentDidMount() {
                this.timer = window.setTimeout(() => {
                    this.setState({
                        className: 'x-modal-fade'
                    });
                }, 50);
            }

            confirm () {
                this.close();
                resolve('sucess');
            }

            cancel () {
                this.close();
                reject('cancel');
            }

            close () {
                ReactDOM.unmountComponentAtNode(_Modal);
                CONTAINER.removeChild(_Modal);
                clearTimeout(this.timer);
                this.timer = null;
            }

            render () {
                const { className } = this.state;
                const { data, size, backDrop } = _opt;
                return (
                    <div className={classnames('x-modal', _opt.className, className)}>
                        <div className="x-modal-bg" onClick={() => {
                            backDrop && this.cancel();
                        }}></div>
                        <div className={`x-modal-content x-modal-${size}`}>
                            <C confirm={this.confirm.bind(this)} cancel={this.cancel.bind(this)} data={_opt.data} />
                        </div>
                    </div>
                )
            }



        }

        return ReactDOM.createPortal(
            ReactDOM.render(<Modal />, _Modal),
            _Modal,
          )
        
    });
}

export default Modal;

Modal.propTypes = {
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    ConfirmType: PropTypes.oneOf(['primary', 'default', 'warning']),
    CancelType: PropTypes.oneOf(['primary', 'default', 'warning'])
};

Modal.defaultProps = {
    confirmText: '确定',   //确认按钮文案
    cancelText: '取消',   //取消按钮文案
    size: 'md',    //底部操作按钮大小
    ConfirmType: 'primary', //确认框类型
    CancelType: 'default', //取消按钮类型
};
