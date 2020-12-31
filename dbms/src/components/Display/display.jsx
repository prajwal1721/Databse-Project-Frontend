import React from 'react';
import { JsonToTable } from "react-json-to-table";
import './display.scss';

export const Display=({Data,heading})=>{
    return (
        <div style={{margin: "40px"}}>
            <div style={{fontSize: "27px", padding: "5px", fontWeight: '200'}}>{heading}</div>
            {console.log(heading)}
            <JsonToTable json={Data} />
        </div>
    )
}