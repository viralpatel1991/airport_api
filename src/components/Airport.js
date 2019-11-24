import React from 'react';
import SearchBar from './SearchBar';
import AirportList from './AirportList';
import airport from '../apis/airport';

class Airport extends React.Component {

    state = { airports: [], selectedAirport: [], errorMessage: '' };

    onTermSubmit = async (term) => {

        try {
            const airportsDetail = await airport.get(`/search/${term}`);

            this.setState({
                airports: airportsDetail.data
            });
        } catch (err) {
            this.setState({
                errorMessage: err
            });

        }
    }

    onAirportSelect = (airport) => {
        this.setState({ selectedAirport: airport });
    }

    AirportsRender() {
        if (this.state.airports.length !== 0 && this.state.airports !== undefined) {
            return (
                <div className="ui row">
                    <div className="sixteen wide column">
                        <AirportList onAirportSelect={this.onAirportSelect} airports={this.state.airports} />
                    </div>
                </div>
            );
        } else {
            if (this.state.errorMessage) {
                return (<div className="ui row">
                    <div className="sixteen wide column">
                        <span>No airport with this search query could be found.</span>
                    </div>
                </div>);
            }
        }
        return '';
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    {this.AirportsRender()}
                </div>
            </div>

        );
    }
}

export default Airport;