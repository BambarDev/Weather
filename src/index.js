import React from 'react';
import tw from 'twrnc';
import {View} from 'react-native';
import RootNavigator from './navigations';

const App = () => {
  return (
    <View style={tw`flex-1`}>
      <RootNavigator />
    </View>
  );
};

export default App;
