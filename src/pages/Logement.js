import React, {useEffect} from 'react';
import Carrousel from '../components/Carrousel';
import Tags from '../components/Tags';
import Ratings from '../components/Ratings';
import Avatar from '../components/Avatar';
import Dropdowns from '../components/Dropdowns';
import NotFound from './NotFound';
import {useParams } from "react-router-dom";
import Data from '../data/db.json';
import '../styles/_logement.scss'

const Logement = () => {
    const id = useParams();
    let logementId = false;
    for(let i = 0; i < Data.logement.length; i++) {
        if(Data.logement[i].id == id.id) {
            logementId = true
            return (
                <div className="Logement">
                    <Carrousel location={Data.logement[i]}/>
                    <div className="content_logement">
                        <div className="content_presentation">
                            <div className="presentation">
                                <h1 className="title">{Data.logement[i].title}</h1>
                                <h2>{Data.logement[i].location}</h2>
                                <Tags tag={Data.logement[i].tags}/>
                            </div>
                        </div>
                        <div className="content_info">
                            <Ratings star={Data.logement[i].rating}/>
                            <Avatar avatar={Data.logement[i].host}/>
                        </div>
                    </div>
                    <div className="content_detail">
                        <Dropdowns title="Description" content={Data.logement[i].description}/>
                        <Dropdowns title="Équipements" content={Data.logement[i].equipments}/>
                    </div>
                </div>
            )
        }
    }
    if(!logementId) {
        return (
            <NotFound />
        )
    }
}
export default Logement;