import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>This is Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default ProfileScreen;
