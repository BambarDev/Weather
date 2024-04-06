import React from 'react';
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/main/home';
import SignInScreen from '../screens/auth/signIn';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/auth/signUp';
import DetailScreen from '../screens/main/detail';

const Home = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Home.Navigator initialRouteName="splash">
      <Home.Screen
        name="splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Home.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Home.Screen
        name="detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Home.Screen
        name="sign-in"
        component={SignInScreen}
        options={{
          headerTitle: 'Sign In',
          headerLeft: () => null,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 75,
            backgroundColor: '#90b2f9',
          },
          headerTintColor: 'white',
        }}
      />
      <Home.Screen
        name="sign-up"
        component={SignUpScreen}
        options={{
          headerTitle: 'Sign Up',
          headerLeft: () => null,
          headerTitleAlign: 'center',
          headerStyle: {
            height: 75,
            backgroundColor: '#90b2f9',
          },
          headerTintColor: 'white',
        }}
      />
    </Home.Navigator>
  );
};

export default HomeNavigator;
