import React, { Component } from 'react';
import MapView from 'react-native-maps';
import * as firebase from "firebase";
import { Router, Scene, Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {connect} from 'react-redux'




export const Map = (props)=>{
  console.log("MAP PROPS", props)
  let longitude = props.mapCoords.location.lng
  let latitude = props.mapCoords.location.lat
  return (

      <MapView

      style={{flex: 1}}

      mapType='hybrid'
      showPointsOfInterest={true}
      pitchEnabled={true}
      showScale={true}
      zoomEnabled={true}
      region={{
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 3,
      longitudeDelta:3

    }}>

      <MapView.Marker coordinate={{latitude: latitude,
      longitude: longitude}}/>
    </MapView>







  )
}

const mapStateToProps = (state) => {
  console.log("WIKI STATE MAP",state)
    return {
      mapCoords: state.data.mapCoords,

    };
}



const mapDispatchToProps = (dispatch) => {
    return {


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
