import React from 'react';
import LocationHome from '../components/LocationHome';
import "../styles/_home.scss";
const Home = () => {
    return (
        <div className="home">
            <div className="bloc_banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="LocationHome">
                <LocationHome />
            </div>
        </div>
    )
}

export default Home;