import React, { Component } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import Title from "../components/title";

const Result = ({ navigation, route }) => {
  const { score } = route.params;
  const resultBanner = score>5?"https://cdn3d.iconscout.com/3d/premium/thumb/successful-man-3025713-2526911.png":"https://cdn3d.iconscout.com/3d/premium/thumb/failed-to-upload-5000814-4165673.png"
  
  return (
    <View style={styles.container}>
      <Title titleText="RESULTS" />
      <Text style={styles.scoreValue}>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffeb3b",
    paddingTop: 60,
    paddingHorizontal: 40,
    height: "100%",
  },
  banner: {
    width: 300,
    height: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "400",
    textTransform:'uppercase'
  },
  scoreValue: {
    padding:10,
    fontSize: 30,
    color: "#000",
    fontWeight: "800",
    alignSelf: "center",
  },
});
