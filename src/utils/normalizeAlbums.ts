import {BookMarkResponse, LatestAlbumsResponse} from '../components/type';

export const normalizeAlbums = (
  albums: LatestAlbumsResponse | BookMarkResponse,
) => {
  if ('list' in albums) {
    return albums.list.map(item => ({
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      channelTitle: item.channelTitle,
    }));
  }
  if ('markList' in albums) {
    return albums.markList.map(item => ({
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      channelTitle: item.channelTitle,
    }));
  }

  return [];
};
