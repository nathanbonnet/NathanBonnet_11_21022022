import React from 'react';
const Footer = () => {
    return (
        <div className="footer">
            <img src={process.env.PUBLIC_URL + '/img/logoWhite.png'} alt="logo" className=""/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
