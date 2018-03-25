import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
        <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }} >
        Pendidikan Teknik Informatika</Text>
      </View>
        <View style={styles.box2}>
          <Text style={styles.text}>SLIDER</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.box5}>
          <View style={{width: 40, height: 40, backgroundColor: 'powderblue'}}/>
          <View style={{width: 40, height: 40, backgroundColor: 'powderblue'}} />
          <View style={{width: 40, height: 40, backgroundColor: 'powderblue'}} />
          <View style={{width: 40, height: 40, backgroundColor: 'powderblue'}} />
          </View>
          <View style={styles.box6}>
          <View style={{width: 40, height: 40, backgroundColor: 'powderblue'}}/>
          <View style={{width: 40, height: 40, backgroundColor: 'powderblue'}} />
          <View style={{width: 40, height: 40, backgroundColor: 'powderblue'}} />
          <View style={{width: 40, height: 40, backgroundColor: 'powderblue'}} />
          </View>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>#JaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#800000',
    alignItems: 'center',
  },
  box2:{
    flex: 1,
    backgroundColor: '#FFC0CB',
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'space-around',
    //alignItems: 'center'
  },
  box3: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  box5: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'maroon',
    alignItems: 'center',
  width: 300,
height: 40,
    /*marginTop:0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom:0*/
  },
    box6: {
      flex: 2,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: 'maroon',
      alignItems: 'center',
    width: 300,
  height: 40,
    /*  marginTop: 0,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 0*/
    },
  box4: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
  },
  text: {
    fontSize: 20
  },
});
