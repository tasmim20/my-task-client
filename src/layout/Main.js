import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Common/Footer/Footer';
import Navber from '../components/Common/Navber/Navber';


const Main = () => {
    return (
        <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Main;