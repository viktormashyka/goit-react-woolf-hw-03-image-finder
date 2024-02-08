import axios from 'axios';

// require('dotenv').config();

// const { BASE_URL } = process.env;

// TODO: add dotenv, remove console and comments

const API_KEY = '29782836-0cb6e5c5167e525a8102df66c';
const BASE_URL = 'https://pixabay.com/api/';

// let page = 1;
// let perPage = 12;

axios.defaults.baseURL = BASE_URL;

export const fetchImageByName = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`
  );
  console.log('response: ', response);
  return response.data;
};

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
