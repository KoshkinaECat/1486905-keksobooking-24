
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
