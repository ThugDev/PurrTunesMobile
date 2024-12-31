import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  deleteBookMarkAPI,
  getBookMarkAPI,
  postBookMarkAPI,
} from '../apis/bookmarkAPI';
import {getVideoId} from '../utils/getVideoId';
import {BookMarkProps, BookMarkResponse} from './type';
import {useQuery, useQueryClient} from '@tanstack/react-query';

const BookMark = ({album}: BookMarkProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);

  const {data: bookmarkAlbums = {markList: []}} = useQuery<BookMarkResponse>({
    queryKey: ['markList'],
    queryFn: getBookMarkAPI,
    staleTime: 1000 * 60,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    const isBookmarked = bookmarkAlbums.markList.some(
      item => item.id === album.id,
    );
    setIsClick(isBookmarked);
  }, [bookmarkAlbums, album.id]);

  const onBookMark = async () => {
    const videoId = getVideoId(album.id);
    const bookmark = bookmarkAlbums.markList.find(item => item.id === album.id);

    if (isClick) {
      await deleteBookMarkAPI(bookmark?.markId);
    } else {
      await postBookMarkAPI(videoId);
    }
    setIsClick(!isClick);
    queryClient.invalidateQueries({queryKey: ['markList']});
    await queryClient.refetchQueries({queryKey: ['markList']});
  };

  return (
    <View className="w-full mt-4">
      <TouchableOpacity className=" border rounded p-2" onPress={onBookMark}>
        <Text>{isClick ? '즐겨찾기 해제' : '즐겨찾기 추가'}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BookMark;
