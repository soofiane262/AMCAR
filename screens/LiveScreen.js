import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av';
import YoutubePlayer from 'react-native-youtube-iframe'

export default function ComiteScreen() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{zIndex:2, position:'relative'}}>
      <Video
      style={{ zIndex:0, height: windowHeight+2, width:windowWidth+2, position:'absolute', top:-2, right:0, left:0, bottom:0}}
      shouldPlay
      repeat
      source={require('../Assets/Vid/LoopVid.mp4')}
      resizeMode="cover"
      isLooping
      />
      <View style={styles.container}>
      <YoutubePlayer
        height={216}
        play={true}
        videoId={'5qap5aO4i9A'}
      />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    zIndex:2,
    top:200,
    padding:10,
    shadowColor:'#838383',
            shadowOpacity:0.8,
            shadowRadius:7,
            shadowOffset:{
                width:8,
                height:5
            },
  },
});
