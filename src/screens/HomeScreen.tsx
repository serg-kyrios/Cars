import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>🚗 Welcome to Car Garage</Text>

      <Button title="Open Garage" onPress={() => router.push("/garage")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  bottom: {
    position: "absolute",
    bottom: 100,
    marginBottom: 100,
  },
});
