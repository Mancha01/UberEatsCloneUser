import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RestaurantItem from "./src/components/RestaurantItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! ooo</Text>
      <StatusBar style="auto" />
      <RestaurantItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
