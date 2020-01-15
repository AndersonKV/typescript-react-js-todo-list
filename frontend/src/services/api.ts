//import axios from 'axios'.default
const axios = require('axios').default;

 
const api = axios.create({
  baseURL: 'http://localhost:3333',
});

// const api = axios.create({
//   baseURL: 'http://localhost:3333',
//   responseType: 'json',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });



export default api;