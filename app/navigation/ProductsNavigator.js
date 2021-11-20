import React from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const Icon = ({ name, onPress, style }) => {
  return (
    <View style={style}>
      <Feather name={name} color="black" size={25} onPress={onPress} />
    </View>
  );
};

const ProductsNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: () => <Text style={styles.headerTitle}>Shop</Text>,
          headerLeft: () => (
            <Icon name="menu" onPress={() => navigation.openDrawer()} />
          ),
          headerRight: () => (
            <View style={styles.iconsContainer}>
              <Icon
                name="search"
                onPress={() => {
                  Alert.alert("You pressed search icon");
                }}
                style={styles.rightIcons}
              />
              <Icon
                name="bell"
                onPress={() => {
                  Alert.alert("You pressed bell icon");
                }}
                style={styles.rightIcons}
              />
              <Icon
                name="heart"
                onPress={() => {
                  Alert.alert("You pressed heart icon");
                }}
                style={styles.rightIcons}
              />
              <Icon
                name="shopping-bag"
                onPress={() => navigation.navigate("Cart")}
                style={styles.rightIcons}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 21,
    fontWeight: "700",
    marginLeft: 20,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  rightIcons: {
    marginHorizontal: 8,
  },
});

export default ProductsNavigator;
