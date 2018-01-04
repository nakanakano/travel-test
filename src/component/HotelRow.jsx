/**
ホテル情報表示コンポーネント
**/
import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = ({ hotel }) => (
  <tr>
    <td><img src={hotel.thumbUrl} alt={hotel.name} /></td>
    <td><a href={hotel.url} target="_blank">{hotel.name}</a></td>
    <td>{hotel.price ? `${hotel.price}円`: 'no space'}</td>
    <td>{hotel.distance}</td>
  </tr>
);

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    thumbUrl: PropTypes.string,
    price: PropTypes.number,
    distance: PropTypes.number,
  }).isRequired,
};

export default HotelRow;
