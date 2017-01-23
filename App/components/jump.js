import React, { Component } from 'react';
import MapView from 'react-native-maps';
import * as firebase from "firebase";
import { Router, Scene, Actions } from 'react-native-router-flux';
import store from '../store'
import Button from 'react-native-button';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Wiki from './wiki'
import {getWiki, getCoords, randomWiki} from '../reducers/data'
import { connect } from 'react-redux';
const getNextPlace =()=>{
  store.dispatch(randomWiki)

}


class Jump extends Component{



  render(){
    console.log("IN JUMP",this.props)
    console.log("Button", Button)
  return (

    <View style={styles.container}>
      <Button
        onPress={this.props.randomWiki}
        onPress={()=>Actions.wiki()}

        styleDisabled={{color: 'red'}}
        onPress={this.props.randomWiki}>
        Jump!
      </Button>
    </View>


    );
  }
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

  button: {
      flex: 1,
    justifyContent: 'center',
    color: 'green',
    alignItems: 'center',
    fontSize: 20,

  }

});


function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    randomWiki: function() {
      dispatch(randomWiki())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jump);
