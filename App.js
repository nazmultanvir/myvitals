import React, { Component } from "react";
import { StatusBar, StyleSheet, Image } from "react-native";
import { Container, Button, Text } from "native-base";
import SplashScreen from "react-native-splash-screen";

import { createStackNavigator } from "react-navigation";
import Home from "./src/Home/Home";
import gettingStarted from "./src/gettingStarted/gettingStarted";
import SignIn from "./src/SignIn/SignIn";

const MainRouter = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    gettingStarted: {
      screen: gettingStarted,
    },
    SignIn: {
      screen: SignIn,
    },
  },
  {
    initialRouteName: "gettingStarted",
    headerMode: "none",
  },
);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor={"transparent"} translucent />
        <MainRouter />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
