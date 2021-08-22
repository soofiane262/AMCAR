import React from 'react';
import { Dimensions, StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { Video } from 'expo-av'
import { Raleway_900Black } from '@expo-google-fonts/raleway';
import { withOrientation } from 'react-navigation';

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
      <ScrollView>
        <View style={styles.parent1}>
          <View style={styles.button}>
            <Image source={require('../Assets/Avatars/CHRAIBI.png')} style={{width: windowWidth * .38, height: windowHeight * .18,}}/>
            <View style={styles.line1}/>
            <View style={styles.line2}/>
          </View>
          <View>
            <Text style={styles.title}>Pr. CHRAÏBI Saïd</Text>
          </View>
          <View>
            <Text style={styles.function}>Président</Text>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/SCADI.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>El Moustafa SCADI</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>1er Vice Président</Text>
            </View>
          </View>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/BENNOUNA.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>Hamza BENNOUNA</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>2ème Vice Président</Text>
            </View>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/MIR.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>Hassan MIR</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>Secrétaire Général</Text>
            </View>
          </View>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/NAJI.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>Abdelmajid NAJI</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>Secrétaire Général Adjoint</Text>
            </View>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/ZAIMI.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>Siham ZAIMI</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>Trésorière</Text>
            </View>
          </View>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/ABIDI.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>Ghizlane ABIDI</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>Trésorière Adjointe</Text>
            </View>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/LAMRANI.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>Zineb LAMRANI</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>Présidente d’honneur</Text>
            </View>
          </View>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/BENSAFIDDINE.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>Soumaïa{"\n"}BENSAFIDDINE</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>Membre Honoraire</Text>
            </View>
          </View>
        </View>

        <View style={styles.parent0}>
          <View style={styles.parent2}>
            <View style={styles.button}>
              <Image source={require('../Assets/Avatars/SAHER.png')} style={{width: windowWidth * .28, height: windowHeight * .13,}}/>
            </View>
            <View>
              <Text style={styles.innertitle}>Laila SAHER</Text>
            </View>
            <View>
              <Text style={styles.innerfunction}>Membre Honoraire</Text>
            </View>
          </View>
        </View>


        <View style={{top: 75}}>

        <View style={{
    alignSelf: 'center',
    width: windowWidth / 2,
    height: 2,
    position: 'absolute',
    backgroundColor: '#d60115',
    borderRadius: 50,
  }} />
        <Text style={{fontFamily: 'montserratsemibold', fontSize: 20, alignSelf: 'center', top: 25, color: '#03269d',}}>Past Présidents :</Text>
        <Text style={{fontFamily: 'montserratsemibold', fontSize: 15, alignSelf: 'center', top: 30, color: '#000000',}}>Abdesslam SRAIRI - Abdellatif LAKHSSASSI</Text>
        <Text style={{fontFamily: 'montserratsemibold', fontSize: 15, alignSelf: 'center', top: 30, color: '#000000',}}>Mohamed ALAMI - Laila SAHER</Text>
        <Text style={{fontFamily: 'montserratsemibold', fontSize: 15, alignSelf: 'center', top: 30, color: '#000000',}}>Soumaïa BENSAFIDDINE - Hassan MIR</Text>
        <Text style={{fontFamily: 'montserratsemibold', fontSize: 15, alignSelf: 'center', top: 30, color: '#000000',}}>Zineb LAMRANI</Text>
        </View>
        <View style={{height:300}} />
        
        </ScrollView>




        
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    position:'relative',
    zIndex:2,
  },
  parent1:{
    marginTop: 25,
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  parent2:{
    marginTop: 25,
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  parent0:{
    flexDirection: "row",
    justifyContent: "space-around",
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
    justifyContent:"center",
  },
  line1:{
    right: 160,
    alignSelf: 'center',
    width: windowWidth / 5,
    height: 1.5,
    position: 'absolute',
    backgroundColor: '#d60115',
    borderRadius: 50,
  },
  line2:{
    left: 160,
    alignSelf: 'center',
    width: windowWidth / 5,
    height: 1.5,
    position: 'absolute',
    backgroundColor: '#d60115',
    borderRadius: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
  title:{
    top: 5,
    fontSize:20,
    fontFamily: 'montserratsemibold',
    color: '#d60115',
  },
  innertitle:{
    top: 5,
    textAlign: 'center',
    fontSize:17,
    fontFamily: 'montserratsemibold',
    color: '#d60115',
  },
  function:{
    top: 3,
    fontSize: 15,
    fontFamily: 'montserratmedium',
    color: '#000000',
  },
  innerfunction:{
    top: 3,
    fontSize: 11,
    fontFamily: 'montserratmedium',
    color: '#000000',
  },
});
