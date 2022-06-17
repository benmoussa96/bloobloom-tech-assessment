import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://staging-api.bloobloom.com/user/v1/sales_channels/website`,
})