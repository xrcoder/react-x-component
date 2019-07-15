import React, { useRef, useState, Fragment } from 'react';
import './index.scss';
import { Box, Row, Col, Button, Upload } from 'react-x-component';

export default () => {

    const [imgList, setImg] = useState([]);
    const [thirdImgList, setThirdImg] = useState([
        {
            uid: '-1',
            imgData: require('../../../assets/imgpreview_1.jpg'),
            name: 'img-01.jpg',
        }
    ]);

    return (
        <Fragment>
            <Box>
                <Box.Header>Upload单张</Box.Header>
                <Box.Body>
                    <Row>
                        <Col md={12}>
                            <Upload.Head
                                url="http://10.199.0.216:3000/api/upload"
                                onChange={(imgList) => {
                                    console.log('single',imgList)
                                }}
                            />
                        </Col>
                    </Row>
                </Box.Body>
            </Box>
            <Box>
                <Box.Header>Upload上传达到限制后，上传按钮消失</Box.Header>
                <Box.Body>
                    <Row>
                        <Col md={12}>
                            <Upload.Head
                                url="http://10.199.0.216:3000/api/upload"
                                maxLength={2}
                                imgList={thirdImgList}
                                onChange={(imgList) => {
                                    console.log('many',imgList)
                                }}
                            />
                        </Col>
                    </Row>
                </Box.Body>
            </Box>
        </Fragment>
    )
}