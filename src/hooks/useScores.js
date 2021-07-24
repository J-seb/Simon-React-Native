// IMPLEMENTATION FOR TESTING, NOT USED YET

// import { useState, useEffect } from "react";
// import { useNetInfo } from "@react-native-community/netinfo";
// import { readAllDocs } from "../services/firebaseFirestore";
// import { getDataFromStore, setDataToStore } from "../utilities/cache";

// function useScores(type) {
//   const netInfo = useNetInfo();
//   const [scores, setScores] = useState();

//   useEffect(() => {
//     getDataAsync();
//   }, []);

//   const extractDataFromSnapshot = (snapshot, type) => {
//     let arrayOfDocs = [];
//     snapshot.forEach((doc) => {
//       arrayOfDocs.push(doc.data());
//     });
//     setDataToStore(type, arrayOfDocs);
//     setScores([...arrayOfDocs]);
//   };

//   const getDataAsync = async () => {
//     console.log(netInfo.isInternetReachable);
//     if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
//       console.log("Reading Offline!");
//       const docs = await getDataFromStore(type);
//       setScores([...docs]);
//     } else {
//       console.log("Reading Online!");
//       try {
//         await readAllDocs(
//           (snapshot) => extractDataFromSnapshot(snapshot, type),
//           type
//         );
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   return scores;
// }

// export default useScores;
