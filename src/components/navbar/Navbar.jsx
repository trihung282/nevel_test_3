import React from 'react';
import PropTypes from 'prop-types';
import navbarItems from "./navbar_items";
import SearchIcon from '@mui/icons-material/Search';
import useDevice from "../../hooks/device.hook";
import "./navbar.css";

const Navbar = ({isToggle, ...rest}) => {
    const isMobile = useDevice();
    /**
     *
     * @param {NavbarItem} item
     * @param {number} index
     * @return {Element}
     */
    const renderLink = (item, index) => {
        return <li className='navbar-item' key={index}>
            <a href={item.path}>{item.name}</a>
        </li>
    }

    const renderNavbarItems = (items) => {
        return items.map((item, idx) => renderLink(item, idx));
    }

    return (
        <div
            className={`navbar ${isMobile ? (isToggle ? 'navbar-slide-in d-inline' : "navbar-slide-out d-none") : ""}`}>
            <div className='navbar-search'>
                <button className='navbar-search__icon'>
                    <SearchIcon/>
                </button>
            </div>
            <ul className='navbar-list_item'>
                {renderNavbarItems(navbarItems)}
            </ul>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;
