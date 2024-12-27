import React from 'react';
import {useQuery} from '@tanstack/react-query';
import {getBookMarkAPI} from '../apis/bookmarkAPI';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LoadingScreen from './LoadingScreen';
import {getVideoId} from '../utils/getVideoId';
import {BookMarkItem, BookMarkListProps, BookMarkResponse} from './type';

const BookMarkList = ({albums, handlePress}: BookMarkListProps) => {
  const {
    data: bookmarkAlbums = {markList: []},
    isError,
    isLoading,
  } = useQuery<BookMarkResponse>({
    queryKey: ['markList'],
    queryFn: getBookMarkAPI,
  });

  const matchedAlbum = bookmarkAlbums.markList
    ?.map(({videoId}: BookMarkItem) => {
      const matched = albums.find(album => getVideoId(album.id) === videoId);
      return matched || null;
    })
    .filter(album => album !== null)
    .reverse()
    .slice(0, 9);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <View>error</View>;
  }

  return (
    <View className="w-full">
      <Text className="text-2xl font-bold"> 즐겨찾기 </Text>
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
export default BookMarkList;
