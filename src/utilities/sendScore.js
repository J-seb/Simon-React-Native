import getDate from "./getDate";
import getDevice from "./getDevice";

import { createDoc } from "../services/firebaseFirestore";

export default sendScore = async (username, score) => {
  const verifiedName = username ? username : "Unknown";
  const date = getDate();
  const device = await getDevice();

  createDoc(date, device, score, verifiedName);
};
