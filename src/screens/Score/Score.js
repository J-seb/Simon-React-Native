import React, { useState, useEffect } from "react";
import { View } from "react-native";

import { useNetInfo } from "@react-native-community/netinfo";

import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";
import Medal from "../../components/SvgIcons/Medal";
import Screen from "../../components/Screen/Screen";
import ScoreBackground from "../../components/ScoreBackground/ScoreBackground";
import Table from "../../components/Table/Table";
import Text from "../../components/Text/Text";
import Trophy from "../../components/SvgIcons/Trophy";

import colors from "../../config/colors";
import fonts from "../../config/fonts";
import styles from "./styles";

import { getDataFromStore, setDataToStore } from "../../utilities/cache";

import { readAllDocs } from "../../services/firebaseFirestore";

function Score() {
  const netInfo = useNetInfo();

  const [scores, setScores] = useState();
  const [personalScores, setPersonalScores] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [netInfo.isInternetReachable]);

  const extractDataFromSnapshot = async (snapshot, type) => {
    try {
      let arrayOfDocs = [];
      snapshot.forEach((doc) => {
        arrayOfDocs.push(doc.data());
      });
      if (!type) {
        await setDataToStore("global", arrayOfDocs);

        const data = await getDataFromStore("global");

        setScores([...data]);
      } else {
        await setDataToStore("personal", arrayOfDocs);

        const data = await getDataFromStore("personal");

        setPersonalScores([...data]);

        setIsLoading(false);
      }
    } catch (error) {
      console.log("There was an error", error);
    }
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

  return (
    <>
      <ActivityIndicator visible={isLoading} />
      <ScoreBackground visible={!isLoading} />
      <Screen>
        <View style={styles.container}>
          <View style={styles.tableContainer}>
            <View style={styles.header}>
              <Trophy size={50} />
              <Text
                color={colors.dark}
                fontFamily={fonts.primary}
                fontSize={30}
              >
                World
              </Text>
            </View>
            <Table scores={scores} />
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.header}>
              <Medal size={50} />
              <Text
                color={colors.dark}
                fontFamily={fonts.primary}
                fontSize={30}
              >
                Personal
              </Text>
            </View>
            <Table scores={personalScores} />
          </View>
        </View>
      </Screen>
    </>
  );
}

export default Score;

// IMPLEMENTATION WITH CUSTOM HOOK (TESTING)

// import React from "react";
// import { View } from "react-native";

// import ActivityIndicator from "../../components/ActivityIndicator/ActivityIndicator";
// import Medal from "../../components/SvgIcons/Medal";
// import Screen from "../../components/Screen/Screen";
// import ScoreBackground from "../../components/ScoreBackground/ScoreBackground";
// import Table from "../../components/Table/Table";
// import Text from "../../components/Text/Text";
// import Trophy from "../../components/SvgIcons/Trophy";

// import colors from "../../config/colors";
// import fonts from "../../config/fonts";
// import styles from "./styles";

// import useScores from "../../hooks/useScores";

// function Score() {
//   const scores = useScores("global");
//   const personalScores = useScores("personal");

//   if (scores && personalScores) {
//     return (
//       <>
//         <ScoreBackground visible={scores && personalScores} />
//         <Screen>
//           <View style={styles.container}>
//             <View style={styles.tableContainer}>
//               <View style={styles.header}>
//                 <Trophy size={50} />
//                 <Text
//                   color={colors.dark}
//                   fontFamily={fonts.primary}
//                   fontSize={30}
//                 >
//                   World
//                 </Text>
//               </View>
//               <Table scores={scores} />
//             </View>
//             <View style={styles.tableContainer}>
//               <View style={styles.header}>
//                 <Medal size={50} />
//                 <Text
//                   color={colors.dark}
//                   fontFamily={fonts.primary}
//                   fontSize={30}
//                 >
//                   Personal
//                 </Text>
//               </View>
//               <Table scores={personalScores} />
//             </View>
//           </View>
//         </Screen>
//       </>
//     );
//   }

//   return <ActivityIndicator visible={!personalScores && !scores} />;
// }

// export default Score;
