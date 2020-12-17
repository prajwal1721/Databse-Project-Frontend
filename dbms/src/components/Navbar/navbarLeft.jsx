import React from 'react';
import {Link} from 'react-router-dom';
import './navbarLeft.scss';
import $ from 'jquery';

export const NavbarLeft=({data:{head=null,section},set,unset,hidden})=>{
    const toggleNav = (e) => {
        e.preventDefault();
        $(document).ready(function(){
            $('#navbar-left').toggleClass('navbar-left-hide navbar-left-show');
        });
        set(!hidden);
    }
    return(
        <div>
            { hidden ?
                <div>
                    <i onClick={toggleNav} className="hamburger fas fa-bars"></i>
                </div>
                :
                <div>
                    <i onClick={toggleNav} className="skew-cross fas fa-times"></i>
                    <nav id="navbar-left" className="navbar-left navbar-left-show navbar-left-hide">
                        <div className="unskew">
                            <div className="nav-content-container">
                                {/* {head ? <div className="navbar-content"> { head } </div> : null } */}
                                <div className="left-links">
                                    {section.map(item=>
                                    <div key={item.name} className="nav-list-parent">
                                        <div className={item.class}>{item.name.toUpperCase()}</div>
                                        <ul className="nav-list">
                                        {item.list.map(i=>
                                            <li onClick={()=>set(true)} key={i.label}><Link to={i.to} key={i.label}>{i.label}</Link></li>)}
                                        </ul>
                                    </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            }
        </div>
    )
}