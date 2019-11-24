import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Airport from './Airport';
import AirportDetail from './AirportDetail';
import Bookmark from './Bookmark';
import Header from "./Header";

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
            <Header />
                <div>
                    <Route path="/" exact component={Airport} />
                    <Route path="/airportDetail" component={AirportDetail} />
                    <Route path="/bookmarks" component={Bookmark} />
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;