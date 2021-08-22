import React from 'react';
import { Dimensions, StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { Video } from 'expo-av'

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
      <View style={styles.parent1}>
          <View style={styles.button}>
            <Image source={require('../Assets/Avatars/CHRAIBI.png')} style={{width: windowWidth * .38, height: windowHeight * .18,}}/>
            <View style={styles.line1}/>
            <View style={styles.line2}/>
          </View>
          <View>
            <Text style={styles.title}>Pr. CHRAÏBI Saïd</Text>
          </View>
        </View>
        <ScrollView>
          <Text style={{margin: 15}}>



            <Text style={styles.text}>
              {"\n"}{"\n"}
              Mes chers collègues et amis,
              {"\n"}{"\n"}
              Au nom de tous les membres du comité de l’AMCAR,
              je suis ravi et heureux de vous convier aux
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              28èmes Journées Nationales de l’AMCAR
              {' '}
            </Text>
            <Text style={styles.text}>
              qui auront lieu cette année à
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              l’hôtel The View
              {' '}
            </Text>
            <Text style={styles.text}>
              (Royal Atlas) à Agadir.
              {"\n"}
              Ces journées seront comme d’habitude un moment de
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              fraternité, d’amitiés et de partage scientifique.
              {"\n"}{"\n"}
            </Text>
            <Text style={styles.text}>
              De nombreux
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              experts nationaux et internationaux
              {' '}
            </Text>
            <Text style={styles.text}>
              seront au rendez-vous pour discuter et partager avec vous les
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              dernières avancées en cardiologie.
              {"\n"}{"\n"}
            </Text>
            <Text style={styles.text}>
              Durant ces trois jours, nous discuterons de la
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              rythmologie, des cardiopathies congénitales, des valvulopathies, de l’échographie Doppler,
              de l’insuffisance cardiaque, de la maladie coronaire, des facteurs de risque cardiovasculaires
              et de la chirurgie cardiovasculaire.
              {"\n"}{"\n"}
            </Text>
            <Text style={styles.text}>
              La
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              conférence de l’année 
              {' '}
            </Text>
            <Text style={styles.text}>
              sera présentée par le
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              Pr. Atul Pathak
              {' '}
            </Text>
            <Text style={styles.text}>
              sur «Au coeur du cerveau : comment ces deux organes se parlent ?».
              {"\n"}
              Le prolapsus mitral sera au cœur du débat exceptionnel de l’AMCAR cette année et sera traité
              par des spécialistes nationaux et internationaux de renom.
              {"\n"}
            </Text>
            <Text style={styles.boldtext}>
              13 ateliers pratiques
              {' '}
            </Text>
            <Text style={styles.text}>
              seront l’occasion pour nos cardiologues de discuter et de partager les cas cliniques les plus
              insolites en cardiologie. Pour la première fois une session jeunes car- diologues sera l’occasion
              pour nos jeunes talents de présenter leurs travaux de référence. Aussi, les jeunes résidents en
              cardiologie auront la possibilité de présenter leurs travaux scientifiques sous forme de posters
              qui seront comme à l’accoutumée gratifiés par des
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              prix pour les trois premiers travaux.
              {' '}
            </Text>
            <Text style={styles.text}>
              Le meilleur travail sur l’hypertension artérielle pulmonaire, sera récompensé par le
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              prix Actelion.
              {"\n"}{"\n"}
            </Text>
            <Text style={styles.text}>
              Cet année un hommage spécial sera rendu à un grand homme de la cardiologie marocaine: le
              {' '}
            </Text>
            <Text style={styles.boldtext}>
              Professeur Abdeslam Srairi.
              {"\n"}{"\n"}
            </Text>
          <Text style={{margin: 15}}>
            <Text style={styles.text}>
              Je voudrais aussi remercier tous les membres du comité de l’ AMCAR qui ont participé activement à
              l’organisation de ses journées, Les laboratoires pharmaceutiques et sociétés de matériel médical,
              Sigmaco, SB consulting, la société SIGMA, les responsables et le personnel de l’hôtel The View, de
              même que toutes les personnes qui ont aidé de pré ou de loin à la réussite de cette manifestation.
              {"\n"}{"\n"}
              Nous vous attendons nombreux à participer à vos journées.
              {"\n"}{"\n"}
              Vive la cardiologie marocaine
            </Text>
          </Text>            
        </Text>
        <View style={{height:500}} />
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
  text:{
    fontSize:13 ,
    fontFamily: 'montserratsemibold'
  },
  boldtext:{
  fontSize:13 ,
  fontFamily: 'montserratbold'
  },
  parent1:{
    marginTop: 25,
    alignItems: 'center',
    alignContent: 'center',
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
  title:{
    top: 5,
    fontSize:20,
    fontFamily: 'montserratsemibold',
    color: '#d60115',
  },
});
