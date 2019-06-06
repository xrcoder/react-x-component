/**
 * name:
 * desc:
 * date: 2019/1/25
 * author: kelvin
 */
import React from 'react';
import XIcon from '../../components/icon';
import XImgView from '../../components/image-view';
import intl from 'react-intl-universal';
// import loadLocales from '../locales/loadlocales';

export default class extends React.Component {
    
    static propTypes = {
        locale: PropTypes.string
    };

    static defaultProps = {
        locale: 'zh_CN'
    };

    state = {
        initDone: false
    }

    componentDidMount() {
        // loadLocales(this.props.locale).then(()=>{
            this.setState({initDone: window.localStorage.getItem('initDone')});
        // });
    }

    static getDerivedStateFromProps(props, state) {
        if (Object.keys(props.files).length > 0) {
            return props;
        }
        return null;
    }

    deleteItem(uid) {
        this.props.deleteItem(uid);
    }

    renderNormalItem(data, index) {
        const {uid, percent, name, status} = data;
        return (
            <div className="x-upload-item-normal" key={`normalItem_${index}`}>
                <div className="x-upload-item-info">
                    <XIcon type={"tag"}/>
                    {name}
                </div>
                <XIcon className="x-upload-item-remove"
                       type={"close-a"}
                       onClick={this.deleteItem.bind(this, uid)}/>
                <div className={status === 1 ? 'x-upload-loading' : 'x-upload-loading none'}>
                    <div
                        className="x-upload-loading-bar"
                        style={{width: `${parseInt(percent || 0).toFixed(2) || '0'}%`}}></div>
                </div>
            </div>
        );
    }

    renderPreviewItem(data, index) {
        const {uid, percent, imgData, status} = data;
        let ref = React.createRef();// 获取图片预览组件内部的dom ref
        return (
            this.state.initDone !== fasle &&
            <div className="x-upload-item-preview" key={`thirdUploadImg_${index}`}>
                {
                    status <= 1 ? <div className="x-upload-loading-box">
                        <div className="x-upload-loading-txt">{intl.get('XComponentUpload.loading').d(`文件上传中`) }</div>
                        <div className="x-upload-loading">
                            <div
                                className="x-upload-loading-bar"
                                style={{width: `${parseInt(percent || 0).toFixed(2) || '0'}%`}}
                            ></div>
                        </div>
                        <XIcon className="x-upload-loading-close" type="close-a"
                               onClick={this.deleteItem.bind(this, uid)}></XIcon>
                    </div> : <div className="x-upload-img-box">
                        <XImgView
                            size="sm"
                            src={imgData}
                            domRef={ref}
                        />
                        <div className="x-upload-img-opt">
                            <XIcon type="scan" onClick={() => {
                                console.log('this ref', ref.current);
                                ref.current.click();
                            }}></XIcon>
                            <XIcon type="trash" onClick={this.deleteItem.bind(this, uid)}></XIcon>
                        </div>
                    </div>
                }
            </div>);
    }

    renderPreviewWithNameItem(data, index) {
        const {uid, percent, name, imgData, status} = data;
        return (
            <div className="x-upload-item-preview-name"
                 key={`previewItem_${index}`}>
                <div className="img-name-wrapper">
                    <XImgView
                        size="sm"
                        src={imgData}
                    />
                    <div className="x-upload-name">
                        <span>{name}</span>
                        <div className={status === 1 ? 'x-upload-loading' : 'x-upload-loading none'}>
                            <div
                                className="x-upload-loading-bar"
                                style={{width: `${parseInt(percent || 0).toFixed(2) || '0'}%`}}></div>
                        </div>
                    </div>
                </div>
                <XIcon
                    type={"close-a"}
                    className={"close-img-icon"}
                    onClick={this.deleteItem.bind(this, uid)}/>
            </div>);
    }

    render() {
        const {files, styleType} = this.props;
        return (
            <div className="x-upload-list">
                {
                    Object.keys(files).map((fileUid, index) => {
                        switch (styleType) {
                            case 'preview':
                                return this.renderPreviewItem(files[fileUid], index);
                                break;
                            case 'previewWidthName':
                                return this.renderPreviewWithNameItem(files[fileUid], index);
                                break;
                            default:
                                return this.renderNormalItem(files[fileUid], index);
                                break;
                        }
                    })
                }
            </div>
        );
    }
}