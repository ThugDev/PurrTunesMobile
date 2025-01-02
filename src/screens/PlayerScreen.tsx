import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useYouTubePlayer} from '../hooks/useYouTubePlayer';
import {getVideoId} from '../utils/getVideoId';
import YouTubePlayer from 'react-native-youtube-iframe';
import {PlayerScreenProps} from './type';
import BookMark from '../components/BookMark';
import {transThumbnail} from '../utils/transThumbnail';
import {useNavigation} from '@react-navigation/native';
import {usePostLatestList} from '../hooks/usePostLatestList';

const PlayerScreen = ({route}: PlayerScreenProps) => {
  const {album} = route.params;
  const videoId = getVideoId(album.id);
  const {isPlaying, handleStateChange, togglePlay, currentTime} =
    useYouTubePlayer();
  const navigation = useNavigation();
  const postLatest = usePostLatestList(videoId);

  const handlePlay = async () => {
    togglePlay();
    if (!isPlaying) {
      await postLatest();
    }
  };

  const handleEnd = () => {
    navigation.goBack();
  };

  const handleStateChangeWithEnd = (state: string) => {
    handleStateChange(state);
    if (state === 'ended') {
      handleEnd();
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4 mt-40">
      <View className=" flex justify-center items-center h-[300px]">
        <Image
          source={{uri: transThumbnail(album.thumbnail)}}
          className="w-[200px] h-[200px] mb-5"
        />
        <Text className="text-2xl font-bold" numberOfLines={2}>
          {album.title}
        </Text>
        <Text className="text-xl text-#cccccc">{album.channelTitle}</Text>
        <BookMark album={album} />
        <View className="py-10">
          <Text>{`${Math.floor(currentTime / 60)}:${Math.floor(
            currentTime % 60,
          )}`}</Text>
        </View>
        <Button title={isPlaying ? 'Pause' : 'Play'} onPress={handlePlay} />
        <YouTubePlayer
          videoId={videoId}
          height={250}
          play={isPlaying}
          onChangeState={handleStateChangeWithEnd}
        />
      </View>
    </View>
  );
};
export default PlayerScreen;
