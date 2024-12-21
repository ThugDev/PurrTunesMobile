import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {PopularListProps} from './type';

const PopularList = ({albums, handlePress}: PopularListProps) => {
  return (
    <View className=" h-full flex-1 p-4 ">
      <Text className="text-xl font-bold mb-4">인기 목록</Text>
      <ScrollView>
        {albums.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(item)}
            className="mb-4">
            <View className="flex-row items-center">
              <Image
                source={{uri: item.thumbnail.medium.url}}
                className="w-20 h-20 mr-2.5"
              />
              <View>
                <Text className="font-semibold">{item.title}</Text>
                <Text>{item.channelTitle}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
export default PopularList;
