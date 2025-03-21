import React from 'react';
import logo from "../../assets/img_logo.svg";
import {PATH} from "../../constants/app.constants";

const AppLogo = ({width = 40, height = 18}) => {
    return (<a href={PATH.HOME} style={{width: width, height: height}}>
            <div className='m-100 h-100'>
                <img src={logo} className='m-auto w-100 h-100 align-top'/>
            </div>
        </a>
    );
};

export default AppLogo;
