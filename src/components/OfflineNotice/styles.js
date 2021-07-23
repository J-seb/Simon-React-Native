import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.red,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: "100%",
    elevation: 1,
  },
  text: {
    color: colors.white,
  },
});

export default styles;
