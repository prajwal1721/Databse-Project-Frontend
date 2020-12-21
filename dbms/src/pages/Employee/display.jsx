import React from 'react';

export const Display=({Data})=>{
    return (
        <div>
        {
            Data.map((data)=>
            data.map((i)=>{
                return <div key={i.field}>
                        <span>{i.value}</span>
                    </div>
            }))
        }
        </div>
    )
}