import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Car Garage" }} />
      <Stack.Screen name="garage" options={{ title: "My Cars" }} />
      <Stack.Screen name="details" options={{ title: "Car Details" }} />
    </Stack>
  );
}
