import * as React from 'react';
import {Details} from './Details/Details';
import {Login} from './Login/Login';
import * as config from '../constants/config';
import {MoviesDashboard} from './MoviesDashboard/MoviesDashboard';
import {componentWithNoHeader} from '../styles/HeaderComponents';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const Screens: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    async function getLoggedInState() {
      const isLoggedIn = await AsyncStorage.getItem(config.IS_LOGGED_IN);

      console.log('isLoggedIn', isLoggedIn);
      setLoggedIn(isLoggedIn ? true : false);
    }
    getLoggedInState();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={loggedIn ? 'MoviesDashboard' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={navigationOptions}
        />
        <Stack.Screen
          name="MoviesDashboard"
          component={MoviesDashboard}
          options={navigationOptions}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
