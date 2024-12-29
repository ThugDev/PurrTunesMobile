import React from 'react';
import {Text, View} from 'react-native';

export const ErrorScreen = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-#ff0000">
        데이터를 불러오는 중 오류가 발생했습니다.
      </Text>
    </View>
  );
};
