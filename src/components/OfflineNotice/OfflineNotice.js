import React from "react";
import { View } from "react-native";

import { useNetInfo } from "@react-native-community/netinfo";

import Text from "../Text/Text";

import styles from "./styles";

function OfflineNotice() {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          No Internet Connection. Your attempts might not be saved.
        </Text>
      </View>
    );
  }

  return null;
}

export default OfflineNotice;
