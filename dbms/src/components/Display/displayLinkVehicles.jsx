import React from 'react';
import {useHistory} from 'react-router-dom';
import {VehicleHead} from './baseDate';
export const DisplayVehicles=({Data,match,})=>{
    const history=useHistory();
    var t={...VehicleHead};
    return (
        <div>
        {console.log(match)}
        {
            Data.map((data)=>{
            t=data;
            return <span onClick={()=>history.push(`${match.path}/vehicle/:${t.id}`)}>
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


