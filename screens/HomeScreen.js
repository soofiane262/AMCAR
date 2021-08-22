import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import RoundButton from '../Assets/Button';
import InfosScreen from '../screens/InfosScreen';
import { enableScreens } from 'react-native-screens';
import { Navigation } from 'react-native-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import PresidentScreen from './PresidentScreen';
import ProgramScreen from './ProgramScreen';
import ComiteScreen from './ComiteScreen';
import LiveScreen from './LiveScreen';
import SpeakersScreen from './SpeakersScreen';
import ComScreen from './ComScreen';
import ExpoScreen from './ExpoScreen';
import SponsorsScreen from './SponsorsScreen';
import MedHatimi from './Screens/MedHatimi';


enableScreens();


const Stack = createStackNavigator()



export default function HomeScreen() {

  return (
    // <View style={styles.container}>
    //   <Text>HomeScreen</Text>
    // </View>
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerTitleAlign: 'center',
        gestureEnabled: 'true'
       }}>
      <Stack.Screen  name='Home' component={RoundButton} />
      {/* <Stack.Screen name='Program' component={ProgramScreen} /> */}
      <Stack.Screen name='Président' component={PresidentScreen} />
      <Stack.Screen name="Comité de l'AMCAR" component={ComiteScreen} />
      <Stack.Screen name='Live' component={LiveScreen} />
      {/* <Stack.Screen name='Speakers' component={SpeakersScreen} /> */}
      {/* <Stack.Screen name='Communications' component={ComScreen} /> */}
      <Stack.Screen name='Exposition' component={ExpoScreen} />
      <Stack.Screen name='Sponsors' component={SponsorsScreen} />
      {/* <Stack.Screen name='MedHatimi' component={MedHatimi} /> */}
      {/* <Stack.Screen name='Infos' component={InfosScreen} /> */}
    
    </Stack.Navigator>
    // </NavigationContainer>  
    );
}


const styles = StyleSheet.create({
    header: {
      flex:1,
      marginTop: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 270,
      height: 114,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });
