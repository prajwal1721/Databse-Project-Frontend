import React from 'react';
import '../bar.scss';

export const WarehouseBar=({setOption})=>{
    const handleClick=(e,option)=>{
        e.preventDefault();
        setOption(option)
    }
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>

            {
                Data.map((i)=>{
                    return <span onClick={(e)=>handleClick(e,i.set)}  key={i.label} to={i.to} style={{padding: "10px", margin: "0 10px"}}>{i.label}</span>
                })  
            }
        </div>
    )
}

const Data=[
    {
        label:'Insert Warehouse',
        set:11
    },
    /* {
        label:'Delete Warehouse',
        set:12
    }, */
    {
        label:'Update Warehouse',
        set:13
    },
    {
        label:'Insert Vehicle',
        set:31
    },
    /* {
        label:'Delete Vehicle',
        set:32
    }, */
    {
        label:'Update Vehicle',
        set:33
    },
]