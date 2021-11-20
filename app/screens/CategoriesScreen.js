import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Categories Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
