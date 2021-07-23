import React from "react";
import { TextInput } from "react-native";
import colors from "../../config/colors";
import styles from "./styles";
import { useFonts, Play_400Regular } from "@expo-google-fonts/play";
import fonts from "../../config/fonts";

function TextInputApp({ width, fontSize, color, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    Play_400Regular,
  });
  return (
    <TextInput
      placeholderTextColor={colors.dark}
      style={[
        styles.text,
        { fontSize, fontFamily: fonts.secondaryRegular, color, width },
      ]}
      {...otherProps}
    />
  );
}

export default TextInputApp;
