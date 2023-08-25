import React from "react";
import { View, Text, StyleSheet } from "react-native";

const App = () => {
  const name = "Muhammad Awais Siddiqui";
  const rollNumber = "201370006";

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to my App, hehe:)</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Roll Number: {rollNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;
