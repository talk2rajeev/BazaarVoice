import axios from 'axios';
import { BASE_URL } from '../config/constants';

export function HttpService(){}

HttpService.prototype.get = (url, data) => {
        return axios.get(`${BASE_URL}/${url}`);
}

HttpService.prototype.post = (url, data) => {
        return axios.post(url, data);
}

