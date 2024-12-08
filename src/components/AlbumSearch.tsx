import React, {useState} from 'react';
import {View} from 'react-native';
import SearchBar from './common/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProps} from '../screens/type';

const AlbumSearch = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (text: string) => {
    setSearchQuery(text);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== '') {
      navigation.navigate('SearchScreen', {query: searchQuery});
    }
  };

  return (
    <View>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleChange}
        onSearchSubmit={handleSearchSubmit}
      />
    </View>
  );
};

export default AlbumSearch;
