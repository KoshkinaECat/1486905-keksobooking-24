
//первая функция
function getRandomIntInclusive(min, max) {
  if (min<max && max>=0 && min>=0){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
else {
  return ('Задайте корректный диапозон!')
}
}

//вторая функция
function getRandomArbitrary(min, max) {
  if (min < max && max >= 0 && min >= 0){
  return Math.random() * (max - min) + min;
}
else{
  return('Задайте другие числа!')
}
}
