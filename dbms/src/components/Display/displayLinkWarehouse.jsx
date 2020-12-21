import React from 'react';
import {useHistory} from 'react-router-dom';
import {WarehouseHead} from './baseDate';
export const Display=({Data,match})=>{
    const history=useHistory();
    var t={...WarehouseHead};
    return (
        <div>
        {console.log(match)}
        {
            Data.map((data)=>{
            t=data;
            return <span onClick={()=>history.push(`${match.path}/warehouse/${t.id}`)}>
            {data.map((i)=>{
                return <div key={i.field}>
                        <span>{i.value}</span>
                    </div>
            })}
            </span>})
            
        }
        </div>
    )
}


