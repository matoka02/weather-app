import axios from "axios";

const API_KEY = '695674de969f2e9405753429e29edcab';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export function getWeatherData(city) {
  return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}