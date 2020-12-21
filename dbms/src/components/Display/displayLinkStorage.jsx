import React from 'react';
import {useHistory} from 'react-router-dom';
import {StorageHead} from './baseDate';
export const DisplayVehicles=({Data,match,})=>{
    const history=useHistory();
    var t={...StorageHead};
    return (
        <div>
        {console.log(match)}
        {
            Data.map((data)=>{
            t=data;
            return <span onClick={()=>history.push(`${match.path}/storage/${t.id}`)}>
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


