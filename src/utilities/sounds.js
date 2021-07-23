import { Audio } from "expo-av";
import sounds from "../config/sounds";

export default playSoundColor = async (color) => {
  const { sound } = await Audio.Sound.createAsync(sounds[color]);
  await sound.playAsync();
};
