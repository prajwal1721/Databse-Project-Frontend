import React from 'react';

export const WarehouseBar=({setOption})=>{
    const handleClick=(e,option)=>{
        e.preventDefault();
        setOption(option)
    }
    return(
        <div>
        <span>Warehouse</span>
            {
                Data.map((i)=>{
                    return <span onClick={(e)=>handleClick(e,i.set)} key={i.label} to={i.to}>{i.label}</span>
                })  
            }
        </div>
    )
}

const Data=[
    {
        label:'Insert Warehouse',
        set:1
    },
    {
        label:'Insert Vehicle',
        set:2
    },
    {
        label:'Insert Storage',
        set:3
    },
]