/**
サーチページ全体コンポーネント
**/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';

import GeocodeResult from './GeocodeResult';
import Map from './Map';
import  HotelTable from './HotelTable';

import SearchForm from '../containers/SearchForm';


import axios from 'axios';


class SearchPage extends Component {

  getPlaceParam() {
    const params = queryString.parse(this.props.location.search);
    const place = params.place;
    if (place && place.length > 0) {
      return place;
    }
    return null;
  }

  render() {
    return (
      <div className="search-page">
        <h1>ホテル検索</h1>
        <SearchForm />
        <Map lat={this.props.gecodeResult.location.lat} lng={this.props.gecodeResult.location.lng} />
        <GeocodeResult
         address={this.props.gecodeResult.address}
         lat={this.props.gecodeResult.location.lat}
         lng={this.props.gecodeResult.location.lng}
        />
        <section className="hotelArea">
        <h2>hotel search result</h2>
        <HotelTable  />
       </section>

      </div>
    );
  }
}
SearchPage.propTypes ={
  history: PropTypes.shape({
    push:PropTypes.func
  }).isRequired,

}
const mapStateToProps = state => ({
  gecodeResult: state.gecodeResult,
});

export default connect(mapStateToProps)(SearchPage);
