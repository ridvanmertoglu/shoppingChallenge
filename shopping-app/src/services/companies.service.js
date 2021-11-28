import axios from 'axios';
import { urlConfig } from '../configs'

export const getCompanies = () => {
    return axios.get(urlConfig.companiesUrl)
}