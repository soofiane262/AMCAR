import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SpeakersStack from './SpeakersStack';
import MedHatimi from './Screens/MedHatimi';
import SoufMarsi from './Screens/SoufMarsi';

enableScreens();
const Stack = createStackNavigator()

export default function SpeakersScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name='SpeakersStack' component={SpeakersStack} />
      <Stack.Screen  name='MedHatimi' component={MedHatimi} />
      <Stack.Screen  name='SoufMarsi' component={SoufMarsi} />
    </Stack.Navigator>
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
