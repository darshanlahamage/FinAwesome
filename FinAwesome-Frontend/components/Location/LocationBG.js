import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout, Circle } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux';
import { addHistoryItem } from '../../store/historySlice';
import axios from 'axios';

const LocationBG = () => {
  const dispatch = useDispatch();
  const [pin, setPin] = useState({
    latitude: 19.1231749,
    longitude: 72.8357434,
  });
  const [offersNear, setOffersNear] = useState([]);
  const [locationError, setLocationError] = useState(null);

  // Fetch offers near the user
  useEffect(() => {
    axios
      .get(
        'https://www.icicibank.com/content/icicibank.nearbyoffers.0.6.mumbai.19_1803418.72_8346011.store.sort.searchTerm.filters.json'
      )
      .then((response) => {
        const res = response.data;
        setOffersNear(res);
      })
      .catch((error) => {
        console.error('Error fetching offers:', error);
      });
  }, []);

  // Get current location
  useEffect(() => {
    ( async() => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationError('Permission to access location was denied');
        return;
      }

  let loc = await Location.getCurrentPositionAsync({});
      setPin({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });

      // Add location to Redux history
      dispatch(
        addHistoryItem({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        })
      );
      console.log('lat---',loc);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: pin.latitude,
          longitude: pin.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        <Marker coordinate={pin} title="Your Position" pinColor="orange">
          <Callout>
            <Text>Your position</Text>
          </Callout>
        </Marker>

        {offersNear.map((offer, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude:parseFloat(offer.Latitude) ,
              longitude: parseFloat(offer.Longitude),
            }}
            title={offer.name} // Assuming there's a name field in the offer
            pinColor="yellow"
          >
            <Callout>
              <Text>{offer.ShopName}</Text>
              <Text>{offer.OfferDescription1}</Text> 
              <Text>{offer.OfferDescription2}</Text> 
            </Callout>
          </Marker>
        ))}

        <Circle center={pin} radius={100} />
      </MapView>
    </View>
  );
};

export default LocationBG;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});