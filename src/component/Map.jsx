/**
googlemap表示コンポーネント
**/
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapWithAMarker = withGoogleMap(props =>(
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.position}
    center={props.position}
  >
  <Marker {...props.marker} />
  </GoogleMap>
));

const Map = ({ lat, lng }) => (
  <MapWithAMarker
    containerElement={(<div />)}
    mapElement={(<div className='map' />)}
    position ={ { lat , lng }}
    marker ={{ position : { lat , lng } }}
  />
);

Map.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};



export default Map;
