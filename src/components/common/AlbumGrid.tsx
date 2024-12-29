import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {latestAlbumType} from '../type';

export type AlbumGridProps = {
  data: latestAlbumType[][];
  handlePress: (item: latestAlbumType) => void;
};

const AlbumGrid = ({data, handlePress}: AlbumGridProps) => {
  return (
    <View className=" items-center">
      {data.map((rows, index) => (
        <View key={index} className=" flex-row justify-center">
          {rows.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              onPress={() => handlePress(item)}
              className="w-20 h-20 m-2">
              <View className="w-20 h-20">
                <Image
                  source={{uri: item.thumbnail.url}}
                  className="w-20 h-20"
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};
export default AlbumGrid;
