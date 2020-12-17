import React from 'react';
import { NavbarLeft } from '../../components/Navbar/navbarLeft';
import { NavbarRight } from '../../components/Navbar/navbarRight';
import './navbar.scss';
import { dataLeft, dataRight } from './data';
import { useState } from 'react';

export const Navbar=()=>{

    const [leftHidden,setLeftHidden]=useState(true);
    const [rightHidden,setRightHidden]=useState(true);
    return(
        <nav className="navbar-parent">
            <div className="left-side-nav">
                
                    <NavbarLeft data={dataLeft} set={setLeftHidden} unset={setRightHidden} hidden={leftHidden}/>
                 
            </div>
            <div className="right-side-nav">
                    <NavbarRight data={dataRight} set={setRightHidden} unset={setLeftHidden} hidden={rightHidden}/>
                    
            </div>

         </nav>
        );
}