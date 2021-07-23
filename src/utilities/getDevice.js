import { Platform } from "react-native";
import * as Application from "expo-application";

export default getDeviceId = async () => {
  if (Platform.OS === "android") {
    return Application.androidId;
  } else {
    return await Application.getIosIdForVendorAsync();
  }
};
