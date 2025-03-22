import React from 'react';
import Dropdown from "../dropdown/Dropdown";
import {footerAbouts, footerGames, footerLegalInformations, footerSocials} from "./footer.data";
import "./footer.css";
import FooterSocial from "./FooterSocial";
import FooterHelpCenter from "./FooterHelpCenter";
import FooterDevice from "./FooterDevice";
import useDevice from "../../hooks/device.hook";


const Footer = props => {

    const isMobile = useDevice();
    let elementOrders = {
        "games": 1,
        "about": 2,
        "information": 3,
        "social": 4,
        "helpCenter": 5,
        "device": 6
    }

    if (!isMobile) {
        elementOrders = {
            "helpCenter": 1,
            "social": 2,
            "games": 3,
            "about": 4,
            "information": 5,
            "device": 6
        }
    }

    const renderLabelDropdown = (item) => (<p className='sub-content'>{item}</p>)

    const renderDropdown = (title, items, order) => {
        console.log(title, order);
        if (isMobile) {
            return (
                <div className='footer-content' style={{order: order}}>
                    <Dropdown title={title} items={items} renderChildren={renderLabelDropdown}/>
                </div>
            )
        }

        return (
            <div className='footer-content' style={{order: order}}>
                <b>{title}</b>
                {items.map(item => renderLabelDropdown(item))}
            </div>
        )
    }

    return (
        <div className='container footer'>
            {renderDropdown('Games', footerGames, elementOrders["games"])}
            {renderDropdown('About', footerAbouts, elementOrders["about"])}
            {renderDropdown('Legal Information', footerLegalInformations, elementOrders["information"])}
            {isMobile && <div className='footer-content' style={{order: elementOrders["social"]}}>
                <FooterSocial style={{order: elementOrders["social"]}}/>
            </div>}
            <div className='footer-content' style={{order: elementOrders["helpCenter"]}}>
                <FooterHelpCenter/>

                {!isMobile && <FooterSocial style={{order: elementOrders["social"]}}/>}
            </div>
            <div className='footer-content' style={{order: elementOrders["device"]}}>
                <FooterDevice style={{order: elementOrders["device"]}}/>
            </div>

        </div>
    );
};


export default Footer;
