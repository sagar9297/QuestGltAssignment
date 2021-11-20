import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const CartScreen = (props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/imgss.png")} style={styles.image} />
      <Text style={styles.text}>
        You don't have any items in the cart right now! Please add some items..
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  text: {
    color: "grey",
    textAlign: "center",
    width: "70%",
  },
});

export default CartScreen;
