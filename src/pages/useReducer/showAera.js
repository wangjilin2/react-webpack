import React ,{useContext}from 'react';
import {ColorContext} from './color';
export default function ShowArea(){
    const {color}=useContext(ColorContext);
    return (<div style={{color:color}}>颜色</div>)
}