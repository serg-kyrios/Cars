import { StyleSheet } from "react-native";

export const styleDetails = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //backgroundColor: COLORS.backgroundColor,

    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    color: "red",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  text2: {
    fontSize: 24,
    marginBottom: 10,
  },
  contentFit: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 15,
  },
});
