import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator } from '@react-navigation/stack';
import ExpoStack from './ExpoStack';
import Sponsor01 from './Screens/Sponsor01';
import Sponsor02 from './Screens/Sponsor02';

enableScreens();
const Stack = createStackNavigator()

export default function SpeakersScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen  name='ExpoStack' component={ExpoStack} />
      <Stack.Screen  name='Sponsor01' component={Sponsor01} />
      <Stack.Screen  name='Sponsor02' component={Sponsor02} />
    </Stack.Navigator>
    );
}
