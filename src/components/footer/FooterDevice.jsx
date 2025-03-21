import React from 'react';
import {footerDevices} from "./footer.data";
import "./footer.css";

const FooterDevice = (props) => {
    return (
        <div className='footer-content footer-device row gx-3' style={props.style}>
            {footerDevices.map((footerDevice) => (
                <div className='footer-divice_item flex-center col-6'>
                    <img src={footerDevice.icon} alt={footerDevice.name} />
                    <div>
                        <b>{footerDevice.name}</b>
                        <br/>
                        <p className='sub-content m-0'>{footerDevice.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FooterDevice;
