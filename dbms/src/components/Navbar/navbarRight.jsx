import React from 'react';
import {dataRight} from './data';
import {Link} from 'react-router-dom';
export const NavbarRight=()=>{
    return (
        <div className='right'>
            {console.log(dataRight)}
            {
                dataRight.map((item)=>{
                    return <Link key={item.label} to={item.to}>{item.label}</Link>
                })
            }
        </div>
    )
}