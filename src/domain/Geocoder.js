import axios from 'axios';
const GEOCODE_ENDPOINT = 'http://maps.googleapis.com/maps/api/geocode/json';

export const geocode = (place) =>
  axios
  .get(GEOCODE_ENDPOINT, { params: { address: place} })
  .then((result) =>{
    const status = result.data.status;
    if(typeof result === 'undefined'){
      return { status };
    }
    const resultData = result.data.results[0];
    const address = resultData.formatted_address;
    const location = resultData.geometry.location;
    return {status, address, location};
  })
;
export const reverseGeocode = () => null;
