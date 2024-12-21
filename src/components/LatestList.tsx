import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getLatestList} from '../apis/latestListAPI';
import {getVideoId} from '../utils/getVideoId';
import {LatestAlbum, LatestAlbumsResponse, LatestListProps} from './type';
import LoadingScreen from './LoadingScreen';

const LatestList = ({albums, handlePress}: LatestListProps) => {
  const {
    data: latestAlbums = {list: []},
    isError,
    isLoading,
    error,
  } = useQuery<LatestAlbumsResponse>({
    queryKey: ['latestList'],
    queryFn: getLatestList,
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>{error.message}</Text>
      </View>
    );
  }

  //   const latestItem = latestAlbums.list.map(item => item);

  const matchedAlbum = latestAlbums.list
    ?.map(({videoId}: LatestAlbum) => {
      // albums에서 videoId와 일치하는 album을 찾음
      const matched = albums.find(album => getVideoId(album.id) === videoId);
      return matched || null; // 일치하는 album이 없으면 null 반환
    })
    .filter(album => album !== null)
    .reverse()
    .slice(0, 9); // null 값은 필터링

  return (
    <View className="w-full">
      <Text className="text-2xl font-bold"> 최신 재생 목록 </Text>
      <View className="w-full flex justify-center items-center">
        <ScrollView
          horizontal
          contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {matchedAlbum.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handlePress(item)}
              className="w-20 h-20 m-2">
              <View className="w-20 h-20">
                <Image
                  source={{uri: item.thumbnail.medium.url}}
                  className="w-20 h-20"
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default LatestList;
