import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {SearchBarProps} from '../type';

const SearchBar = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center mb-4">
      <TextInput
        value={searchQuery}
        onChangeText={onSearchChange}
        className="flex-1 border border-gray-300 rounded-lg p-2"
      />
      <Button title="검색" onPress={onSearchSubmit} />
    </View>
  );
};

export default SearchBar;
