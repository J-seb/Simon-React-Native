import React from "react";
import { View } from "react-native";

import Button from "../Button/Button";

import styles from "./styles";

function ButtonsGroup({ handleColor, buttonActivated }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button
          onPress={handleColor}
          color="yellow"
          buttonActivated={
            buttonActivated.includes("yellow") ? buttonActivated : "yellow"
          }
        />
        <Button
          onPress={handleColor}
          color="blue"
          buttonActivated={
            buttonActivated.includes("blue") ? buttonActivated : "blue"
          }
        />
      </View>
      <View style={styles.row}>
        <Button
          onPress={handleColor}
          color="green"
          buttonActivated={
            buttonActivated.includes("green") ? buttonActivated : "green"
          }
        />
        <Button
          onPress={handleColor}
          color="red"
          buttonActivated={
            buttonActivated.includes("red") ? buttonActivated : "red"
          }
        />
      </View>
    </View>
  );
}

export default ButtonsGroup;
