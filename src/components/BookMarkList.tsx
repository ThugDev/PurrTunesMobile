import React from 'react';
import {Text, View} from 'react-native';
import {BookMarkListProps} from './type';
import {createRows} from '../utils/createRows';
import AlbumGrid from './common/AlbumGrid';

const BookMarkList = ({bookmarkAlbums, handlePress}: BookMarkListProps) => {
  const bookMarkData = createRows(
    bookmarkAlbums.markList.slice(0, 9).reverse(),
    3,
  );

  return (
    <View className="w-full">
      <Text className="text-2xl font-bold"> 즐겨찾기 </Text>
      <View className="w-full flex justify-center items-start">
        <AlbumGrid data={bookMarkData} handlePress={handlePress} />
      </View>
    </View>
  );
};
export default BookMarkList;
