import React from 'react';
// import Outlet
import {Outlet} from 'react-router-dom'

const Root = () => {
    return (
        <>
            {/* Add an Outlet*/}
            <Outlet/>
        </>
    );
};

export default Root;