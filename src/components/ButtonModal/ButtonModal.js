import React from "react";
import { TouchableHighlight, View } from "react-native";

import colors from "../../config/colors";

import styles from "./styles";

function ButtonModal({ onPress, children }) {
  return (
    <TouchableHighlight
      activeOpacity={0.7}
      onPressIn={onPress}
      underlayColor={colors.greenDark}
      style={[styles.container]}
    >
      <View style={styles.internalBox}>{children}</View>
    </TouchableHighlight>
  );
}

export default ButtonModal;
