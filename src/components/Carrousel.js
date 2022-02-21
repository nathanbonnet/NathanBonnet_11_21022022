import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from "react-slick";
import "../styles/_carrousel.scss";

const Carrousel = (logement) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <>
            <Slider {...settings}>
                {
                    logement.location.pictures.map( images => {
                        let number = images.substr(-5, 1);
                        return <div>
                            <h3>
                                <img className="carousel" src={ images } />
                                <p className="number">{number}/{logement.location.pictures.length}</p>
                            </h3>
                        </div>
                    })
                }
            </Slider>
        </>
    )
}
export default Carrousel
