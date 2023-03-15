import axios from 'axios'
import {baseUrl} from './constants/constants.js'
const instance = axios.create({
    baseURL: baseUrl});

    export default instance