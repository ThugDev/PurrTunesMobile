import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {AlbumType} from '../apis/type';
import {postBookMarkAPI} from '../apis/bookmarkAPI';
import {getVideoId} from '../utils/getVideoId';

export type BookMarkProps = {
  album: AlbumType;
};

const BookMark = ({album}: BookMarkProps) => {
  const [isClick, setIsClick] = useState(false);

  const onBookMark = async () => {
    if (!isClick) {
      await postBookMarkAPI(getVideoId(album.id));
      setIsClick(!isClick);
    }
  };

  return (
    <View className="w-full mt-4">
      <TouchableOpacity className=" border rounded p-2" onPress={onBookMark}>
        <Text>즐겨찾기</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BookMark;
