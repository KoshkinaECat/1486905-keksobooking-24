import './data.js';
import { PHOTOS } from './data.js';
import './util.js';
import {
  properties
} from './util.js';
// находим шаблон и делаем из него копию(фрагмент)
const card = document.querySelector('#card').content.cloneNode(true);

const property = properties[0];

// console.log('### title', property.title);

// const randomTitle = randomArrayElem;
// const card = document.querySelector('#card').content.cloneNode(true);
// const similarTitle = randomTitle().cloneNode(true);
// card.appendChild(similarTitle);

const createPropertyElement = (offer) => {
  //создаем ключ-значение для types
  const types = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
  };


  //меняем в нашем фрагменте заголовок
  card.querySelector('.popup__title').textContent = offer.title;

  //меняем адрес во фрагменте
  card.querySelector('.popup__text--address').textContent = offer.address;
  //В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями
  card.querySelector('.popup__type').textContent = types[offer.type];

  //Выведите количество гостей и комнат offer.rooms и offer.guests
  //в блок .popup__text--capacity строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  //Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида
  //Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  //В список .popup__features выведите все доступные удобства в объявлении.
  card.querySelector('.popup__features').textContent = offer.features;

  //В блок .popup__description выведите описание объекта недвижимости offer.description
  card.querySelector('.popup__description').textContent = offer.description;

  //Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
  card.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;

  //В блок .popup__photos выведите все фотографии из списка offer.photos.
  //Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
  // const similarPhoto = PHOTOS.content.cloneNode(true);
  const photosLength = offer.photos.length;
  for (var i=0; i<photosLength; i++){
    console.log(offer.photos[i]);
    const photoImg = card.querySelector('.popup__photo').cloneNode(true);
    photoImg.src = offer.photos[i];
    card.querySelector('.popup__photos').appendChild(photoImg);
    // card.querySelector('.popup__photo').src=offer.photos[i];
  }
  card.querySelector('[src=""].popup__photo').remove();
  // card.querySelector('.popup__photos').src = offer.photos;

  //меняем значение атрибута src у аватарки пользователя
  card.querySelector('.popup__avatar').src = offer.author.avatar;

  return card;
};

const map = document.querySelector('#map-canvas');

map.appendChild(createPropertyElement(property));

export {card};



