import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';

export const axiosInstance = axios.create({
  baseURL: `${Config.BASE_URL}`,
});

axiosInstance.interceptors.request.use(
  async config => {
    try {
      const noAuthPaths = ['auth/signUp', 'auth/signIn'];
      if (noAuthPaths.some(path => config.url?.includes(path))) {
        return config;
      }
      const token = await AsyncStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `${token}`;
      }
    } catch (error) {
      console.error('Error in request interceptor: ', error);
    }
    return config;
  },
  error => Promise.reject(error),
);
