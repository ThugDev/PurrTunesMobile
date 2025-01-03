import React from 'react';
import {Text, View} from 'react-native';
import AlbumGrid from './common/AlbumGrid';
import {createRows} from '../utils/createRows';
import {ListScreenProps} from './type';
import {isLatestAlbumsResponse} from '../utils/isLatestAlbumsResponse';

const ListScreen = ({albums, handlePress, title}: ListScreenProps) => {
  const albumList = isLatestAlbumsResponse(albums)
    ? albums.list
    : albums.markList;
  const listData = createRows(albumList.slice(0, 9).reverse(), 3);

  return (
    <View className="w-full">
      <Text className="text-2xl font-bold"> {title} </Text>
      <View className="w-full flex justify-center items-start">
        <AlbumGrid data={listData} handlePress={handlePress} />
      </View>
    </View>
  );
};
export default ListScreen;
