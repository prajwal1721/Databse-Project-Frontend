import React from 'react';

export const EmployeeBar=({setOption})=>{
    const handleClick=(e,option)=>{
        e.preventDefault();
        setOption(option)
    }
    return(
        <div>
        <span>Employee: </span>
            {
                Data.map((i)=>{
                    return <span onClick={(e)=>handleClick(e,i.set)} key={i.label} to={i.to} style={{padding: "10px"}}>{i.label}</span>
                })  
            }
        </div>
    )
}

const Data=[
    {
        label:'Insert',
        set:1
    },
    {
        label:'Update',
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