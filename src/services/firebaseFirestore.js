import firebase from "./firebase";
import getDevice from "../utilities/getDevice";

const db = firebase.firestore();
const collectionName = "scores";

const createDoc = async (date, device, score, username) => {
  const ref = db.collection(collectionName).doc();
  return db.collection(collectionName).doc(ref.id).set({
    username,
    score,
    date,
    id: ref.id,
    device,
  });
};

const readAllDocs = async (callback, type) => {
  const device = await getDevice();

  if (type === "personal") {
    return db
      .collection(collectionName)
      .where("device", "==", device)
      .orderBy("score", "desc")
      .limit(5)
      .onSnapshot(callback);
  }
  return db
    .collection(collectionName)
    .orderBy("score", "desc")
    .limit(5)
    .onSnapshot(callback);
};

export { createDoc, readAllDocs };
