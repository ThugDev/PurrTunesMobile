import {BookMarkResponse, LatestAlbumsResponse} from '../components/type';

export const isLatestAlbumsResponse = (
  albums: LatestAlbumsResponse | BookMarkResponse,
): albums is LatestAlbumsResponse => {
  return 'list' in albums;
};
