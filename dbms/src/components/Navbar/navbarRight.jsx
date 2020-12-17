import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import './navbarRight.scss';

export const NavbarRight=({data:{head=null,list},set,unset,hidden})=>{

    const showNavbarR = (e)=>{
        e.preventDefault();

        $(document).ready(function(){
            $('#navbar-right').removeClass('navbar-right-hide');
        })
        set(!hidden);
        unset(true);
    }

    const hideNavbarR = (e)=>{
        e.preventDefault();

        $(document).ready(function(){
            $("#navbar-right").addClass('navbar-right-hide');

        })
        set(true);
    }
    return(
        <div>
            { hidden ?
                <div onClick={showNavbarR} className="hamburger-right fas fa-user-circle">open</div>
                :
                <nav id="navbar-right" className="navbar-right navbar-right-show navbar-right-hide">
                    <div className="unskew-right">
                        <i onClick={hideNavbarR} className="cross-right fas fa-times"></i>
                        { head ? <div className="navbar-content"> { head } </div> : null }
                        <div className="right-links">
                            <div className="nav-list-parent">
                                <ul className="nav-list">
                                    {list.map(i=>    
                                    <li key={i.label} onClick={()=>set(true)}>
                                        <Link to={i.to} >{i.label} <i class="fal fa-portrait"></i></Link>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            }
        </div>
    )
}