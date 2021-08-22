import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ScrollView, Image, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Video } from 'expo-av'

export default function RoundButton({ text, onPress, navigation }) {

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
 
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
                <Image source={require('../Assets/Img/AfficheHome.png')} style={{width: windowWidth, height: windowHeight * .31,}} />
                </View>
                <View style={{marginTop: 140}}>
                    <ScrollView>
                        <View style={styles.parent}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Program')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="calendar-outline" size={50} /></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Programme</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity title='President' onPress={()=>navigation.navigate('Président')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="clipboard-outline" size={50}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Mot du Prés.</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.parent}>
                            <TouchableOpacity onPress={()=>navigation.navigate("Comité de l'AMCAR")}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="people-outline" size={55}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Comité</Text>
                                </View>
                            </TouchableOpacity >
                            <TouchableOpacity onPress={()=>navigation.navigate('Live')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="radio-outline" size={50}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Live</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.parent}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Speakers')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="chatbox-ellipses-outline" size={50}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Speakers</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('Com')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="document-text-outline" size={50}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Com.</Text>
                                </View>
                            </TouchableOpacity>                        
                        </View>


                        <View style={styles.parent}> 
                            <TouchableOpacity onPress={()=>navigation.navigate('Exposition')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="map-outline" size={50}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Exposition</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('Sponsors')}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}><Icon name="ribbon-outline" size={50}/></Text>
                                </View>
                                <View style={styles.names}>
                                    <Text style={styles.texts}>Sponsors</Text>
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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    parent:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: 'wrap',
    },
    button: {
        shadowColor:'#838383',
        shadowOpacity:0.8,
        shadowRadius:7,
        shadowOffset:{
            width:8,
            height:5
        },
        borderRadius: 20,
        backgroundColor:'#03269d',
        width: windowWidth/4,
        borderWidth: 2,
        borderColor: '#d60115',
        height: windowWidth/4,
        justifyContent:"center",
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
    names:{
        marginBottom:15,
        marginTop:10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    texts:{
        fontSize:13 ,
        fontFamily: 'montserratsemibold'
    },
})



