import './data.js';
import { titles } from './data.js';
import './util.js';
import { randomArrayElem, properties } from './util.js';

const property = properties[0];

const createPropertyElement = (offer) => {

  const types = {
    'flat': 'Квартира',
    'bungalow': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
    'hotel': 'Отель',
  }

  // находим шаблон и делаем из него копию (фрагмент)
  const card = document.querySelector('#card').content.cloneNode(true);

  // меняем в нашем фрагменте заголовок
  const cardTitle = card.querySelector('.popup__title');
  cardTitle.textContent = offer.title;

  // меняем адрес во фрагементе
  card.querySelector('.popup__text--address').textContent = offer.address;

  // Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
  card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`

  // В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:

  card.querySelector('.popup__type').textContent = types[offer.type];


  //Замените значение атрибута src у аватарки пользователя .popup__avatar на значение поля author.avatar.
  card.querySelector('.popup__avatar').src = offer.author.avatar;

return card;

}



const map = document.querySelector('#map-canvas');

map.appendChild(createPropertyElement(property));
// map.appendChild(createPropertyElement(properties[2]));

// for (let offer of properties) {
//   console.log('#### offer: ', offer);

//   map.appendChild(createPropertyElement(offer));
// }
