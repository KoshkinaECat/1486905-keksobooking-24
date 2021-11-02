import './data.js';
import { titles } from './data.js';
import './util.js';
import {randomArrayElem} from './util.js';


const randomTitle = randomArrayElem;
const card = document.querySelector('#card')
.content
.querySelector('.popup_title');
const similarTitle = randomTitle().cloneNode(true);
card.appendChild(similarTitle);
