/**
楽天apiから情報取得するコンポーネント
**/

import geolib from 'geolib';
import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '1094964414876052295';

export const searchHotelBy = (location) =>{
  console.log(location);
const params = {
  applicationId: RAKUTEN_APP_ID,
  datumType: 1,
  latitude:location.lat,
  longitude:location.lng,
};
return Rakuten.Travel.simpleHotelSearch(params)
  .then((result) => {
    return result.data.hotels.map((hotel) => {

      const basicInfo = hotel.hotel[0].hotelBasicInfo;
      const price = basicInfo.hotelMinCharge;
      const distance = geolib.getDistance(
        { latitude: location.lat, longitude: location.lng},
        { latitude: basicInfo.latitude, longitude: basicInfo.longitude},
      );
      return {
        id:basicInfo.hotelNo,
        name:basicInfo.hotelName,
        url:basicInfo.hotelInformationUrl,
        thumbUrl: basicInfo.hotelThumbnailUrl,
        price: basicInfo.hotelMinCharge,
        distance,

      };
    });
  });
};
