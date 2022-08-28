import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const RestaurantItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        }}
        style={styles.img}
      />
      <Text style={styles.txt}>El Cabo Coffe Bar Tres De Mayo</Text>
      <Text style={styles.txt1}></Text>
      <View style={styles.contain}>
        <Text style={styles.txt1}>$1.99</Text>
        <Text style={styles.txt1}>15-30 minutes</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 500,
    paddingLeft: "3%",
  },
  img: {
    width: "97%",
    height: 300,
  },
  txt: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 5,
  },
  txt1: {
    fontSize: 10,
    color: "grey",
    marginLeft: 5,
  },
  contain: {
    flexDirection: "row",
  },
});
export default RestaurantItem;
