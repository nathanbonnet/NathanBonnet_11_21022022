import React from 'react';
import "../styles/_rating.scss";
const Ratings = (star) => {
    let test = [];
    for (let i = 0; i < star.star; i++) {
        test.push(i)
    }
    console.log(star.star);
    let starMax = 5;
    let toto = starMax - star.star;
    let tata = [];
    for (let i = 0; i < toto; i++) {
        tata.push(i)
    }
    return (
        <div className="bloc-star">
           {test.map((star, index) => {
               index += 1;
                return (
                    <span className="star on">&#9733;</span>
                );
            })}
            {tata.map((star, index) => {
               index += 1;
                return (
                    <span className="star off">&#9733;</span>
                );
            })}
        </div>
    )
}

export default Ratings
{/* <img src={process.env.PUBLIC_URL + '/img/star-checked.png'} /> */}