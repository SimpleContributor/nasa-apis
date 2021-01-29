import axios from 'axios';
import { KEY } from '../config';

export default axios.create({
    baseURL: 'https://api.nasa.gov/',
    params: {
        api_key: KEY
    }
})
