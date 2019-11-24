import React, { useState, useEffect } from 'react';
import AirportMap from './AirportMap'
import './Airport.css';


const AirportDetail = (props) => {
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        return isBookmarked(props.location.state.id) ? setBookmarked(true) : setBookmarked(false);
    }, [props.location.state.id]);

    const selectedAirport = props.location.state;
    if (!selectedAirport) {
        return <div>loading</div>;
    }

    const bookmark = ({ id }) => {
        const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (currentBookmarks) {
            const airportId = currentBookmarks.find(item => item === id);

            if (airportId === undefined) {
                localStorage.setItem('bookmarks', JSON.stringify([...currentBookmarks, id]));
                setBookmarked(true)
            } else {
                const filterBookmarked = currentBookmarks.filter(item => item !== id);
                localStorage.setItem('bookmarks', JSON.stringify(filterBookmarked));
                setBookmarked(false)
            }
        } else {
            localStorage.setItem('bookmarks', JSON.stringify([id]));
            setBookmarked(true)
        }
    }

    const isBookmarked = (id) => {
        const currentBookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        if (currentBookmarks) {
            return currentBookmarks.find(item => item === id) ? true : false;
        }
        return false;
    }

    return (
        <div className="airport-detail ui segment">
            <div className="ui segment">
                <strong>{selectedAirport.name}
                <button  style = {{position:"absolute", right:"5px", cursor:"pointer"}} onClick={() => bookmark(selectedAirport)}>
                    <i className={bookmarked ? "bookmark icon" : "bookmark outline icon"}></i>
                </button>
                </strong>
                
            </div>
            <div className="ui secondary segment">
                <div className="description">
                    <p>
                        <strong>IATA: </strong> {selectedAirport.iata}<br />
                        <strong>ICAO: </strong> {selectedAirport.icao}<br />
                        <strong>City:  </strong> {selectedAirport.city}<br />
                        <strong>Country: </strong> {selectedAirport.country}
                    </p>
                </div>
            </div>

            <AirportMap airportDetail = {props.location.state} />
        </div>
    );
}

export default AirportDetail;