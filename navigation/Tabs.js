import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProgramScreen from '../screens/ProgramScreen';
import ComScreen from '../screens/ComScreen';
import InfosScreen from '../screens/InfosScreen';
import SpeakersScreen from '../screens/SpeakersScreen';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View,  Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

const Tab = createBottomTabNavigator();
const windowHeight = Dimensions.get('window').height;
const plat = Platform.OS === 'ios';
const stl = plat ? windowHeight/12 - 55 : windowHeight/13 - 60;
const stli = plat ? windowHeight/12 - 50 : windowHeight/13 - 55;
const hei = plat ? windowHeight / 8 - 15 : windowHeight / 8 - 10;
const PhoneSize = () => {
    if (windowHeight <= 700) {
        return plat ? 5: 2;    
    }
    else if (windowHeight > 700 && windowHeight <= 900) {
        return plat ? 20 : 4;    
   }
   else {
        return plat ? 25 : 4;    
    }
}

const Tabs =()=>{    
    let [fontsLoaded] = useFonts({
        'montserratlight': require('../Assets/Fonts/montserratlight.ttf'),
        'montserratmedium': require('../Assets/Fonts/montserratmedium.ttf'),
        'montserratbold': require('../Assets/Fonts/montserratbold.ttf'),
        'montserratsemibold': require('../Assets/Fonts/montserratsemibold.ttf'),
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    else {
        return(
            <Tab.Navigator
                screenOptions={({route})=>({
                    tabBarLabel: ({focused}) =>{ return },                        
                })}
                    tabBarOptions={{
                        style: {
                            position: 'absolute',
                            bottom:20,
                            left:10,
                            right:10,
                            elevation:0,
                            backgroundColor:'#ffffff',
                            borderRadius:15,
                            height:hei,
                            ...styles.iconshadow
                        }
                    }}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Icon name="home" size={focused ? 30 : 25} style={{top: focused ? stl : stli,color: focused ? '#d60115': '#748c94'}} />
                            <Text style={{top:PhoneSize(), color: focused ? '#d60115': '#748c94', fontFamily:'montserratlight', fontSize: 15, opacity: focused ? 1 : 0}}>Home</Text>
                        </View>
                    ),
                    tabBarButton: (props) =>(
                        <TouchableOpacity {...props} />
                    )
                }} />
                <Tab.Screen name="Program" component={ProgramScreen} options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems:'center',justifyContent:'center',}}>
                            <Icon name="calendar" size={focused ? 32 : 25} style={{top: focused ? stl : stli, color: focused ? '#d60115': '#748c94'}} />
                            <Text style={{top:PhoneSize(), color: focused ? '#d60115': '#748c94', fontFamily:'montserratlight', fontSize: 15, opacity: focused ? 1 : 0}}>Program</Text>
                        </View>
                    ),
                    tabBarButton: (props) =>(
                        <TouchableOpacity {...props} />
                    )
                }} />
                <Tab.Screen name="Speakers" component={SpeakersScreen} options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems:'center',justifyContent:'center',}}>
                            <Icon name="chatbox-ellipses" size={focused ? 32 : 25} style={{top: focused ? stl : stli , color: focused ? '#d60115': '#748c94'}} />
                            <Text style={{top:PhoneSize(), color: focused ? '#d60115': '#748c94', fontFamily:'montserratlight', fontSize: 15, opacity: focused ? 1 : 0}}>Speakers</Text>
                        </View>
                    ),
                    tabBarButton: (props) =>(
                        <TouchableOpacity {...props} />
                    )
                }} /> 
                <Tab.Screen name="Com" component={ComScreen} options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Icon name="videocam" size={focused ? 35 : 29} style={{top: focused ? stl : stli,paddingLeft:5, color: focused ? '#d60115': '#748c94'}} />
                            <Text style={{top:PhoneSize(), color: focused ? '#d60115': '#748c94', fontFamily:'montserratlight', fontSize: 15, opacity: focused ? 1 : 0}}>Com.</Text>
                        </View>
                    ),
                    tabBarButton: (props) =>(
                        <TouchableOpacity {...props} />
                    )
                }} />
                <Tab.Screen name="Infos" component={InfosScreen} options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Icon name="information-circle" size={focused ? 36 : 29} style={{top: focused ? stl : stli,color: focused ? '#d60115': '#748c94'}} />
                            <Text style={{top:PhoneSize(), color: focused ? '#d60115': '#748c94', fontFamily:'montserratlight', fontSize: 15, opacity: focused ? 1 : 0}}>Infos</Text>
                        </View>
                    ),
                    tabBarButton: (props) =>(
                        <TouchableOpacity {...props} />
                    )
                }} />
            </Tab.Navigator>   
        )
    }
}

export default Tabs;

const styles=StyleSheet.create({
    iconshadow:{
        shadowColor:'#7f5df0',
                shadowOpacity:0.25,
                shadowRadius:3.5,
                shadowOffset:{
                width:0,
                height:10,
                elevation:5
            },
    }
})
    