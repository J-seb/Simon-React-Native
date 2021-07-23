import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  table: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tableHeaderRow: {
    borderTopColor: colors.dark,
    borderTopWidth: 2,
    borderBottomColor: colors.dark,
    borderBottomWidth: 2,
  },
  tableFootRow: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 2,
  },
  row: {
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    width: "25%",
  },
});

export default styles;
