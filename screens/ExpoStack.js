import React from 'react';
import { FlatList, StatusBar, Image, TouchableOpacity, Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Video } from 'expo-av'
import uuid from 'uuid/v4';

export default function ComiteScreen({ onPress, navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const avatarSize = 50;
  const spacing = 20;
  const DATA = [
    { 
      id: uuid(),
      name:'Sponsor01',
      image:require('../Assets/Img/Logo.png'),
      page: 'Sponsor01'
    },
    {
      id: uuid(),
      name:'Sponsor02',
      image:require('../Assets/Img/Logo.png'),
      page: 'Sponsor02'
    },
     {
      id: uuid(),
      name:'Sponsor01',
      image:require('../Assets/Img/Logo.png'),
      page: 'Sponsor01'
    },    { 
      id: uuid(),
      name:'Sponsor01',
      image:require('../Assets/Img/Logo.png'),
      page: 'Sponsor01'
    },
    {
      id: uuid(),
      name:'Sponsor02',
      page: 'Sponsor02'
    },
     {
      id: uuid(),
      name:'Sponsor02',
      page: 'Sponsor02'
    }   , { 
      id: uuid(),
      name:'Sponsor01',
      page: 'Sponsor01'
    },
    {
      id: uuid(),
      name:'Sponsor01',
      page: 'Sponsor01'
    },
     {
      id: uuid(),
      name:'',
      city:'',
    }
  ]

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
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            padding: spacing, 
            paddingTop: StatusBar.currentHeight || 42
          }}
          renderItem={({item}) =>{     
            return <TouchableOpacity onPress={()=>navigation.navigate(item.page)}>
              <View style={{flexDirection: 'row', padding: spacing, marginBottom: spacing, borderRadius: 12,
                    backgroundColor: 'rgba(255,255,255,0.8)', shadowColor :'#7f5df0', shadowOffset: {width: 0, height: 10} ,
                    shadowOpacity:0.4, shadowRadius:20
              }}>
                <Image source={item.image} style={{width: avatarSize, height: avatarSize, borderRadius: avatarSize, marginRight: spacing}} />
                <View>
                <Text style={styles.name}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    zIndex:2,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'montserratmedium',
    top:10
  },
});
