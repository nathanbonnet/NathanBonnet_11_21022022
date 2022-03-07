import React from 'react';
import Data from '../data/db.json'
import { NavLink} from 'react-router-dom';
import "../styles/_locationHome.scss";

const LocationHome = () => {
    return (
        Data.logement.map(location => {
            return (
                <div className="bloc" key={location.id}>
                    <NavLink to={"a-propos/"+ location.id}>
                        <img src={location.cover} alt={location.title}/>
                        <div>
                            <p>{location.title}</p>
                        </div>
                    </NavLink>
                </div>
            )
        })
    )
    
}

export default LocationHome
