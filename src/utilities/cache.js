import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache";

const setDataToStore = async (key, value) => {
  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(value));
    console.log("Data saved succesfully!!!");
  } catch (error) {
    console.log(error);
  }
};

const getDataFromStore = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) {
      return null;
    }
    return item;
  } catch (error) {
    console.log(error);
  }
};

export { setDataToStore, getDataFromStore };
