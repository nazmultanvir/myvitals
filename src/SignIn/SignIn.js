import React, { Component } from "react";
import {
  Container,
  Header,
  Button,
  Text,
  Body,
  Form,
  Item as FormItem,
  Input,
  Label,
  Title,
} from "native-base";
import { ImageBackground, ScrollView } from "react-native";
export default class SignIn extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../image/login.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Form>
          <FormItem floatingLabel>
            <Label>Email</Label>
            <Input />
          </FormItem>
          <FormItem floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry={true} />
          </FormItem>

          <Button full primary style={{ paddingBottom: 4 }}>
            <Text> Login </Text>
          </Button>
          <Button full light primary>
            <Text> Sign Up </Text>
          </Button>
        </Form>
      </ImageBackground>
    );
  }
}
