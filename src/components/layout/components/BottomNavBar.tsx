import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {
  HomeIcon,
  SearchIcon,
  HeartIcon,
  UserIcon,
  ListIcon,
} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParmList} from '../../../../App';

const BottomNavBar = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParmList>>();

  const handleHomePress = () => {
    navigation.navigate('Home');
  };

  const handleSearchPress = () => {
    navigation.navigate('SearchScreen', {query: ''});
  };

  const handleFavoritesPress = () => {
    // TODO: 즐겨찾기 화면 구현
    console.log('즐겨찾기로 이동');
  };

  const handleProfilePress = async () => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      // TODO: 프로필 화면 또는 로그아웃 옵션 구현
      console.log('프로필 또는 로그아웃 옵션 표시');
    } else {
      navigation.navigate('SignInScreen');
    }
  };

  const handleMusicListPress = () => {
    // TODO: 노래 목록 화면 구현
    console.log('노래 목록으로 이동');
  };

  return (
    <View className="flex-row justify-around items-center bg-white py-3 border-t border-gray-200">
      <TouchableOpacity onPress={handleSearchPress} className="items-center">
        <SearchIcon size={24} color="gray" />
        <Text className="text-xs text-gray-600 mt-1">검색</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleMusicListPress} className="items-center">
        <ListIcon size={24} color="gray" />
        <Text className="text-xs text-gray-600 mt-1">노래</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleHomePress} className="items-center">
        <HomeIcon size={24} color="gray" />
        <Text className="text-xs text-gray-600 mt-1">홈</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleFavoritesPress} className="items-center">
        <HeartIcon size={24} color="gray" />
        <Text className="text-xs text-gray-600 mt-1">즐겨찾기</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfilePress} className="items-center">
        <UserIcon size={24} color="gray" />
        <Text className="text-xs text-gray-600 mt-1">프로필</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavBar;
