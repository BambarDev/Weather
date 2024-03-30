import React from 'react';
import tw from 'twrnc';
import {Image, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View style={tw`flex-1 bg-[#90B2F9] opacity-50`}>
      <View>
        <Image
          // style={}
          source={require('../../assets/images/start.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;
