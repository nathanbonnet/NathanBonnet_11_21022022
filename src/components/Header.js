import React from 'react';
import { NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="logo" className="logo"/>
            <div className="menu">
                <div>
                    <NavLink className="nav" to="/">
                        Accueil
                    </NavLink>
                
                    <NavLink className="nav" to="a-propos">
                        À propos
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header
