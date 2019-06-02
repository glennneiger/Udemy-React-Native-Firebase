import React, { Component } from 'react';
import { View } from 'react-native' ;
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAeZNJBaYO08-__PAXiCQtr2Ci-cNdTko4",
      authDomain: "authentication-50d10.firebaseapp.com",
      databaseURL: "https://authentication-50d10.firebaseio.com",
      projectId: "authentication-50d10",
      storageBucket: "authentication-50d10.appspot.com",
      messagingSenderId: "335621340857",
      appId: "1:335621340857:web:3a9f121de8e13beb"
    });
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
