import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../store/cartSlice';

export default function CartScreen() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image
              source={require('../assets/food.jpg')} 
              style={styles.image}
            />
            <View style={styles.cartContent}>
              <Text style={styles.cartHeader}>{item.ShopName}</Text>
              <Text style={styles.cartDescription} numberOfLines={2}>
                {item.OfferDescription1}
              </Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveFromCart(item.id)}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
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
  cartContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cartHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cartDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 7,
  },
  quantity: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  removeButton: {
    backgroundColor: '#FF9C01',
    padding: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});