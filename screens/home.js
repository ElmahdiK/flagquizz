import React, { Component } from "react";
import { StyleSheet, Image, Text, TouchableOpacity, View } from "react-native";
import Title from "../components/title";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title titleText="FLAG QUIZ" />
      <View style={styles.bannerContainer}>
        {/* <Image
          source={{
            uri: "https://media.istockphoto.com/id/1436529339/fr/vectoriel/dessin-anim%C3%A9-plan%C3%A8te-terre-sur-fond-blanc.jpg?s=612x612&w=0&k=20&c=y1gZRSirTj-a0f99PBWL0H2iKE_sIS6Jvj9MtzescsM=",
          }}
          style={styles.banner}
          resizeMode="contain"
        /> */}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffeb3b",
    paddingTop: 60,
    paddingHorizontal: 40,
    height: "100%",
  },
  banner: {
    width: '100%',
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
  }
});
