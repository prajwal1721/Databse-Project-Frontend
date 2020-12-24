import React from 'react';

export const Display=({Data})=>{
    return (
        <div>
        {
            Object.keys(Data[0]).map((t)=>
                    <span>{t}</span>
                )
        }
        {
            Data.map((data)=>
                Object.values(data).map((t)=>
                    <span>{t}</span>
                )
            )
        }
        </div>
    )
}