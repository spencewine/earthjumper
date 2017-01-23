import React, { Component } from 'react';
import MapView from 'react-native-maps';
import * as firebase from "firebase";
import { Router, Scene, Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {getWiki, randomWiki} from '../reducers/data'
import store from '../store'
import {connect} from 'react-redux'



export const Wiki = (props)=>{

   console.log("WIKI PROPS", props)
    return (
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize: 16, justifyContent: 'flex-end'}}>
          {props.wikiPage}:
        </Text>
        <Text>{props.wikiText}</Text>
      </View>

    )
}

const mapStateToProps = (state) => {
  console.log("WIKI STATE",state)
    return {
      wikiPage: state.data.wikiPage,
      wikiText: state.data.wikiText
    };
}



const mapDispatchToProps = (dispatch) => {
    return {
      addWiki: ()=>
       (dispatch=>(dispatch(randomWiki())))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wiki)




const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingLeft:20,
    paddingRight:20,
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
