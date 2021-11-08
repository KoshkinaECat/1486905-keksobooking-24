import './popup.js';
import{card} from './popup.js';
//Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
const classPlus = document.querySelector('.ad-form').classList.add("ad-form--disabled");
//Все интерактивные элементы формы .ad-form должны быть заблокированы
//с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
const adForm = document.querySelector('.ad-form');
const classDisabled = adForm.setAttribute("disabled", "disabled");
//Форма с фильтрами .map__filters заблокирована так же,
//как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled.
const classPlusMap = document.querySelector('.map__filters').classList.add("map__filters--disabled");
const mapFilters = document.querySelector('.map__filters');
const classDisabledMap = mapFilters.setAttribute("disabled", "disabled");
// const classPlus = card.classList.add('ad-form--disabled');
// card.addEventListener(click, classPlus[true]);
// card.addEventListener('click', function(e){
    // classPlus
// });
document.querySelector('.ad-form', '.map-filters').classList.remove("ad-form--disabled", "map-filters--disabled");


