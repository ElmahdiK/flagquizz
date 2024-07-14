import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import MyStack from "./navigation";
import Home from "./screens/home";
import Quiz from "./screens/quiz";
import Result from "./screens/result";

const App = (_) => {
  return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
