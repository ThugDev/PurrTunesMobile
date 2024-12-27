import {axiosInstance} from './axiosInstance';

export const getBookMarkAPI = async () => {
  try {
    const response = await axiosInstance.get('/bookmark');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postBookMarkAPI = async (videoId: string) => {
  console.log(videoId, 'video id');
  try {
    const response = await axiosInstance.post('/bookmark', {videoId: videoId});
    console.log(response.data);
    return response;
  } catch (error) {
    console.error('post bookmark', error);
    throw error;
  }
};

export const deleteBookMarkAPI = async (markId: string) => {
  try {
    const response = await axiosInstance.delete(`bookmark${markId}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
