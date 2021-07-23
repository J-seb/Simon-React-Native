import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";

import fonts from "../../config/fonts";
import Text from "../Text/Text";

import colors from "../../config/colors";
import styles from "./style";

function HeaderText({ handleStart, isStarted, level, score }) {
  return (
    <View style={styles.container}>
      <Text color={colors.light} fontFamily={fonts.primary} fontSize={50}>
        Simon Game
      </Text>
      <Text color={colors.light} fontFamily={fonts.secondaryBold} fontSize={30}>
        Follow The Pattern
      </Text>
      <TouchableWithoutFeedback onPressIn={handleStart} disabled={isStarted}>
        <Text color={colors.light} fontFamily={fonts.primary} fontSize={30}>
          {isStarted ? `Level ${level}` : `Start`}
        </Text>
      </TouchableWithoutFeedback>
      <Text
        color={colors.light}
        fontFamily={fonts.secondaryRegular}
        fontSize={30}
      >
        {isStarted ? `Score: ${score}` : ""}
      </Text>
    </View>
  );
}

export default HeaderText;
