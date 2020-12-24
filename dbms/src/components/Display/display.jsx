import React from 'react';

export const Display=({Data})=>{
    return (
        <div>
            {console.log(Data)}
            {console.log('Data')}
        {
            Data.length>0?
                Object.keys(Data[0]).map((t)=>
                <span key={t}>{t}</span>):<></>
        } 
        {
            Data.length>0?
            Data.map((data)=>
                Object.values(data).map((t)=>
                    <span key={t}>{t}</span>
                )
            ):<></>
        }
        </div>
    )
}