import axios from 'axios';
import { urlConfig } from '../configs'


export const getItems = () => {
    return axios.get(urlConfig.itemsUrl)
}