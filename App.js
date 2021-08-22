import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Tabs from './navigation/Tabs';
import SplashScreen from 'react-native-splash-screen';




export default function App() {
  

  // useEffect(() => {
  //   setTimeout(() => {
  //       SplashScreen.show();
  //   }, 2000);
  // }, [])

  return (
    // <View style={styles.container}>
    //   <Text>welcome to the amcar app</Text>
    //   <StatusBar style="auto" />
    // </View>
        // <Stack />
        <NavigationContainer style={{position:'relative'}}>
            <Tabs style={{zIndex:2}} />
        </NavigationContainer>
      

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
