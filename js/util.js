// // import './data.js'

// function getRandomIntInclusive(min, max) {
//   if (min < max && max >= 0 && min >= 0) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//   return null;
// }


// // function getRandomArbitrary(min, max, num) {
// //   if (min < max && max >= 0 && min >= 0) {
// //     return Math.random().toFixed(num) * (max - min) + min;
// //   }
// //   return NaN;
// // }



// //address

// const lat1 = 35.65000;
// const lat2 = 35.70000;
// const lng1 = 139.70000;
// const lng2 = 139.80000;


// function getLat(lat1, lat2, digits = 1) {
//   const lower = Math.min(Math.abs(lat1), Math.abs(lat2));
//   const upper = Math.max(Math.abs(lat1), Math.abs(lat2));
//   const result = Math.random() * (upper - lower) + lower;
//   return result.toFixed(digits);
// }

// function getLng(lng1, lng2, digits = 1) {
//   const lower = Math.min(Math.abs(lng1), Math.abs(lng2));
//   const upper = Math.max(Math.abs(lng1), Math.abs(lng2));
//   const result = Math.random() * (upper - lower) + lower;
//   return result.toFixed(digits);
// }

// const locationLat = getLat;
// const locationLng = getLng;

// //guests
// function guests(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// };

// //location

// const a = 35.65000;
// const b = 35.70000;
// const c = 139.70000;
// const d = 139.80000;


// function getLat(a, b, digits = 1) {
//   const lower = Math.min(Math.abs(a), Math.abs(b));
//   const upper = Math.max(Math.abs(a), Math.abs(b));
//   const result = Math.random() * (upper - lower) + lower;
//   return result.toFixed(digits);
// }

// function getLng(c, d, digits = 1) {
//   const lower = Math.min(Math.abs(c), Math.abs(d));
//   const upper = Math.max(Math.abs(c), Math.abs(d));
//   const result = Math.random() * (upper - lower) + lower;
//   return result.toFixed(digits);
// }

// //author



// //price
// function price(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// };

// //rooms
// function rooms(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }


// //features
// const createArr = ([FEATURES], maxLength) => Array.from({
//     length: Math.min(FEATURES.length, 1 + Math.random() * maxLength | 0)
//   },
//   () => FEATURES.splice(Math.random() * FEATURES.length | 0, 1)[0]
// );

// //photos
// const createPhotos = ([PHOTOS], maxLength) => Array.from({
//     length: Math.min(PHOTOS.length, 1 + Math.random() * maxLength | 0)
//   },
//   () => PHOTOS.splice(Math.random() * PHOTOS.length | 0, 1)[0]
// );


// //offer
// const createOffer = () => {

//   const randomType = _.random(0, TYPE.length - 1);
//   const randomChekin = _.random(0, CHEKIN.length - 1);
//   const randomCheckout = _.random(0, CHECKOUT.length - 1);
//   const randomDescription = _.random(0, DESCRIPTION.length - 1);
//   return {
//     title: TITLE[randomTitle],
//     type: TYPE[randomType],
//     address: getLat() + '' + getLng(),
//     price: price(),
//     rooms: rooms(),
//     guests: guests(),
//     checkin: CHEKIN[randomChekin],
//     checkout: CHECKOUT[randomCheckout],
//     features: createArr(),
//     description: DESCRIPTION[randomDescription],
//     photos: createPhotos()
//   };
// };

// // export {getRandomIntInclusive, getRandomArbitrary, getLat, getLng, locationLat, locationLng, guests,
// // createAuthor, price, rooms, createArr,createPhotos, createOffer}