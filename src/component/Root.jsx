import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Headernav from './Headernav';

const Root = () => {
    return (
        <div>
            <Headernav></Headernav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;