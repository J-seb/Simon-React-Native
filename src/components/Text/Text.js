import React from "react";
import { Text } from "react-native";

import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { Play_400Regular, Play_700Bold } from "@expo-google-fonts/play";
import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";
import styles from "./styles";

function AppText({ fontFamily, fontSize, color, children, ...otherProps }) {
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    Play_400Regular,
    Play_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Text
      style={[styles.text, { fontFamily, fontSize, color }]}
      {...otherProps}
    >
      {children}
    </Text>
  );
}

export default AppText;
