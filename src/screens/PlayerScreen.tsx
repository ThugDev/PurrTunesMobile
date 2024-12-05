import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {useYouTubePlayer} from '../hooks/useYouTubePlayer';
import {getVideoId} from '../utils/getVideoId';
// import Config from 'react-native-config';
import YouTubePlayer from 'react-native-youtube-iframe';
import {RouteProp} from '@react-navigation/native';
import {RootStackParmList} from '../../App';

type PlayerScreenRouteProp = RouteProp<RootStackParmList, 'PlayerScreen'>;

interface PlayerScreenProps {
  route: PlayerScreenRouteProp;
}

const PlayerScreen = ({route}: PlayerScreenProps) => {
  const {album} = route.params;
  const videoId = getVideoId(album.id);
  const {isPlaying, handleStateChange, togglePlay} = useYouTubePlayer();

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Image
        source={{uri: album.thumbnail.medium.url}}
        className="w-[200px] h-[200px] mb-5"
      />
      <Text className="text-2xl font-bold">{album.title}</Text>
      <Text className="text-xl text-#cccccc">{album.channelTitle}</Text>
      {/* <YouTubePlayer
        videoId={videoId}
        height={250}
        play={isPlaying}
        onChangeState={handleStateChange}
      /> */}
      <Button title={isPlaying ? 'Pause' : 'Play'} onPress={togglePlay} />
    </View>
  );
};
export default PlayerScreen;
