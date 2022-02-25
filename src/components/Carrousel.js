import React from 'react';
import "../styles/_carrousel.scss";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faChevronLeft, faChevronRight);

const Carrousel = (logement) => {
    let index = 0;
    const show_image = (i) => {
        index += i;

        let images = document.getElementsByClassName("image")
      
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add("none");
            images[i].classList.remove("block");
        }

        if (index > images.length - 1) {
            index = 0;
        }

        if (index < 0) {
            index = images.length - 1;
        }

        images[index].classList.add("block");
        images[index].classList.remove("none");
    }

    setTimeout(() => show_image(index), 10);

    return (
        <div className="content-carousel">
            {logement.location.pictures.map(image => {
                let number = image.substr(-5, 1);
                return (
                    <div key={number} className="image">
                        <img src={image}/>
                        <p className="number">{number}/{logement.location.pictures.length}</p>
                    </div>
                )
            })}
            <div id="prev" onClick={() => show_image(-1)}><FontAwesomeIcon icon="fa-solid fa-chevron-left" /></div>
            <div id="next" onClick={() => show_image(1)}><FontAwesomeIcon icon="fa-solid fa-chevron-right" /></div>
        </div>
    )
}
export default Carrousel