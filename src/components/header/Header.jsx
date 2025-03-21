import React, {useState} from 'react';
import {Button} from "@mui/material";
import Navbar from "../navbar/Navbar";
import AppLogo from "../logo/AppLogo";
import "./header.css";
import useDevice from "../../hooks/device.hook";


const Header = props => {
    const [toggle, setToggle] = useState(false);
    const handleClickMenu = () => {
        setToggle(!toggle);
    }
    const isMobile = useDevice();
    const size = isMobile ? {width: 32, height: 18} : {width: 53, height: 30};
    return (
        <header className='container header'>
            <div className='header-left'>
                <button className='header-menu' onClick={handleClickMenu}/>
                <AppLogo width={size.width} height={size.height}/>
                <Navbar isToggle={toggle}/>
            </div>
            <div className='header-right d-flex'>
                <button className='header-btn header-btn_login'>LOGIN</button>
                <button className='header-btn header-btn_register'>REGISTRATION</button>
            </div>
        </header>
    );
};

Header.propTypes = {};

export default Header;
