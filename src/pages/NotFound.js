import React from 'react';
import { NavLink} from 'react-router-dom';
import "../styles/_notFound.scss";

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p className="message">Oups ! La page que vous demandez n'existe pas.</p>
            <div className="bloc_lien">
                <NavLink to='/' className="lien">Retourner sur la page d'acceuil</NavLink>
            </div>
        </div>
    )
}

export default NotFound;