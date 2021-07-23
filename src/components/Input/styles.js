import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.dark,
    borderBottomWidth: 1,
    width: "90%",
    textAlign: "center",
    marginVertical: 30,
  },
});

export default styles;
