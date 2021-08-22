import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av'

export default function MedHatimi() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={{zIndex:2, position:'relative'}}>
      <Video
      style={{ zIndex:0, height: windowHeight+2, width:windowWidth+2, position:'absolute', top:-2, right:0, left:0, bottom:0}}
      shouldPlay
      repeat
      source={require('../../Assets/Vid/LoopVid.mp4')}
      resizeMode="cover"
      isLooping
      />
      <View style={styles.container}>
        <Text>MedScreen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    zIndex:2,
  },
});
