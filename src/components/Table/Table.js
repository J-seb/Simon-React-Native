import React from "react";
import { View, ScrollView } from "react-native";
import Row from "./Row";
import styles from "./styles";

import headerTable from "../../config/headerTable";

function Table({ scores }) {
  if (scores) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Row
            key={0}
            row={headerTable}
            position={"#"}
            style={styles.tableHeaderRow}
          />
          {scores.map((data, index) => (
            <Row
              key={data.id}
              row={data}
              position={index + 1}
              style={index < scores.length - 1 ? {} : styles.tableFootRow}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
  return null;
}

export default Table;
