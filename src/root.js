import React, { useState } from 'react';
// import Outlet
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './nav.css'

const Root = () => {

    const [query, setQuery] = useState('');

    const navigate = useNavigate();

    const displaySearchResults = () => {
        navigate(`/search/${query}`)
    }

    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="logo">
                        <Link to={"/"}>
                        <i className='bx bxl-reddit icon'></i>                    </Link>
                        <span className="logo">Mini<span className='logoHighlight'>Reddit</span></span>
                    </div>

                    <div className="searchBar">
                        <input placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
                        <button className="SearchButton" onClick={displaySearchResults}><i className='bx bx-search'></i></button>
                    </div>
                    
                </div>
            </nav>   
            {/* Add an Outlet*/}
            <main>
                <Outlet/>
            </main>

        </>
    );
};

export default Root;