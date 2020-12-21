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
        set:11
    },
    {
        label:'Delete Warehouse',
        set:12
    },
    {
        label:'Update Warehouse',
        set:13
    },
    {
        label:'Insert Storage',
        set:21
    },
    {
        label:'Delete Storage',
        set:22
    },
    {
        label:'Update Storage',
        set:23
    },
    {
        label:'Insert Vehicle',
        set:31
    },
    {
        label:'Delete Vehicle',
        set:32
    },
    {
        label:'Update Vehicle',
        set:33
    },
]