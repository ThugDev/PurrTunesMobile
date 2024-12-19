import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {AlbumType} from '../apis/type';
import {useQuery} from '@tanstack/react-query';
import {getLatestList} from '../apis/latestListAPI';
import {getVideoId} from '../utils/getVideoId';

export type LatestListProps = {
  albums: AlbumType[];
};
export type LatestAlbum = {
  listId: number;
  videoId: string;
};

export type LatestAlbumsResponse = {
  list: LatestAlbum[];
};

const LatestList = ({albums}: LatestListProps) => {
  const {
    data: latestAlbums = {list: []},
    isError,
    isLoading,
  } = useQuery<LatestAlbumsResponse>({
    queryKey: ['latestList'],
    queryFn: getLatestList,
  });

  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Error</Text>
      </View>
    );
  }

  const matchedAlbum = latestAlbums.list
    ?.map(({videoId}: LatestAlbum) => {
      // albums에서 videoId와 일치하는 album을 찾음
      const matched = albums.find(album => getVideoId(album.id) === videoId);
      return matched || null; // 일치하는 album이 없으면 null 반환
    })
    .filter(album => album !== null); // null 값은 필터링

  return (
    <View className="w-full h-[300px]">
      <Text className="text-2xl font-bold"> 최신 재생 목록 </Text>
      <View className="w-full flex justify-center items-center">
        <FlatList
          className="w-full "
          data={matchedAlbum}
          numColumns={3}
          keyExtractor={item => getVideoId(item.id)}
          renderItem={({item}) => (
            <TouchableOpacity className="w-20 h-20 m-2">
              <View className="w-20 h-20">
                <Image
                  source={{uri: item.thumbnail?.medium.url}}
                  className="w-20 h-20"
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default LatestList;
