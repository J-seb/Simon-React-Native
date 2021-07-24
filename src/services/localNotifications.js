import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const showNotification = (content) => {
  Notifications.scheduleNotificationAsync({
    content,
    trigger: {
      seconds: 1,
    },
  });
};

export default showNotification;
