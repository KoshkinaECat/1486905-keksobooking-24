const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHEKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

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
  'домашний кинотеатр',
];

const PHOTOS = ['https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https: //assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const authorNumber = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

const titles = [
  'Уютное гнездышко',
  'Прекрасный отель',
  'Динамичное городское жилье',
  'Центр комфорта',
  'Живописный домик',
  'Историческое здание',
  'Двухвековой замок',
  'Волшебный дворец',
  'Пряничный домик',
  'Отель-галерея',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const unicRandomArrayElem = (arr) => {
  if (arr.length > 0) {
    const random = _.random(0, arr.length - 1);
    return arr.splice(random, 1)[0];
  }
  return 'пустой массив';
};

const randomArrayElem = (arr) =>
  arr[_.random(0, arr.length - 1)];


const latMin = 35.65000;
const latMax = 35.70000;
const lngMin = 139.70000;
const lngMax = 139.80000;

function getRandomArbitrary(min, max, num) {
  if (min < max && max >= 0 && min >= 0) {
    return +(_.random(min, max, true)).toFixed(num);
  }
  return NaN;
}

// const randomTitle = _.random(0, titles.length - 1);

const createProperty = () => {
  const location = {
    lat: getRandomArbitrary(latMin, latMax, 5),
    lng: getRandomArbitrary(lngMin, lngMax, 5),
  };

  const unicFeature = () =>
    unicRandomArrayElem(features);


  const unicPhotos = () =>
    unicRandomArrayElem(PHOTOS);

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
      }, function(){
        let features = [...FEATURES];
        return unicRandomArrayElem(features)
      }),
      description: randomArrayElem(DESCRIPTION),
      photos: Array.from({
        length: _.random(1, PHOTOS.length),
      }, function(){
        let photos = [...PHOTOS];
        return unicRandomArrayElem(photos)
      }),
    };

  };
  return property();
};
const properties = Array.from({
  length: 10,
}, createProperty);
console.log('### properties', properties)  ;

