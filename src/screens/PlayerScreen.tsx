import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useYouTubePlayer} from '../hooks/useYouTubePlayer';
import {getVideoId} from '../utils/getVideoId';
import YouTubePlayer from 'react-native-youtube-iframe';
import {PlayerScreenProps} from './type';
import {postLatestList} from '../apis/latestListAPI';
import {useQueryClient} from '@tanstack/react-query';

const PlayerScreen = ({route}: PlayerScreenProps) => {
  const {album} = route.params;
  const videoId = getVideoId(album.id);
  const {isPlaying, handleStateChange, togglePlay} = useYouTubePlayer();
  const queryClient = useQueryClient();

  const handlePlay = async () => {
    togglePlay();
    if (!isPlaying) {
      await postLatestList(videoId);
      queryClient.invalidateQueries({queryKey: ['latestList']});
      queryClient.refetchQueries({queryKey: ['latestList']});
    }
  };

  return (
    <View className="flex-1 justify-center items-center p-4 mt-40">
      <View className="flex justify-center items-center h-[300px]">
        <Image
          source={{uri: album.thumbnail.medium.url}}
          className="w-[200px] h-[200px] mb-5"
        />
        <Text className="text-2xl font-bold" numberOfLines={2}>
          {album.title}
        </Text>
        <Text className="text-xl text-#cccccc">{album.channelTitle}</Text>
        <YouTubePlayer
          videoId={videoId}
          height={250}
          play={isPlaying}
          onChangeState={handleStateChange}
        />
      </View>
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={handlePlay} />
    </View>
  );
};
export default PlayerScreen;
