import React from 'react';
import "./footer.css";

const FooterHelpCenter = props => {
    return (
        <div className='footer-help_center d-flex flex-md-column justify-content-between align-items-center'>
            <div className='footer-help_center--title'>
                <span>Help Center</span>
                <p className='sub-content'>If you have any questions?</p>
            </div>
            <button className='footer-help_center--get_answer '>
                GET ANSWERS
            </button>
        </div>
    );
};

FooterHelpCenter.propTypes = {};

export default FooterHelpCenter;
