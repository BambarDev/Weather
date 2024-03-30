import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import HomeNavigator from './home.navigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
