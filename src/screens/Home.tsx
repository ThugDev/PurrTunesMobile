import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AlbumType} from '../apis/type';
import {useNavigation} from '@react-navigation/native';
import {fetchPopularAlbums} from '../apis/YoutubeAPI';
import {useQuery} from '@tanstack/react-query';
import {HomeNavigationProps} from './type';
import AlbumSearch from '../components/AlbumSearch';
import PopularList from '../components/PopularList';
import LatestList from '../components/LatestList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../components/LoadingScreen';
import BookMarkList from '../components/BookMarkList';

const Home = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const {
    data: albums = [],
    isLoading,
    isError,
  } = useQuery<AlbumType[], Error>({
    queryKey: ['popularAlbums'],
    queryFn: fetchPopularAlbums,
  });

  const handlePress = (album: AlbumType) => {
    navigation.navigate('PlayerScreen', {album});
  };

  const onLogout = async () => {
    await AsyncStorage.removeItem('authToken');
    navigation.navigate('SignInScreen');
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-#ff0000">ERROR</Text>
      </View>
    );
  }

  return (
    <ScrollView className="py-20">
      <View className="p-2">
        <AlbumSearch />
        <LatestList albums={albums} handlePress={handlePress} />
        <BookMarkList albums={albums} handlePress={handlePress} />
      </View>
      <PopularList albums={albums} handlePress={handlePress} />
      <View className="w-full flex justify-center items-center">
        <TouchableOpacity
          onPress={onLogout}
          className="mb-10 border p-2 rounded bg-gray-400">
          <Text className="text-md font-bold">로그아웃</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
