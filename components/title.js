import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

const Title = ({ titleText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 26,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontSize: 42,
    fontWeight: "800",
  },
});
