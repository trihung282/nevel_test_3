import React, {useState} from 'react';
import BaseBanner from "./BaseBanner";
import dataBanners from "./banner.data";
import {Carousel} from "react-bootstrap";
import "./banner.css";

const LayoutBanner = props => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setSelectedIndex(selectedIndex);
    };

    const slidersBanners = dataBanners.map((data, index) =>
        <Carousel.Item className={`flex center w-100 ${selectedIndex === index ? "opacity-100" : "opacity-50"}`}>
            <BaseBanner dataBanner={data} index={index}/>
        </Carousel.Item>);

    return (
        <div className='app-banner'>
            <Carousel
                indicators={false}
                controls={false}
                pause={false}
                slide={true}
                interval={3000}
                touch={true}
                onSelect={handleSelect}
                itemClass='col-12 col-md-8 flex-center'
            >
                {slidersBanners}
            </Carousel>
        </div>
    );
};

LayoutBanner.propTypes = {};

export default LayoutBanner;