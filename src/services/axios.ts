import axios from 'axios';

export default axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_ENDPOINT,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  withCredentials: true,
});
