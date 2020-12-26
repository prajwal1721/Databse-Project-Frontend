import React from 'react';
import '../bar.scss';

export const GoodsBar=({setOption})=>{
    const handleClick=(e,option)=>{
        e.preventDefault();
        setOption(option)
    }
    return(
        <div style={{display: "flex"}}>
        
            {
                Data.map((i)=>{
                    return <span onClick={(e)=>handleClick(e,i.set)} key={i.label} to={i.to} style={{padding: "10px", margin: "0 10px"}}>{i.label}</span>
                })  
            }
        </div>
    )
}

const Data=[
    {
        label:'Insert Logistics',
        set:11
    },
    {
        label:'Update Logistics',
        set:12
    },
    {
        label:'Insert Consumer',
        set:21
    },
    {
        label:'Update Consumer',
        set:22
    },
    {
        label:'Insert Goods',
        set:31
    },
    {
        label:'Update Goods',
        set:32
    },
    {
        label:'Insert Category',
        set:41
    },
    {
        label:'Update Category',
        set:42
    },
    {
        label:'Insert Supplier',
        set:51
    },
    {
        label:'Update Supplier',
        set:52
    },
    /* {
        label:'Delete Goods',
        set:3
    }, */
]