import React from 'react';
import "./category.css";
import dataCategories from "./data.category";

const LayoutCategory = props => {
    return (
        <div className='category d-flex justify-content-between'>
            {dataCategories.map((data, index) =>
                <button className={`category-item ${data.active ? 'active' : ""}`} key={index}>
                    <img src={data.icon} alt={data.name}/>
                    <span>{data.name}</span>
                </button>
            )}
        </div>
    );
};

LayoutCategory.propTypes = {};

export default LayoutCategory;