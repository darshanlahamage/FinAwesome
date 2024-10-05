import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const Carousel = () => {
  const carouselItems = [
    {
      title: "Travel",
      text: "Get the best deals on credit cards and loans.",
      image: require('../assets/travel.jpg'), 
    },
    {
      title: "Food",
      text: "Hurry up! Don't miss out on our limited-time discounts.",
      image: require('../assets/food.jpg'),
    },
    {
      title: "Electronics",
      text: "Offers tailored just for you based on your preferences.",
      image: require('../assets/Electronics.jpg'),
    },
    {
      title: "jwellery",
      text: "Offers tailored just for you based on your preferences.",
      image: require('../assets/jwellery.jpg'),
    },
    {
      title: "Personalized Recommendations",
      text: "Offers tailored just for you based on your preferences.",
      image: require('../assets/food.jpg'),
    },
  ];

  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={carouselItems}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={screenWidth}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius:10
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Carousel;