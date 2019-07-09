import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// import './index.scss';


class Header extends React.Component {
    render() {
        return (
            <div className={classnames("x-toggle-header", this.props.className)}
                 style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className={classnames("x-toggle-body", this.props.className)}
                 style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

class Toggle extends React.Component {
    static Header = Header;
    static Body = Body;

    render() {
        return (
            <div className="x-toggle-wrapper">
                {this.props.children}
            </div>
        );
    }
};

export default Toggle;


// const XToggle = (props, children) => {
//
//     const [isOpen, setIsOpen] = useState(false)
//     const toggleEl = useRef(null)
//
//     useEffect(() => {
//         document.addEventListener('click', handleDocClick, false)
//         return function cleanup() {
//             document.removeEventListener('click', handleDocClick, false)
//         }
//     }, isOpen)
//
//     useEffect(() => {
//         if (props.trigger === 'hover') {
//             document.addEventListener('mouseover', handleDocTrigger, false)
//             return function cleanup() {
//                 document.addEventListener('mouseover', handleDocTrigger, false)
//             }
//         }
//     }, isOpen)
//
//     const handleDocClick = (e) => {
//         let top = toggleEl.current.children[0]
//
//         if (top.contains(e.target)) {
//             setIsOpen(!isOpen)
//             if (!isOpen) {
//                 // toggle关闭的回掉函数
//                 props.onClose()
//             }
//         } else {
//             // 点击toggle以外的区域，给出一个toggle关闭的事件回掉
//             setIsOpen(false)
//             props.onClose()
//         }
//     }
//
//     const handleDocTrigger = (e) => {
//
//         if (!(toggleEl.current && toggleEl.current.children.length > 0)) return
//
//         let top = toggleEl.current && toggleEl.current.children.length > 0 && toggleEl.current.children[0],
//             box = toggleEl.current && toggleEl.current.children.length > 0 && toggleEl.current.children[1]
//
//         if (top.contains(e.target) || box.contains(e.target)) {
//             setIsOpen(!isOpen)
//             if (!isOpen) {
//                 // toggle关闭的回掉函数
//                 props.onClose()
//             }
//         } else {
//             // 点击toggle以外的区域，给出一个toggle关闭的事件回掉
//             setIsOpen(false)
//             props.onClose()
//         }
//     }
//
//     return (
//         <div ref={toggleEl} className={`x-toggle${isOpen ? ' open' : ''}`}>
//             <div className={`x-toggle-top`}>
//                 {props.children}
//             </div>
//             <div className={`x-toggle-box ${props.placement}`}>
//                 {props.overlay}
//             </div>
//         </div>
//     )
// }
//
// export default XToggle
//
// XToggle.propTypes = {
//     className: PropTypes.string,
//     onClose: PropTypes.func,
//     placement: PropTypes.string
// }
//
// XToggle.defaultProps = {
//     className: '',
//     placement: 'bottomLeft',
//     onClose: () => {
//     }
// }