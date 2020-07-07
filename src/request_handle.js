"use strict"

import {
  handleInput
} from './handlers';
import {
  fetchCountries
} from './fetchCountries';

const inputCountry = document.querySelector('#js-input-field');
const request = inputCountry.value;

fetchCountries(request).then(data => {
  console.log(data);
  handleInput(data)
});

// const delayedHandler = _.debounce(fetchCountries, 500);
inputCountry.addEventListener('input', fetchCountries);