import axios from 'axios';
import { useQueryClient } from 'react-query';

const queryClient = useQueryClient();

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';
axios.defaults.timeout = 1000;

axios.interceptors.request.use(
  config => {
    queryClient.setQueryData('isLoading', true);
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  config => {
    queryClient.setQueryData('isLoading', false);
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.error.use(
  config => {
    queryClient.setQueryData('isLoading', true);
    return config;
  },
  error => Promise.reject(error)
);
