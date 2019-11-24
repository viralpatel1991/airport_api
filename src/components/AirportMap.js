import React from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class AirportMap extends React.Component {
  
  constructor(props){
    super(props);
    this.state = { 
      center: {
        lat: this.props.airportDetail.latitude,
        lng: this.props.airportDetail.longitude      },
      zoom: 11
    };
  }

  
  
 
  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAygmMOwMevFCcXpdelKD4SwAw_UCgBO4Q' }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.props.airportDetail.latitude}
            lng={this.props.airportDetail.longitude}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default AirportMap;