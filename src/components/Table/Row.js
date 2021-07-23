import React from "react";
import { View } from "react-native";
import Text from "../Text/Text";

import styles from "./styles";
import fonts from "../../config/fonts";
import colors from "../../config/colors";

function Row({ row, position, style }) {
  return (
    <View style={[styles.row, style]}>
      <View style={[styles.cell, { width: 50 }]}>
        <Text
          fontFamily={fonts.secondaryRegular}
          fontSize={20}
          color={colors.dark}
        >
          {position}
        </Text>
      </View>
      <View style={[styles.cell, { width: 125 }]}>
        <Text
          fontFamily={fonts.secondaryRegular}
          fontSize={20}
          color={colors.dark}
        >
          {row.username}
        </Text>
      </View>
      <View style={[styles.cell, { width: 50 }]}>
        <Text
          fontFamily={fonts.secondaryRegular}
          fontSize={20}
          color={colors.dark}
        >
          {row.score}
        </Text>
      </View>
      <View style={[styles.cell, { width: 125 }]}>
        <Text
          fontFamily={fonts.secondaryRegular}
          fontSize={20}
          color={colors.dark}
        >
          {row.date}
        </Text>
      </View>
    </View>
  );
}

export default Row;
