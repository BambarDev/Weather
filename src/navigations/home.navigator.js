import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/splash';

const Home = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Home.Navigator initialRouteName="splash">
      <Home.Screen
        name="splash"
        component={SplashScreen}
        options={{headerShown: false, headerTitle: 'splash'}}
      />
    </Home.Navigator>
  );
};

export default HomeNavigator;
