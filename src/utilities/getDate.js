import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(LocalizedFormat);

export default getDate = () => {
  return dayjs(new Date()).format("L");
};
