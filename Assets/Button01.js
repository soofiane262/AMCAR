import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av'

export default function RoundButton({ text, onPress, navigation }) {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const styles = StyleSheet.create({
        parent:{
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: 'wrap',
            marginBottom:15,
        },
        button: {
            flexDirection: "row",
            shadowColor:'#838383',
            shadowOpacity:0.7,
            shadowRadius:7,
            shadowOffset:{
                width:8,
                height:5
            },
            borderRadius: 15,
            width: windowWidth-40,
            height: 70,
    
            backgroundColor: '#03269d'
        },
        buttonText: {
            color: '#ffffff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            fontSize: 16,
            textAlign: 'center',
            top:8,
            left:40
        },
        names:{
            marginBottom:15,
            marginTop:10,
            justifyContent: 'center',
            alignItems: 'center',
        },
        texts:{
            fontSize:20 ,
            fontFamily: 'montserratsemibold',
            color: '#ffffff',
            left:60,
            
        },
    })
    
    return(
        <View>
            <Video
                style={{zIndex:0, height: windowHeight+2, width:windowWidth+2, position:'absolute', top:-2, right:0, left:0, bottom:0}}
                shouldPlay
                repeat
                source={require('./Vid/LoopVid.mp4')}
                resizeMode="cover"
                isLooping
            />
            <View style={{zIndex:2, position:'relative'}}>
                <View style={{
                    flex:1,
                    marginTop: 130,
                    alignItems: 'center',
                    justifyContent: 'center',}}
                >
                <Image source={require('../Assets/Img/AfficheHome.png')} style={{width: windowWidth * .9, height: windowHeight * .3,}} />
                </View>
                <View style={{marginTop: 140}}>
                    <ScrollView>
                        <View style={styles.parent}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Program')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="calendar-outline" size={45} /></Text>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Programme</Text>
                                </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.parent}>
                            <TouchableOpacity title='President' onPress={()=>navigation.navigate('Président')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="clipboard-outline" size={45}/></Text>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Mot du Prés.</Text>
                                </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        
                        <View style={styles.parent}> 
                            <TouchableOpacity onPress={()=>navigation.navigate('Comité')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="people-outline" size={45}/></Text>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Comité</Text>
                                </View>
                                </View>
                            </TouchableOpacity >  
                            </View>

                        <View style={styles.parent}> 

                            <TouchableOpacity onPress={()=>navigation.navigate('Live')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="camera-outline" size={45}/></Text>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Live</Text>
                                </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.parent}> 
                            <TouchableOpacity onPress={()=>navigation.navigate('Speakers')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="chatbox-ellipses-outline" size={45}/></Text>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Speakers</Text>
                                </View>
                                </View>
                            </TouchableOpacity>
                            </View>

                        <View style={styles.parent}> 

                            <TouchableOpacity onPress={()=>navigation.navigate('Com')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="videocam-outline" size={45}/></Text>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Com.</Text>
                                </View>
                                </View>
                            </TouchableOpacity>                        
                        </View>

                        <View style={styles.parent}> 
                            <TouchableOpacity onPress={()=>navigation.navigate('Exposition')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="map-outline" size={45}/></Text>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Exposition</Text>
                                </View>
                                </View>
                            </TouchableOpacity>
                            </View>

                        <View style={styles.parent}> 

                            <TouchableOpacity onPress={()=>navigation.navigate('Sponsors')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="ribbon-outline" size={45}/></Text>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Sponsors</Text>
                                </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{height:500}} />
                    </ScrollView>
                </View>
            </View>
        </View>
    )  
}




