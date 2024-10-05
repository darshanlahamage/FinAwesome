import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/store';
import LoginSignupScreen from './Screens/LoginSignupScreen';
import UI from './Screens/UI';
import OfferDetails from './Screens/OfferDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginSignup">
          <Stack.Screen
            name="LoginSignup"
            component={LoginSignupScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UI"
            component={UI}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OfferDetails"
            component={OfferDetails}
            options={{ headerTitle: 'Offer Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}