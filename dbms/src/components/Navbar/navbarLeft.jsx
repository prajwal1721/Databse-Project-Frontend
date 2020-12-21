import React from 'react';
import {dataRight} from './data';
import {Link} from 'react-router-dom';
export const NavbarLeft=()=>{
    return (
        <div className='left'>
            {
                dataRight.map((item)=>{
                    return <Link key={item.label} to={item.to}>{item.label}</Link>
                })
            }
        </div>
    )
}