import countryTemplate from './templates/country.hbs';
import * as PNotify from '@pnotify/core';
import * as _ from 'lodash';
import {
  fetchCountries
} from './fetchCountries';

const res = {
  list: document.querySelector('.country-list'),
  country: document.querySelector('.country-info'),
  input: document.querySelector('#js-input-field')
}

// Country list (up to 10)
const showCountryList = function (listArray) {
  const listCode = listArray.reduce((code, elem) => code + `<li>${elem.name}</li>`, "");
  res.list.insertAdjacentHTML('afterbegin', listCode);
};

// Country detail (one result)
const showCountryDetail = function (listArray) {
  const countryDetailCode = countryTemplate(listArray[0]);
  res.country.insertAdjacentHTML('afterbegin', countryDetailCode);
};

const handleInput = function (listArray) {
  const check = listArray.length;
  switch (true) {
    case (check === 1):
      showCountryDetail(listArray);
      break;
    case (check>=2 && check <= 10):
      showCountryList(listArray);
      break;
    default:
      PNotify.error({
        text: 'Too many matches found. Please, specify request.'
      });
      break;
  };
};

const handleRequest = function () {
  const request = res.input.value;
  res.list.innerHTML='';
  res.country.innerHTML='';
  fetchCountries(request).then(data => {
    console.log(data);
    handleInput(data)
  });

}

const handleRequestDebounce = _.debounce(handleRequest, 500);
res.input.addEventListener('input', handleRequestDebounce);