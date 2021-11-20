import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import data from "../data/dummydata";
import Carousel, { Pagination } from "react-native-snap-carousel";

const HomeScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);

  //Navigation can be done to category page instead of alert in the following function...
  const renderCategories = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert(`You pressed ${item.category}`)}
      >
        <View style={styles.list}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.category}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCarousel = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          Alert.alert(`Move to Offers Page or Navigate to particular page...`)
        }
      >
        <View key={index}>
          <View>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.carouselImage}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderProducts = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ProductDetailsScreen", {
            title: item.title,
            imageUrl: item.imageUrl,
          })
        }
      >
        <View style={styles.productList} key={index}>
          <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
          <View style={styles.ratingContainer}>
            <Text>{item.rating}</Text>
            <Text>|</Text>
            <Text>{item.buyers}k</Text>
          </View>
          <Text style={styles.productTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.categories}>
              <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderCategories}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={styles.carouselContainer}>
              <Carousel
                layout="default"
                data={data}
                renderItem={renderCarousel}
                sliderWidth={340}
                itemWidth={340}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}
                autoplay
                loop
              />
              <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                dotColor={"orange"}
                inactiveDotColor={"grey"}
                dotContainerStyle={styles.dotContainer}
                dotStyle={styles.dotStyle}
                inactiveDotOpacity={0.5}
                inactiveDotScale={0.6}
              />
            </View>
          </>
        }
        ListFooterComponent={
          <>
            <View style={styles.productContainer}>
              <Text style={styles.heading}>DEALS OF THE DAY</Text>
              <View style={styles.productListContainer}>
                <FlatList
                  data={data}
                  keyExtractor={(item) => item.id}
                  renderItem={renderProducts}
                  numColumns={2}
                />
              </View>
            </View>
          </>
        }
        data={null}
        renderItem={null}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  category: {
    fontSize: 11,
  },
  carouselImage: {
    height: 200,
    width: "100%",
    borderRadius: 5,
  },
  carouselContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  categories: {
    backgroundColor: "#fff",
    elevation: 5,
  },
  dotContainer: {
    marginHorizontal: 6,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: -10,
    backgroundColor: "rgba(0, 0, 0, 0.92)",
  },
  heading: {
    fontSize: 15,
    color: "grey",
    fontWeight: "600",
    margin: 15,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  list: {
    paddingLeft: 10,
    margin: 7,
    alignItems: "center",
  },
  productContainer: {
    width: "98%",
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  productList: {
    margin: 1,
    paddingVertical: 10,
  },
  productImage: {
    width: 180,
    height: 225,
  },
  productListContainer: { alignItems: "center" },
  productTitle: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: "700",
  },
  ratingContainer: {
    position: "absolute",
    bottom: 30,
    left: 7,
    backgroundColor: "#fff",
    flexDirection: "row",
    width: 70,
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default HomeScreen;
