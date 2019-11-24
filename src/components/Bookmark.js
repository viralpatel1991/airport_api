import React from 'react';
import AirportList from './AirportList';
import airport from '../apis/airport';

class Bookmark extends React.Component {

    state = { airports: [], selectedAirport: [] };

    componentWillMount() {
        this.onTermSubmit();
    }

    onTermSubmit = async () => {

        const bookmarkedList = JSON.parse(localStorage.getItem('bookmarks'));
        if (bookmarkedList) {
            const bookmarkedAirportList = await this.onBookmarkSubmit(bookmarkedList);

            bookmarkedAirportList.map(item => {
                item.then(result => {
                    if(bookmarkedAirportList.length -1) {
                        this.setState({
                            airports: result
                        })
                    } 
                })
            })
        }
    }

     onBookmarkSubmit = async (bookmarkedList) => {
        const list = [];
        const result = await bookmarkedList.map(async (bookmark) => {
            const response = await airport.get(`/${bookmark}`);
            await list.push(response.data);
            return list;
        });
        return result;
    }


    AirportsRender() {
        if (this.state.airports.length !== 0 && this.state.airports !== undefined) {
            return (
                <div className="ui row">
                    <div className="sixteen wide column">
                        <AirportList airports={this.state.airports} />
                    </div>
                </div>
            );
        }
        return '';
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui grid">
                    {this.AirportsRender()}
                </div>
            </div>

        );
    }
}

export default Bookmark;