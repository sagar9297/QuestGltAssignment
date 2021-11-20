import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ProductDetailsScreen = ({ route, navigation }) => {
  const title = route.params.title;
  const imageUrl = route.params.imageUrl;

  useEffect(() => {
    navigation.setOptions({ title: title });
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.productTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  productTitle: {
    fontSize: 25,
    margin: 10,
    fontWeight: "700",
  },
});

export default ProductDetailsScreen;
