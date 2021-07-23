import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: colors.gray,
    borderRadius: 30,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  internalBox: {
    width: 130,
    height: 130,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: colors.black,
  },
});
