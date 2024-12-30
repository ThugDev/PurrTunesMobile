import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const LoadingScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size={'large'} color={'#0000ff'} />
      <Text>로딩중...</Text>
    </View>
  );
};
export default LoadingScreen;
