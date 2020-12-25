import React from 'react';
import { JsonToTable } from "react-json-to-table";

export const Display=({Data,heading})=>{
    return (
        <div style={{margin: "40px"}}>
            <div style={{fontSize: "20px", padding: "10px"}}>{heading}</div>
            {console.log(heading)}
            <JsonToTable json={Data} />
        </div>
    )
}