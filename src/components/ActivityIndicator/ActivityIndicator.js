import React from "react";
import { View } from "react-native";

import LottieView from "lottie-react-native";

import lotties from "../../config/lotties";
import styles from "./styles";

const ActivityIndicator = ({ visible = false }) => {
  if (visible) {
    return (
      <View style={styles.overlay}>
        <LottieView autoPlay loop source={lotties.loading} />
      </View>
    );
  }
  return null;
};

export default ActivityIndicator;
