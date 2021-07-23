import React from "react";
import { TouchableHighlight, View } from "react-native";

import colors from "../../config/colors";

import styles from "./styles";

function Button({ color = colors.gray, onPress, buttonActivated, children }) {
  return (
    <TouchableHighlight
      activeOpacity={0.95}
      onPressIn={() => onPress(color)}
      underlayColor={colors[color + "Dark"]}
      style={[
        styles.container,
        { backgroundColor: colors[color] },
        { backgroundColor: colors[buttonActivated] },
      ]}
    >
      <View style={styles.internalBox}>{children}</View>
    </TouchableHighlight>
  );
}

export default Button;
