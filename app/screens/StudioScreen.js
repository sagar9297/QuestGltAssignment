import React from "react";
import { StyleSheet, View, Text } from "react-native";

const StudioScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Studio Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default StudioScreen;
