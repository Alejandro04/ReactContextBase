import axios from 'axios';
import api from '../../utils/services';

export const loadCategories = () => {
  return axios
    .get(`${api.url}/api/categories`)
    .then(res => res.data)
    .catch(err => err.response.data);
};
