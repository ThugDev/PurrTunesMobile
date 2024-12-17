import axios from 'axios';
import {userInstance} from './axiosInstance';
import {FetchSignProps} from './type';

export const postSignIn = async ({email, password}: FetchSignProps) => {
  try {
    const userData = {email, password};
    const response = await userInstance.post('/auth/signIn', userData);
    console.log('user data: ', response);
    return response;
  } catch (error) {
    console.error('signIn error: ', error);
    throw error;
  }
};

export const postSignUp = async ({email, password}: FetchSignProps) => {
  console.log('실행');
  try {
    const userData = {email, password};
    console.log('user data', userData);
    // const response = await userInstance.post('/auth/signUp', {
    //   email: email,
    //   password: password,
    // });
    const response = await axios.post(
      'http://3.36.91.125:7407/auth/signUp',
      userData,
    );
    console.log('response data: ', response);
    return response;
  } catch (error) {
    console.error('error: ', error);
  }
};
