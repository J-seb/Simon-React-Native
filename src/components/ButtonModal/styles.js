import { StyleSheet } from "react-native";
import colors from "../../config/colors";

export default StyleSheet.create({
  container: {
    width: 120,
    height: 60,
    backgroundColor: colors.green,
    borderRadius: 30,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  internalBox: {
    width: 110,
    height: 50,
    borderRadius: 25,
    borderLeftColor: colors.green,
    borderTopColor: colors.green,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});
