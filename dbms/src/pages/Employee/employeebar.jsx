import React from 'react';
import '../bar.scss';

export const EmployeeBar=({setOption})=>{
    const handleClick=(e,option)=>{
        e.preventDefault();
        setOption(option)
    }
    return(
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
       
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
        label:'Insert Employee',
        set:1
    },
    {
        label:'Update Employee',
        set:2
    },
    /* {
        label:'Delete',
        set:3
    }, */
    /* {
        label:'Search',
        set:4
    }, */
]