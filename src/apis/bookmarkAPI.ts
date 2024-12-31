import {axiosInstance} from './axiosInstance';

export const getBookMarkAPI = async () => {
  try {
    const response = await axiosInstance.get('/bookmark');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const postBookMarkAPI = async (videoId: string) => {
  try {
    const response = await axiosInstance.post('/bookmark', {videoId: videoId});
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteBookMarkAPI = async (markId: string | undefined) => {
  try {
    const response = await axiosInstance.delete(`/bookmark/${markId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
