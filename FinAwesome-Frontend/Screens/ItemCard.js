import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cartSlice'; 
import { AntDesign } from '@expo/vector-icons'; 

export default function ItemCard({ data }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(data)); 
  };

  return (
    <TouchableOpacity 
      style={styles.cardItem} 
      onPress={() => navigation.navigate('OfferDetails', { data })}
    >
      <Image 
        source={require('../assets/food.jpg')} 
        style={styles.image} 
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardHeader}>{data.ShopName}</Text>
        <Text style={styles.cardDescription} numberOfLines={2}>
          {data.OfferDescription1}
        </Text>
        <Text style={styles.expiry} >
          View More ...
        </Text>
        <View style={styles.actionContainer}>
          <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    height: 140,
  },
  image: {
    width: 120,
    height: 'auto',
    borderRadius: 10,
    marginRight: 10,
    objectFit: 'fit',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 7,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 7,
  },
  actionContainer: {
    alignItems: 'center',
    marginLeft: 130,
  },
  addToCartButton: {
    backgroundColor: '#FF9C01',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  expiry: {
    marginTop: 5,
  },
});