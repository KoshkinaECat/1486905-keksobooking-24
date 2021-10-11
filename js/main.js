
//первая функция
function getRandomIntInclusive(min, max) {
  if (min<max && max>=0 && min>=0){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return null;
}
getRandomIntInclusive(1,1);

//вторая функция
function getRandomArbitrary(min, max, num) {
  if (min < max && max >= 0 && min >= 0){
    return Math.random().toFixed(num) * (max - min) + min;
  }
  return NaN;
}

getRandomArbitrary(1,2);

// 4.9. Больше деталей


// let address = function getRandomPositiveInteger(a, b){
//   const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
//   const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// }

//address

const lat1 = 35.65000;
const lat2 = 35.70000;
const lng1 = 139.70000;
const lng2 = 139.80000;


function getLat(lat1, lat2, digits = 1) {
  const lower = Math.min(Math.abs(lat1), Math.abs(lat2));
  const upper = Math.max(Math.abs(lat1), Math.abs(lat2));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

function getLng(lng1, lng2, digits = 1) {
  const lower = Math.min(Math.abs(lng1), Math.abs(lng2));
  const upper = Math.max(Math.abs(lng1), Math.abs(lng2));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const locationLat = getLat;
const locationLng = getLng;
const ADDRESS = locationLat + locationLng;


//guests
function guests (min,max){
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};



//location

const a = 35.65000;
const b = 35.70000;
const c = 139.70000;
const d = 139.80000;


function getLat(a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
  }

  function getLng(c, d, digits = 1) {
    const lower = Math.min(Math.abs(c), Math.abs(d));
    const upper = Math.max(Math.abs(c), Math.abs(d));
    const result = Math.random() * (upper - lower) + lower;
    return result.toFixed(digits);
  }

//вывод author

const AUTHOR = [
  'img/avatars/user{{01}}.png',
  'img/avatars/user{{02}}.png',
  'img/avatars/user{{03}}.png',
  'img/avatars/user{{04}}.png',
  'img/avatars/user{{05}}.png',
  'img/avatars/user{{06}}.png',
  'img/avatars/user{{07}}.png',
  'img/avatars/user{{08}}.png',
  'img/avatars/user{{09}}.png',
  'img/avatars/user{{10}}.png'
];

 const createAuthor = () => {
  const randomAuthorIndex = _.random(0, AUTHOR.length - 1);
  return {
     author: AUTHOR [randomAuthorIndex]
 };
 };

// console.log( createAuthor()
// );


// const random = Math.floor(Math.random() * AUTHOR.length);
// console.log(random, AUTHOR[random]);

//offer

const TITLE = [
  'Уютное гнездышко',
  'Прекрасный отель',
  'Динамичное городское жилье',
  'Центр комфорта',
  'Живописный домик',
  'Историческое здание',
  'Двухвековой замок',
  'Волшебный дворец',
  'Пряничный домик',
  'Отель-галерея'
]

// TYPE

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
]

//price
function price(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

//rooms
function rooms(min, max){
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//guests
function guests(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
//chekin
const CHEKIN = [
  '12:00',
  '13:00',
  '14:00'
]

//chekout
const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
]

//features
let FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const createArr = ([FEATURES], maxLength) => Array.from({
    length: Math.min(FEATURES.length, 1 + Math.random() * maxLength | 0)
  },
  () => FEATURES.splice(Math.random() * FEATURES.length | 0, 1)[0]
);

//description

const DESCRIPTION = [
  'два стола, два стула, машина времени',
  'роскошная уютная обстановка в восточном стиле',
  'двухярусная кровать, джакузи',
  'комната для четверых гостей со всеми удобствами',
  'кальян, икс-бокс и мини-бар',
  'бильярд+дартс',
  'детская игровая комната+бассейн с шариками',
  'выручай-комната',
  'кровать размера кинг-сайз',
  'домашний кинотеатр'
]

//photos

let PHOTOS = ['https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
]

const createPhotos = ([PHOTOS], maxLength) => Array.from({
    length: Math.min(PHOTOS.length, 1 + Math.random() * maxLength | 0)
  },
  () => PHOTOS.splice(Math.random() * PHOTOS.length | 0, 1)[0]
);

const createOffer = () => {
  const randomTitle = _.random(0, TITLE.length - 1);
  const randomType = _.random(0, TYPE.length - 1);
  const randomChekin = _.random(0, CHEKIN.length - 1);
  const randomCheckout = _.random(0, CHECKOUT.length - 1);
  const randomDescription = _.random(0, DESCRIPTION.length - 1);
  return {
    title: TITLE[randomTitle],
    type: TYPE [randomType],
    address: getLat() + '' + getLng(),
    price: price(),
    rooms: rooms(),
    guests: guests(),
    checkin: CHEKIN[randomChekin],
    checkout: CHECKOUT[randomCheckout],
    features: createArr(),
    description: DESCRIPTION[randomDescription],
    photos: createPhotos()
};
};
