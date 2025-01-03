import {useQuery} from '@tanstack/react-query';
import {AlbumType} from '../apis/type';
import {fetchPopularAlbums} from '../apis/YoutubeAPI';
import {BookMarkResponse, LatestAlbumsResponse} from '../components/type';
import {getBookMarkAPI} from '../apis/bookmarkAPI';
import {getLatestList} from '../apis/latestListAPI';

const useAlbums = () => {
  const {
    data: popularAlbums = [],
    isLoading: isPopularLoading,
    isError: isPopularError,
  } = useQuery<AlbumType[], Error>({
    queryKey: ['popularAlbums'],
    queryFn: fetchPopularAlbums,
  });

  const {
    data: bookmarkAlbums = {markList: []},
    isError: isBookmarkError,
    isLoading: isBookmarkLoading,
  } = useQuery<BookMarkResponse>({
    queryKey: ['markList'],
    queryFn: getBookMarkAPI,
  });

  const {
    data: latestAlbums = {list: []},
    isError: isLatestError,
    isLoading: isLatestLoading,
  } = useQuery<LatestAlbumsResponse>({
    queryKey: ['latestList'],
    queryFn: getLatestList,
  });

  return {
    popularAlbums,
    bookmarkAlbums,
    latestAlbums,
    isLoading: isPopularLoading || isBookmarkLoading || isLatestLoading,
    isError: isPopularError || isBookmarkError || isLatestError,
  };
};

export default useAlbums;
