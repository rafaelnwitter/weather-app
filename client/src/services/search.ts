import axios from 'axios';

const search = axios.create({
  baseURL: 'http://localhost:9000'
})

export default search;
