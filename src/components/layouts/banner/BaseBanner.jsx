import React from 'react';

const BannerTag = ({children, color}) => {
    return (<button className='rounded-1 text-white' style={{backgroundColor: color}}>
        {children}
    </button>)
}

/**
 *
 * @param {DataBanner} dataBanner
 * @param {number} index
 * @param props
 * @returns {Element}
 * @constructor
 */
const BaseBanner = ({dataBanner, index, ...props}) => {

    return (
        <div className='d-flex col-12 col-md-8 flex-md-column'>
            <div style={{backgroundImage: `linear-gradient(${dataBanner.bgStartColor}, ${dataBanner.bgEndColor})`}}>
                <div className='d-flex flex-column col-12 col-md-6'>
                    {dataBanner.tagTitle &&
                        <BannerTag children={dataBanner.tagTitle} color={dataBanner.tagColor}/>}
                    <h1>{dataBanner.description}</h1>
                    <button className='text-white'
                            style={{backgroundColor: dataBanner.buttonColor}}> {dataBanner.description}</button>
                    <p>{dataBanner.subDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default BaseBanner;