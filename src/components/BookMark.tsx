import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {postBookMarkAPI} from '../apis/bookmarkAPI';
import {getVideoId} from '../utils/getVideoId';
import {BookMarkProps} from './type';

const BookMark = ({album}: BookMarkProps) => {
  const [isClick, setIsClick] = useState<boolean>(false);

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
