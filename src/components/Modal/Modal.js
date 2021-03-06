import React, { useState } from "react";
import { View, Modal } from "react-native";

import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../../config/colors";
import fonts from "../../config/fonts";
import notifications from "../../config/notifications";
import styles from "./styles";

import showNotification from "../../services/localNotifications";

import ButtonModal from "../ButtonModal/ButtonModal";
import Text from "../Text/Text";
import TextInput from "../Input/TextInput";

function ModalApp({ isOpen, handleSubmit }) {
  const netInfo = useNetInfo();
  const [nick, setNick] = useState("");

  const sendNotification = () => {
    const content =
      netInfo.type !== "unknown" && netInfo.isInternetReachable === false
        ? notifications.error
        : notifications.success;

    showNotification(content);
  };

  return (
    <Modal animationType="slide" visible={isOpen} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text
            color={colors.dark}
            fontFamily={fonts.secondaryBold}
            fontSize={40}
          >
            Game Over
          </Text>

          <TextInput
            width="80%"
            placeholder="Your nick..."
            fontSize={30}
            color={colors.dark}
            value={nick}
            onChangeText={(text) => setNick(text)}
          />
          <View style={styles.buttonContainer}>
            <ButtonModal
              onPress={() => {
                handleSubmit(nick);
                sendNotification();
                setNick("");
              }}
            >
              <Text
                fontFamily={fonts.secondaryRegular}
                fontSize={30}
                color={colors.dark}
              >
                Send
              </Text>
            </ButtonModal>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalApp;
