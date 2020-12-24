import axios from 'axios';

const instance = axios.create({
    baseURL: "http://10.20.9.103:8080/",
  });
  
  export default instance;