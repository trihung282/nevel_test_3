import React, {useState} from 'react';
import "./dropdown.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const CustomDropdown = ({title, items, renderChildren, ...props}) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='dropdown'>
            <button className='btn-dropdown' onClick={() => setToggle(!toggle)}>
                {title} <KeyboardArrowDownIcon className={`arrow ${toggle ? 'toggle' : 'hide'}`}/>
            </button>
            {/*<div className={`dropdown-menu-custom /!*${toggle ? 'slide-down' : 'slide-up'}*!/`}>*/}
            {/*    {items.map((item, index) =>*/}
            {/*        <li key={index} className='dropdown-item'>{renderChildren(item)} </li>*/}
            {/*    )}*/}
            {/*</div>*/}
        </div>
    );
};

export default CustomDropdown;
