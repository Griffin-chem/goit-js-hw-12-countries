"use strict"
export const fetchCountries = function (searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      return response.json()
    })
};
