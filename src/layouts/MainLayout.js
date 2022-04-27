import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/NavFoot/Footer';
import Navbar from '../components/NavFoot/Navbar';

const MainLayout = () => {
    return (
        <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;