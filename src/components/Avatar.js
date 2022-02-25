import React from 'react';
import "../styles/_avatar.scss";
const Avatar = (host) => {
    let name = host.avatar.name.split(' ');
    
    return (
        <div className="bloc-host">
            <div className="name">
                <p className="firstName">{name[0]}</p>
                <p className="lastName">{name[1]}</p>
            </div>
            <img src={host.avatar.picture} alt="logo" className="avatar"/>
        </div>
    )
}

export default Avatar
