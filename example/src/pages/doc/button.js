import React, { Fragment } from 'react'
import Templete from './templete'
import {Button, Row, Col, Box, Icon, ButtonGroup, ButtonIcon, Input} from 'react-x-component'

export default ()=>{
    const ComContent=()=>{
        return (
            <div>content</div>
        )
    }
    const CodeContent=()=>{
        return (
            <div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
                <div>adsfdfdf</div>
            </div>
        )
    }
    return (
        <>
        <h3>Button</h3>
            {Templete(ComContent,CodeContent)} 
        </>
    )
}
