import {axiosInstance} from './axiosInstance';
import {FetchSignProps} from './type';

export const postSignIn = async ({email, password}: FetchSignProps) => {
  try {
    const userData = {email, password};
    const response = await axiosInstance.post('/auth/signIn', userData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postSignUp = async ({email, password}: FetchSignProps) => {
  try {
    const userData = {email, password};
    const response = await axiosInstance.post('/auth/signUp', userData);
    return response;
  } catch (error) {
    throw error;
  }
};
