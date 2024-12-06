import axios from 'axios';
import {AlbumType, YouTubeSearchResponse} from './type';
// import Config from 'react-native-config';

export const YOUTUBE_API_KEY = 'AIzaSyDdq36Gn7ztf_bvdx95pgbO3ziE48D8JKU';
const YOUTUBE_URI = 'https://www.googleapis.com/youtube/v3/';

/**
 * @function fetchPopularAlbums 유튜브 API에서 추천 앨범 목록을 가져오는 함수
 *
 * @async
 * @returns {Promise<AlbumType[]>} 추천 앨범 객체 배열을 반환
 */
export const fetchPopularAlbums = async (): Promise<AlbumType[]> => {
  const params = new URLSearchParams({
    part: 'snippet',
    chart: 'mostPopular',
    key: YOUTUBE_API_KEY || '',
    type: 'video',
    videoCategoryId: '10', // 음악 카테고리 ID
    maxResults: '8',
  });

  const response = await axios.get(`${YOUTUBE_URI}videos?${params}`);

  const {items = []}: YouTubeSearchResponse = response.data;

  return items.map(item => ({
    id: item.id,
    title: decodeURIComponent(item.snippet.title),
    description: decodeURIComponent(item.snippet.description),
    thumbnail: item.snippet.thumbnails,
    channelTitle: item.snippet.channelTitle,
    publishedAt: item.snippet.publishedAt,
  }));
};

/**
 * 주어진 입력에 대한 검색 제안을 가져온다.
 *
 * @async
 * @param {string} input - 검색 제안을 위한 사용자 입력 문자열
 * @returns {Promise<string[]>} 검색 제안 문자열 배열을 반환합니다. 오류 발생 시 빈 배열을 반환합니다.
 */
export const fetchSuggestion = async (searchString: string) => {
  try {
    const response = await axios.get(`${YOUTUBE_URI}search`, {
      params: {
        part: 'snippet',
        q: searchString,
        key: YOUTUBE_API_KEY,
        type: 'video',
        videoCategoryId: '10',
        maxResults: '8',
      },
    });

    const data: YouTubeSearchResponse = response.data;
    return data.items.map(item => item.snippet.title);
  } catch {
    return [];
  }
};

/**
 *
 * @async
 * @param {string} query - 검색할 쿼리 문자열
 * @returns {Promise<AlbumType[]>} 검색 결과 객체 배열을 반환
 * @throws {Error} API 요청 중 에러 발생 시 에러를 던진다.
 */
export const fetchSearchResult = async (
  query: string,
): Promise<AlbumType[]> => {
  if (!query) {
    return [];
  }

  try {
    const response = await axios.get(`${YOUTUBE_URI}search`, {
      params: {
        part: 'snippet',
        q: query,
        key: YOUTUBE_API_KEY || '',
        type: 'video',
        videoCategoryId: '10',
        maxResults: '20',
      },
    });

    const {items = []}: YouTubeSearchResponse = response.data;

    return items.map(item => ({
      id: item.id,
      title: decodeURIComponent(item.snippet.title),
      description: decodeURIComponent(item.snippet.description),
      thumbnail: item.snippet.thumbnails,
      channelTitle: item.snippet.channelTitle,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw new Error(
      `검색 결과 가져오기 오류: ${
        error instanceof Error ? error.message : '알 수 없는 오류'
      }`,
    );
  }
};
