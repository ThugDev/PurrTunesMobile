import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getBookMarkAPI} from '../apis/bookmarkAPI';
import {Text, View} from 'react-native';
import LoadingScreen from './common/LoadingScreen';
import {BookMarkListProps, BookMarkResponse} from './type';
import {createRows} from '../utils/createRows';
import AlbumGrid from './common/AlbumGrid';
import {ErrorScreen} from './common/ErrorScreen';

const BookMarkList = ({handlePress}: BookMarkListProps) => {
  const {
    data: bookmarkAlbums = {markList: []},
    isError,
    isLoading,
  } = useQuery<BookMarkResponse>({
    queryKey: ['markList'],
    queryFn: getBookMarkAPI,
  });

  const bookMarkData = createRows(
    bookmarkAlbums.markList.reverse().slice(0, 9),
    3,
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="w-full">
      <Text className="text-2xl font-bold"> 즐겨찾기 </Text>
      <View className="w-full flex justify-center items-center">
        <AlbumGrid data={bookMarkData} handlePress={handlePress} />
      </View>
    </View>
  );
};
export default BookMarkList;
