import React from 'react';
import {dataRight} from './data';
import {Link} from 'react-router-dom';
import './navbarLeft.scss';
export const NavbarLeft=()=>{
    return (
        <div className='left' >
            <Link class="heading"> Warehouse Managment</Link>
            {
                dataRight.map((item)=>{
                    return <Link key={item.label} to={item.to}>{item.label}</Link>
                })
            }
        </div>
    )
}