import React from 'react';
import AirportItem from './AirportItem';

const AirportList = ({ airports, onAirportSelect }) => {

    const RenderedList = airports.map((airport) => {
        return <AirportItem key={airport.id} onAirportSelect = {onAirportSelect} airport={airport} />;
    });

    return (
        <div className="ui segment">
            {RenderedList}
        </div>
    );
};

export default AirportList;