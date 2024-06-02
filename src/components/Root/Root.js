import React from 'react';

import Navigation from '../Navigation/Navigation.js';
import Footer from '../Footer/Footer.js';
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <>
            <Navigation />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root