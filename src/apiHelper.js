const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

const fetchPlaces = `${BASE_URL}/place/autocomplete/json?types=geocode&key=${API_KEY}`;
const fetchGeoCodes = `${BASE_URL}/geocode/json?key=${API_KEY}`;

module.exports = {
  fetchPlaces,
  fetchGeoCodes,
};
