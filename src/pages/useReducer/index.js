import React ,{useReducer} from 'react';
import ShowArea from './showAera';
import Buttons from './buttons';
import {Color} from './color';
export default function Index(){
    //const {}
    return(
        <div>
            <Color>
            <ShowArea/>
            <Buttons/>
            </Color>           
        </div>
    )
}