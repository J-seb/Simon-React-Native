import { StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "San Francisco",
    fontSize: 15,
    color: colors.dark,
    textAlign: "center",
    marginVertical: 10,
    padding: 0,
  },
});

export default styles;
