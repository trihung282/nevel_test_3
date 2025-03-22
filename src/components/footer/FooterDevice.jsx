import React from 'react';
import {footerDevices} from "./footer.data";
import "./footer.css";
import useDevice from "../../hooks/device.hook";
import appleIcon from "../../assets/icons/icon_apple.svg";


const FooterDevice = (props) => {
    const isMobile = useDevice();
    return (
        <div className='footer-device'>
            {!isMobile && <div className='footer-device-sub-item d-flex mb-1'>
                <img src={appleIcon}/>
                <span>
                    Bluechip App for Mac OS
                </span>
            </div>}
            <div className='d-flex footer-device--item_wrapper'>
                {footerDevices.map((footerDevice) => (
                    <div className='p-1 mx-0 col-6'>
                        <div className='footer-device_item flex-center '>
                            <img src={footerDevice.icon} alt={footerDevice.name}/>
                            <div className='content_wrapper'>
                                <span>{footerDevice.name}</span>
                                {isMobile && (<>
                                        <br/>
                                        <p className='sub-content m-0'>{footerDevice.description}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FooterDevice;
