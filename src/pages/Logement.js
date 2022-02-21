import React from 'react';
import Carrousel from '../components/Carrousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import Data from '../data/db.json';
import '../styles/_logement.scss'

const Logement = () => {
    const id = useParams();

    for(let i = 0; i < Data.logement.length; i++) {
        if(Data.logement[i].id == id.id) {
            console.log(Data.logement[i])
            return (
                <div className="Logement">
                    <Carrousel location={Data.logement[i]}/>
                    <h1>{Data.logement[i].title}</h1>
                </div>
            )
        }
    }
}

export default Logement;