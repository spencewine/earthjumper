import React, { Component } from 'react';
import MapView from 'react-native-maps';
import * as firebase from "firebase";
import { Router, Scene, Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default (props)=>{



   console.log("photo PROPS", props)
    return (
      <View style={styles.container}>
        <Text>
          {'photos'}
        </Text>
      </View>

    )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    paddingTop: 250,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
