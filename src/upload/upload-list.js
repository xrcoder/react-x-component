import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

// status 0:loading 

const UploadList = ({ imgList, onDeleteItem }) => {

    let [_imgList, setImgList] = useState(imgList);
    let [styleType, setStyleType] = useState('');

    useEffect(() => {
        if (imgList.length >= 0) {
            setImgList(imgList)
        }
    },[imgList])

    let renderPreviewItem = (data, index) => {
        const { uid, imgData, status } = data;
        let img = new Image(),
            style = {};
            img.src = imgData;
            
        if(img.width > img.height){
            style.width = '100%';
            style.margin = 'auto 0';
        }else{
            style.height = '100%';
            style.margin = '0 auto';
        }
        return (
            <div className="x-upload-item-preview x-upload-box" key={`${uid}_${index}`}>
                {
                    status === 0 ?
                     <div className="x-upload-loading-box x-upload-box">
                        <div className="bg-img"></div>
                        {/* <div>拖拽或点击上传人像</div> */}
                        <div className="x-upload-loading">
                            <Icon name={'spinner'} className="x-upload-loading-icon"/>
                        </div>
                    </div> 
                    : <div className="x-upload-img-box">
                            <img src={imgData} style={style}/>
                            <div className="x-upload-img-opt">
                                <Icon name={'trash'} onClick={() => { onDeleteItem(index) }} />
                            </div>
                        </div>
                }
            </div>);
    }

    return (
        <div className="x-upload-list">
            {
                _imgList.map((item, index) => {
                    return renderPreviewItem(item, index);
                })
            }
        </div>
    )
}

export default UploadList;

UploadList.propTypes = {
    imgList: PropTypes.array,
    onDeleteItem: PropTypes.func,
    onEditItem: PropTypes.func
}

UploadList.defaultProps = {
    imgList: [],
    onDeleteItem: () => { },
    onEditItem: () => { }
}