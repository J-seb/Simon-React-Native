import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: colors.white,
    elevation: 1,
    opacity: 1,
  },
});
export default styles;
