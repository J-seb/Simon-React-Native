import "./src/utilities/setTimer";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./src/screens/Home/Home";
import Score from "./src/screens/Score/Score";
import { View, Platform, Text } from "react-native";
import NavigationTheme from "./src/navigation/NavigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <>
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
      {/* <Score /> */}
      {/* <View>
        <Text>{Application.androidId}</Text>
      </View> */}
    </>
  );
}
