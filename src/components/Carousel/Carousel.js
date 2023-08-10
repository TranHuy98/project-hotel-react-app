import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='banner'>
            <Slider {...settings}>
                <div className="banner-item banner-item1">
                    <div className="title banner-word">
                        <p>Come and Relax</p>
                    </div>
                    <div className="description banner-word">
                        <p>a paradise for sense, vacation for souls</p>
                    </div>
                </div>
                <div className="banner-item banner-item2">
                    <div className="title banner-word">
                        <p>Celebrate your Love</p>
                    </div>
                    <div className="description banner-word">
                        <p>arrange the wedding to remember forever</p>
                    </div>
                </div>
                <div className="banner-item banner-item3">
                    <div className="title banner-word">
                        <p>Feast for your Taste</p>
                    </div>
                    <div className="description banner-word">
                        <p>enjoy our perfect homemade dishes and BBQ</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;