import React, { Component } from 'react';
import MapView from 'react-native-maps';
import * as firebase from "firebase";
import { Router, Scene, Actions } from 'react-native-router-flux';
import store from '../store'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


import {getWiki, getCoords, randomWiki} from '../reducers/data'


const onGetPage = (nextRouterState)=>{
   store.dispatch(randomWiki())

 }

export default (props) => {
  console.log("IN HOME CONTAINER")
  onGetPage()
  return (

    <Text style={styles.welcome}
    onPress={()=>Actions.wiki()}>WELCOME TO EARTHJUMPER</Text>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    paddingTop: 100,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
