import React from 'react';
// import Outlet
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <Link to={"/"}>
                    <i className='bx bxl-reddit icon'></i>                    </Link>
                    <span className="logo">Mini<span className='logoHighlight'>Reddit</span></span>
                </div>
            </nav>   
            {/* Add an Outlet*/}
            <Outlet/>
        </>
    );
};

export default Root;