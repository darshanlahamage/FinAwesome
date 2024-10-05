import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from '../store/store';
import {Entypo, Ionicons} from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import LocationBG from '../components/Location/LocationBG';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import OfferDetails from './OfferDetails'; // Import the OfferDetails screen
import colors from '../util/colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarActiveTintColor: '#FF9C01',
        tabBarInactiveTintColor: 'lightgray',
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerTitleStyle: { color: '#fff' },
          headerStyle: { backgroundColor: colors.primary },
          tabBarIcon: (props) => <Entypo name="home" size={props.size} color={props.color} />,
        }}
      />
      <Tab.Screen 
        name="Maps" 
        component={LocationBG}
        options={{
          tabBarLabel: "Maps",
          headerTitleStyle: { color: '#fff' },
          headerStyle: { backgroundColor: colors.primary },
          tabBarIcon: (props) => <Entypo name="star" size={props.size} color={props.color} />,
        }}
      />
      <Tab.Screen 
        name="CartScreen" 
        component={CartScreen}
        options={{
          tabBarLabel: "CartScreen",
          headerTitleStyle: { color: '#fff' },
          headerStyle: { backgroundColor: colors.primary },
          tabBarIcon: (props) => <Ionicons name="cart" size={props.size} color={props.color} />,
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          headerTitleStyle: { color: '#fff' },
          headerStyle: { backgroundColor: colors.primary },
          tabBarIcon: (props) => <Ionicons name="settings" size={props.size} color={props.color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function UI() {
  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          {/* Tab Navigator inside Stack Navigator */}
          <Stack.Screen 
            name="MainTabs" 
            component={TabNavigator} 
            options={{ headerShown: false }} 
          />
          {/* OfferDetails screen */}
          <Stack.Screen 
            name="OfferDetails" 
            component={OfferDetails} 
            options={{ headerShown: true, title: 'Offer Details' }}
            backgroundColor={colors.primary}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}