import React from 'react';
import {Text, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getLatestList} from '../apis/latestListAPI';
import {LatestAlbumsResponse, LatestListProps} from './type';
import LoadingScreen from './common/LoadingScreen';
import {createRows} from '../utils/createRows';
import AlbumGrid from './common/AlbumGrid';
import {ErrorScreen} from './common/ErrorScreen';

const LatestList = ({handlePress}: LatestListProps) => {
  const {
    data: latestAlbums = {list: []},
    isError,
    isLoading,
  } = useQuery<LatestAlbumsResponse>({
    queryKey: ['latestList'],
    queryFn: getLatestList,
  });

  const latestData = createRows(latestAlbums.list.slice(0, 9).reverse(), 3);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="w-full">
      <Text className="text-2xl font-bold"> 최신 재생 목록 </Text>
      <View className="w-full flex justify-center items-center">
        <AlbumGrid data={latestData} handlePress={handlePress} />
      </View>
    </View>
  );
};

export default LatestList;
