import React from 'react';
import {footerSocials} from "./footer.data";

const FooterSocial = ({...props}) => {
    return (
        <div className='footer-social w-100 d-flex flex-column justify-content-center'>
            <p className='footer-social_title text-center text-white'>
                Follow Us
            </p>
            <div className='footer-social_items'>
                {footerSocials.map((footerSocial, index) => (
                    <img key={index} src={footerSocial.icon} alt={footerSocial.name}/>
                ))}
            </div>
        </div>
    );
};

export default FooterSocial;
