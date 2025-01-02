import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {AlbumType} from '../apis/type';
import {useQuery} from '@tanstack/react-query';
import {fetchSearchResult} from '../apis/YoutubeAPI';
import {getVideoId} from '../utils/getVideoId';
import {HomeNavigationProps} from './type';
import LoadingScreen from '../components/common/LoadingScreen';
import {ErrorScreen} from '../components/common/ErrorScreen';

const SearchScreen = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const route = useRoute();
  const {query} = route.params as {query: string};

  const {
    data: result = [],
    isLoading,
    isError,
  } = useQuery<AlbumType[], Error>({
    queryKey: ['searchReult', query],
    queryFn: () => fetchSearchResult(query),
    enabled: !!query,
  });

  const handlePress = (album: AlbumType) => {
    navigation.navigate('PlayerScreen', {album});
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <ErrorScreen />;
  }

  return (
    <View className="flex-1 p-4 mt-10">
      <Text className="text-xl font-bold mb-4">{query}</Text>
      <FlatList
        data={result}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handlePress(item)} className="mb-4">
            <View className="flex-row">
              <Image
                source={{uri: item.thumbnail.medium.url}}
                className="w-20 h-20 mr-4"
              />
              <View>
                <Text className="font-semibold">{item.title}</Text>
                <Text>{item.channelTitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => getVideoId(item.id)}
        contentContainerStyle={{flexGrow: 1}}
      />
    </View>
  );
};

export default SearchScreen;
