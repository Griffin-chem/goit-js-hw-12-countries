import countryTemplate from './templates/country.hbs';
import * as PNotify from '@pnotify/core'

let listArray = [];

const res = {
  list: document.querySelector('.country-list'),
  country: document.querySelector('.country-info'),
  err: document.querySelector('.error')
}

// Country list (up to 10)
const showCountryList = function (listArray) {
  const listCode = listArray.reduce((code, elem) => code + `<li>${elem.name}</li>`, "");
  res.list.insertAdjacentHTML('afterbegin', listCode);
};

// Country detail (one result)
const showCountryDetail = function (listArray) {
  const countryDetailCode =  countryTemplate(listArray[0]);
  res.country.insertAdjacentHTML('afterbegin', countryDetailCode);
};

export const handleInput = function (listArray) {
  const l = listArray.length
  switch (l) {
    case 1:
      showCountryDetail(listArray);
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      showCountryList(listArray);
      break;
    default:
      PNotify.error({
        title: 'Oh No!',
        text: 'Something terrible happened.'
      });
      break;
  };
}
