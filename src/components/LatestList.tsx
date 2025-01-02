import React from 'react';
import {Text, View} from 'react-native';
import {LatestListProps} from './type';
import {createRows} from '../utils/createRows';
import AlbumGrid from './common/AlbumGrid';

const LatestList = ({latestAlbums, handlePress}: LatestListProps) => {
  const latestData = createRows(latestAlbums.list.slice(0, 9).reverse(), 3);

  return (
    <View className="w-full">
      <Text className="text-2xl font-bold"> 최신 재생 목록 </Text>
      <View className="w-full flex justify-center items-start">
        <AlbumGrid data={latestData} handlePress={handlePress} />
      </View>
    </View>
  );
};

export default LatestList;
