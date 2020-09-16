import React ,{useContext}from 'react';
import {Button} from 'antd';
import {ColorContext,UPDATE_COLOR} from './color'
export default function buttons(){
    const {dispatch}=useContext(ColorContext)
    return (<div>
        <Button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'red'})}}> 红色</Button>
        <Button onClick={()=>{dispatch({type:UPDATE_COLOR,color:'yellow'})}}>黄色</Button>
    </div>)
}