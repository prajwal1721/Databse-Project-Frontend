import React from 'react';
import {Link} from 'react-router-dom';
export const EmployeeBar=()=>{
    return(
        <div>
        <span>Employee</span>
            {
                Data.map((i)=>{
                    return <span><Link key={i.label} to={i.to}>{i.label}</Link></span>
                })  
            }
        </div>
    )
}

const Data=[
    {
        label:'Insert',
        to:'/insert'
    },
    {
        label:'Update',
        to:'/update'
    },
    {
        label:'Delete',
        to:'/delete'
    },
    {
        label:'View',
        to:'/view'
    },
]