import { useCallback, useEffect, useState } from 'react';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ActivityIndicator, ScrollView, SafeAreaView, Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ItemCard from './ItemCard';
import axios from 'axios'
import Carousel from '../components/carousel';
import { useDispatch } from 'react-redux';
import { setOffers } from '../store/offerSlice';


export default function HomeScreen(props) {
   const dispatch = useDispatch();
   const[offer, setOffer] = useState([])
   let res;

   useEffect(() => {
        axios.get('*****.amazonaws.com/offers')
         .then((response) => {
           res = response.data.result
         //   console.log('Offers in your City ',res)
           setOffer(res);
           dispatch(setOffers(offer));
         });
     }, []);
     


   return (
         <SafeAreaView style={styles.container}>
            <View style={styles.tabsContainer}>
            <Carousel />
            </View>
            <View>
               <Text style={styles.header2text}>Offers in your city</Text>
            </View>

            <ScrollView>
                  {
                     offer.map((off,id)=>
                        <ItemCard data={off} key={id}></ItemCard>
                     )
                     }
                  
            </ScrollView>
        </SafeAreaView >


   );
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     position: 'relative'
   },
   headerContainer:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      position: 'relative',
      padding: 2,
      marginBottom:0,
      border:2

   },
   headerText:{
      fontSize: 40,
      color: '#161622',
      fontWeight: 'bold'
   },
  tabsContainer: {
   height: 200,
 },
 header2text:{
     fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
      alignContent:'center',
      padding:10,
      backgroundColor:'#161622',
      
 }

});