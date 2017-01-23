import React, { Component } from 'react';
import * as firebase from "firebase";
import {connect, Provider} from 'react-redux';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst} from 'react-native-router-flux'
import {StyleSheet,Text,View} from 'react-native';
import Home from './components/home'
import store from './store'
import Map from './components/map'
import Photo from './components/photos'
import Wiki from './components/wiki'
import Jump from './components/jump'
import {getWiki} from './reducers/data'
// import MainContainer from './containers/MainContainer'

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'white' :'black'}}>{title}</Text>
  );
}



export default class App extends Component {


  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAF9SWV-mzizk0EcPO62HTeg7nxKNtIg84",
      authDomain: "earthjumper-32f34.firebaseapp.com",
      databaseURL: "https://earthjumper-32f34.firebaseio.com",
      storageBucket: "earthjumper-32f34.appspot.com",
      messagingSenderId: "918872819798"
    });
  }





  render(){
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">

          <Scene
            key="tabbar"
            tabs={true}
            tabBarStyle={{ backgroundColor: '#F04A00' }}>

            <Scene key='home' component={Home} title='Home' />

            <Scene key="nextJump" title="Jump" icon={TabIcon}>
              <Scene key='jumper' component={Jump} title='Jump' />
            </Scene>

            <Scene key="info" title="Info" icon={TabIcon}>
              <Scene key='wiki' component={Wiki} title='Wiki' />
              <Scene key='map' component={Map} title='Map' />
            </Scene>

            <Scene key="location" title="Location" icon={TabIcon}>
              <Scene key='map' component={Map} title='Map' />
            </Scene>

            <Scene key="photos" title="Photos" icon={TabIcon}>
              <Scene key='wikiPhotos' component={Photo} title='wikiPhotos' />
            </Scene>
          </Scene>
        </Scene>
      </Router>
    </Provider>
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
