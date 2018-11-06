// import { createStackNavigator } from "react-navigation";
// import gettingStarted from "../components/gettingStarted/gettingStarted";
// import Home from "../components/Home/Home";

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     console.log("route index");
//     const StackNav = createStackNavigator(
//       { gettingStarted: { screen: gettingStarted }, Home: { screen: Home } },

//       { initialRouteName: "gettingStarted", headerMode: "none" },
//     );
//     return <StackNav />;
//   }
// }

import React, { Component } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { Container, Button, Text } from "native-base";
import SplashScreen from "react-native-splash-screen";

export default class index extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Button>
          <Text>Button</Text>
        </Button>
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
