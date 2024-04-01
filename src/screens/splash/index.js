import React from 'react';
import tw from 'twrnc';
import {Text, Button} from 'react-native-paper';
import {View, Image} from 'react-native';

const SplashScreen = ({navigation}) => {
  return (
    <View style={tw`flex-1 bg-[#90b2f9]/50 justify-center items-center`}>
      <Image
        source={require('../../assets/images/start.png')}
        style={[tw`h-70 w-70`, {resizeMode: 'contain'}]}
      />
      <Button
        mode="contained"
        contentStyle={{
          height: 56,
        }}
        style={tw`mt-20 w-80 h-14 bg-[#90b2f9] rounded-xl`}
        onPress={() => navigation.navigate('home')}>
        <Text style={tw`text-xl text-white`}>Get started</Text>
      </Button>
    </View>
  );
};

export default SplashScreen;
