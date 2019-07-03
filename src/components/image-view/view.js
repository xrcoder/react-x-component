/**
 * name:
 * desc:
 * date: 2018/12/29
 * author: kelvin
 */
import React from 'react';
import ReactDOM from 'react-dom';
import XIcon from '../icon';

export default (src) => {
    let oModal = document.createElement('div');
    document.body.appendChild(oModal);

    return new Promise((resolve, reject) => {
        class Modal extends React.Component {
            constructor() {
                super();
                this.state = {
                    isLoading: true,
                    loadingStr: 'loading...',
                    boxW: 100,
                    boxH: 100
                };
            }

            componentDidMount() {
                this.imgToCanvas();
            }

            imgToCanvas() {
                // 图片加载&图片到canvas的转换
                let canvas = this.refs.imgCanvas;
                let image = new Image();
                image.src = src;
                image.onload = () => {
                    let width = image.width;
                    let height = image.height;
                    // 根据屏幕高度设置最适应的宽度
                    let boxH = window.innerHeight * 0.7;
                    let boxW = (boxH / height) * width;
                    this.setState({
                        boxW: boxW,
                        boxH: boxH,
                        isLoading: false
                    });
                    canvas.width = width * 1.5;
                    canvas.height = height * 1.5;
                    canvas.getContext('2d').drawImage(image, 0, 0, width * 1.5, height * 1.5);
                };
                image.onerror = () => {
                    this.setState({
                        isLoading: true,
                        loadingStr: 'error'
                    });
                };
            }

            handleBgClick(e) {
                let target = e.target;
                let cls = target.className;
                if (cls === 'x-imgview-box'||cls === 'x-imgview-box-i18n') {
                    this.close();
                }
            }

            close() {
                ReactDOM.unmountComponentAtNode(oModal);
                document.body.removeChild(oModal)
            }

            render() {
                const {boxW, boxH, isLoading, loadingStr} = this.state;
                let style = {width: `${boxW}px`, height: `${boxH}px`};
                return (
                    <div className={localStorage.getItem('direction')=='right'?'x-imgview-box-i18n':'x-imgview-box'} ref="imgviewBox" onClick={this.handleBgClick.bind(this)}>
                        <div className="imgview-box" ref="imgview" style={style}>
                            <canvas id="imgCanvas" ref="imgCanvas" className="img-canvas" style={style}></canvas>
                            {
                                isLoading ? <div className="x-imgview-loading">{loadingStr}</div> :
                                    <div className="x-imgview-close">
                                        <XIcon type="close-a" onClick={this.close.bind(this)}/>
                                    </div>
                            }
                        </div>
                        <div className="imgview-tools"></div>
                    </div>
                );
            }
        }

        ReactDOM.render(<Modal/>, oModal);
    });
}