import axios, { AxiosInstance } from 'axios';

/**
 * Creates an axios instance from the .env file
 * @type {AxiosInstance}
 */
const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DOMAIN,
});

export { api };
