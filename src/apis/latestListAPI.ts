import {axiosInstance} from './axiosInstance';

export const getLatestList = async () => {
  try {
    const response = await axiosInstance.get('/latestList');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postLatestList = async (videoId: string) => {
  try {
    const response = await axiosInstance.post('/latestList', {
      videoId,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
