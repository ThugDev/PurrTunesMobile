import {useQueryClient} from '@tanstack/react-query';
import {postLatestList} from '../apis/latestListAPI';

/**
 * 커스텀 훅: `usePostLatestList`
 *
 * 주어진 `videoId`를 사용하여 `postLatestList` API 호출을 실행,
 * `latestList` 및 `markList` 쿼리를 무효화하고 다시 가져온다.
 * 이 훅은 API 호출 후 React Query의 쿼리 상태를 갱신하여 최신 데이터를 반영
 *
 * @param {string} videoId  - 비디오의 ID로, 해당 ID를 사용하여 `postLatestList` API를 호출
 * @returns {() => Promise<void>} - 비디오 ID에 대해 `postLatestList`를 호출, 쿼리 상태를 무효화하고 다시 가져옴
 *
 * @example
 * const postLatest = usePostLatestList(videoId)
 * await postLatest();
 */

export const usePostLatestList = (videoId: string) => {
  const queryClient = useQueryClient();
  const postLatest = async () => {
    await postLatestList(videoId);
    queryClient.invalidateQueries({queryKey: ['latestList']});
    queryClient.invalidateQueries({queryKey: ['markList']});
    queryClient.refetchQueries({queryKey: ['latestList']});
    queryClient.refetchQueries({queryKey: ['markList']});
  };
  return postLatest;
};
