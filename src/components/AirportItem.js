import React from 'react';
import './Airport.css';
import { Link } from 'react-router-dom'

const AirportItem = ({ airport, onAirportSelect }) => {
    return (
        <div className="airport-item ui segment">
            <Link to={{ pathname: "/airportDetail", state: airport }} className="airport-item item">
                <div className="header"><strong>{airport.name}</strong></div>
                <div className="description">
                    IATA: {airport.iata}<br />
                    Country: {airport.country}
                </div>
            </Link>
        </div>

    );
}
export default AirportItem;