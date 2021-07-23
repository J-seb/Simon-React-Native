import { useState } from "react";
import { useNetInfo } from "@react-native-community/netinfo";

function useScores(type) {
  const netInfo = useNetInfo();
  const [scores, setScores] = useState();

  useEffect(() => {
    getData();
  }, [netInfo.isInternetReachable]);

  const extractDataFromSnapshot = async (snapshot) => {
    let arrayOfDocs = [];
    snapshot.forEach((doc) => {
      arrayOfDocs.push(doc.data());
    });

    return arrayOfDocs;
  };

  const getData = async () => {
    setIsLoading(true);
    const isOnline = netInfo.isInternetReachable;
    if (isOnline) {
      console.log("Reading Online!");
      try {
        readAllDocs((snapshot) => extractDataFromSnapshot(snapshot));
        readAllDocs(
          (snapshot) => extractDataFromSnapshot(snapshot, "personal"),
          "personal"
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      const globalScores = await getDataFromStore("global");
      const personalScores = await getDataFromStore("personal");

      setScores([...globalScores]);
      setPersonalScores([...personalScores]);

      setIsLoading(false);
    }
  };
  return {};
}

export default useGlobalScores;
