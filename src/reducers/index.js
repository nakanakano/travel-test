import { combineReducers } from 'redux';

const place = (state ='tokyo', action) => {
  switch (action.type) {
     case 'CHANGE_PLACE':
      return action.place;
    default:
      return state;
  }
  return state;
};
const gecodeResult = (
  state = {
    address: '',
    location:{ lat: 34.397,lng: 150.644},
  },
  action,
) => {
  switch (action.type) {
     case 'GEOCODE_FETHCED':
      return {
        address: action.address,
        location:action.location,
      };
      case 'CHANGE_ERROR_MESSAGE':
      return {
        address: action.message,
        location: { lat:0 , lng: 0},
      };
    default:
      return state;
  }
  return state;
};
const hotels = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_HOTELS':
      return action.hotels;
    default:
      return state;
  }
};

const sortKey = (state = 'price', action) => {
  switch (action.type) {
    case 'CHANGE_SORT_KEY':
      return action.sortKey;
    default:
      return state;
  }
};
export default combineReducers({ place, gecodeResult, hotels, sortKey });
