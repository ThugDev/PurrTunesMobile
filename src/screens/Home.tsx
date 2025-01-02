import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AlbumType} from '../apis/type';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProps} from './type';
import AlbumSearch from '../components/AlbumSearch';
import PopularList from '../components/PopularList';
import LatestList from '../components/LatestList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../components/common/LoadingScreen';
import BookMarkList from '../components/BookMarkList';
import {ErrorScreen} from '../components/common/ErrorScreen';
import {SavedAlbumType} from '../components/type';
import useAlbums from '../hooks/useAlbums';

const Home = () => {
  const navigation = useNavigation<HomeNavigationProps>();

  const {latestAlbums, popularAlbums, bookmarkAlbums, isLoading, isError} =
    useAlbums();

  const handlePress = (album: SavedAlbumType | AlbumType) => {
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
    return <ErrorScreen />;
  }

  return (
    <ScrollView className="py-20">
      <View className="p-2">
        <AlbumSearch />
        <LatestList latestAlbums={latestAlbums} handlePress={handlePress} />
        <BookMarkList
          bookmarkAlbums={bookmarkAlbums}
          handlePress={handlePress}
        />
      </View>
      <PopularList albums={popularAlbums} handlePress={handlePress} />
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
