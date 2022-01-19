import React from 'react';
import './heroSlide.scss';
const HeroSlide = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">

                <div className="carousel-item active" data-bs-interval="6000">
                    <img src="https://media.boohoo.com/i/boohooamplience/Valentines_Desktop_Second_SECONDARY" className="imgDesktop  w-100 " alt="..." />
                    <img src="https://media.boohoo.com/i/boohooamplience/220110_Vday_Mobile_Second" className="imgMobile  w-100" alt="..." />

                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://media.boohoo.com/i/boohooamplience/UK_220110_SplashSECONDARY" className="imgDesktop  w-100" alt="..." />
                    <img src="https://media.boohoo.com/i/boohooamplience/UK_220110_Mobile_Second" className=" imgMobile  w-100" alt="..." />
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default HeroSlide;
