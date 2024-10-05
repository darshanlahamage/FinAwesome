import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import colors from '../util/colors';  // Assuming you have a colors file

export default function OfferDetails({ route }) {
  const { data } = route.params; 

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Offer Image */}
      <Image 
        source={require('../assets/travel.jpg')} 
        style={styles.image} 
      />

      {/* Offer Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.header}>{data.ShopName}</Text>
        <Text style={styles.subHeader}>Category: {data.Category}</Text>
        <Text style={styles.subHeader}>SubCategory: {data.SubCategory}</Text>
        <Text style={styles.text}>Start Date: {data.StartDate}</Text>
        <Text style={styles.text}>End Date: {data.EndDate}</Text>
        <Text style={styles.text}>Offer Description:</Text>
        <Text style={styles.description}>{data.OfferDescription1}</Text>
        <Text style={styles.description}>{data.OfferDescription2}</Text>
        <Text style={styles.text}>Payment Mode: {data.PaymentMode}</Text>
        <Text style={styles.text}>Address: {data.Address}</Text>
        <Text style={styles.store}>{data.Store}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.primary,  // Using your primary color
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: '#fff',
    borderWidth: 2,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
    marginBottom: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textColor,  // Assuming you have a text color defined
    marginBottom: 15,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.accentColor,  // Using an accent color if available
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#555',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
    lineHeight: 26,
  },
  store: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textColor,
    marginTop: 20,
    textAlign: 'center',
  },
});