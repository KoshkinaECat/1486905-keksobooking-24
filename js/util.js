import './data.js';
import {
  TYPE,
  CHEKIN,
  CHECKOUT,
  DESCRIPTION,
  PHOTOS,
  authorNumber,
  titles,
  FEATURES
}
  from './data.js';

function getRandomArbitrary(min, max, num) {
  if (min < max && max >= 0 && min >= 0) {
    return +(_.random(min, max, true)).toFixed(num);
  }
  return NaN;
}

const latMin = 35.65000;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;

const createProperty = () => {
  const location = {
    lat: getRandomArbitrary(latMin, latMax, 5),
    lng: getRandomArbitrary(lngMin, lngMax, 5),
  };

  const unicRandomArrayElem = (arr) => {
    if (arr.length > 0) {
      const random = _.random(0, arr.length - 1);
      return arr.splice(random, 1)[0];
    }
    return 'пустой массив';
  };

  const randomArrayElem = (arr) =>
    arr[_.random(0, arr.length - 1)];

  const property = () => {
    return {
      avatar: `img/avatars/user${unicRandomArrayElem(authorNumber)}.png`,
      title: randomArrayElem(titles),
      address: `${location.lat}, ${location.lng}`,
      price: _.random(15000, 9990000),
      type: randomArrayElem(TYPE),
      rooms: _.random(1, 9),
      guests: _.random(1, 20),
      checkin: randomArrayElem(CHEKIN),
      checkout: randomArrayElem(CHECKOUT),
      features: Array.from({
        length: _.random(1, FEATURES.length),
      }, function () {
        let features = [...FEATURES];
        return unicRandomArrayElem(features);
      }),
      description: randomArrayElem(DESCRIPTION),
      photos: Array.from({
        length: _.random(1, PHOTOS.length),
      }, function () {
        let photos = [...PHOTOS];
        return unicRandomArrayElem(photos);
      }),
    };

  };
  return property();
};
const properties = Array.from({
  length: 10,
}, createProperty);
console.log('### properties', properties);


export {
  createProperty, getRandomArbitrary
};
