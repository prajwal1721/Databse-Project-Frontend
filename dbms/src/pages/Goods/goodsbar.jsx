import React from 'react';

export const GoodsBar=({setOption})=>{
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
        label:'Insert Goods',
        set:1
    },
    {
        label:'Update Goods',
        set:2
    },
    {
        label:'Delete Goods',
        set:3
    },
]