import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {AlbumType} from '../apis/type';
import {useNavigation} from '@react-navigation/native';
import AlbumSearch from '../components/AlbumSearch';
import PopularList from '../components/PopularList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../components/common/LoadingScreen';
import {ErrorScreen} from '../components/common/ErrorScreen';
import {SavedAlbumType} from '../components/type';
import useAlbums from '../hooks/useAlbums';
import ListScreen from '../components/ListScreen';
import {HomeNavigationProps} from './type';

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
        <ListScreen
          albums={latestAlbums}
          handlePress={handlePress}
          title="최신 재생 목록"
        />
        <ListScreen
          albums={bookmarkAlbums}
          handlePress={handlePress}
          title="즐겨찾기"
        />
      </View>
      <PopularList albums={popularAlbums} handlePress={handlePress} />
      <View className="w-full flex-center">
        <TouchableOpacity
          onPress={onLogout}
          className="w-1/5 mb-10 border p-2 rounded bg-gray-400">
          <Text className="text-md font-bold">로그아웃</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Home;
