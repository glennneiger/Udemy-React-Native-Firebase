import React, { Component } from 'react';
import { View } from 'react-native' ;
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component{

  state = { loggedIn: null };

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

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent(){
    switch (this.state.loggedIn){
      case true:
        return (
          <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner size="large" /></CardSection>
;
    }
  }

  render(){
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
