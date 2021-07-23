import React from "react";
import { View } from "react-native";

import LottieView from "lottie-react-native";

import lotties from "../../config/lotties";
import styles from "./styles";

const ScoreBackground = ({ visible = false }) => {
  if (visible) {
    return (
      <View style={styles.overlay}>
        <LottieView autoPlay loop source={lotties.scores} />
      </View>
    );
  }
  return null;
};

export default ScoreBackground;
