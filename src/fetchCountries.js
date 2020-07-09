"use strict"
export const fetchCountries = function (searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      if (response.status !== 200) {
        return response = []
      } else {
        return response.json()
      };
    })
};
