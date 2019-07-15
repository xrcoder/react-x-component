import React from 'react';
import { Select, Box, Row, Col } from 'react-x-component';

export default class extends React.Component {

    state={
        options:[{value:1,label:'1a'},{value:2,label:'2a'},{value:3,label:'3a'},{value:4,label:'4a'},{value:5,label:'5a'}],
        selectedValue:2
    }

    render() {
        let list=[
            {value:1,label:'1a'},
            {value:2,label:'2a', isDisabled: true},
            {value:3,label:'3a'},
            {value:4,label:'4a'},
            {value:5,label:'5a'},
            {value:6,label:'6a'},
            {value:7,label:'7a'},
            {value:8,label:'8a'},
            {value:9,label:'9a'}
        ];
        let list2=[
            {value:1,label:'1a'},
            {value:2,label:'2a', isDisabled: true},
            {value:3,label:'3a'},
            {value:4,label:'4a'},
            {value:5,label:'5a'},
            {value:6,label:'6a'},
            {value:7,label:'7a'},
            {value:8,label:'8a'},
            {value:9,label:'9a'}
        ]
        let selectedValue = 2;
        let selectedValueList=[1,2,3,4,5,6,7,8];
        
        return (          
            <Row>
                <Col lg={6} md={6}>
                    <Box>
                        <Box.Header>多选</Box.Header>
                        <Box.Body>
                            <Select 
                                // selectedValueList={selectedValueList}
                                options={list}
                                mode="multiple"
                                onMultiShow={(item) => {
                                    console.log(item)
                                }}
                                onChange={(selected)=>{
                                    console.log(selected)
                                }} />
                        </Box.Body>
                    </Box>
                </Col>
                <Col lg={6} md={6}>
                    <Box>
                        <Box.Header>单选</Box.Header>
                        <Box.Body>
                            <Select 
                                placeholder="测试placerholder"
                                selectedValue={selectedValue}
                                options={list2}
                                onChange={(selected)=>{
                                    console.log(selected)
                                }} />
                        </Box.Body>
                    </Box>
                </Col>
            </Row>
        )
    }
}
