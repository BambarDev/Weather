import React from 'react';
import tw from 'twrnc';
import {Image, ScrollView, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import WeatherCard from '../../../components/weatherCard';

const DetailScreen = ({navigation}) => {
  return (
    <View style={tw`flex-1 bg-[#90b2f8] relative`}>
      <View style={tw`flex-row justify-between h-16 items-center`}>
        <IconButton
          icon={() => (
            <Image
              style={[tw`h-6 w-6`, {tintColor: 'white'}]}
              source={require('../../../assets/images/back.png')}
            />
          )}
          size={30}
          onPress={() => navigation.navigate('home')}
        />
        <Text style={tw`text-white text-xl font-semibold`}>Ulan Bator</Text>
        <IconButton
          icon={() => (
            <Image
              style={[tw`h-8 w-8`, {tintColor: 'white'}]}
              source={require('../../../assets/images/menu.png')}
            />
          )}
          size={30}
          onPress={() => navigation.navigate('province')}
        />
      </View>
      <View
        style={[
          tw`absolute bottom-0 left-0 right-0 h-3/6 bg-white`,
          {borderTopRightRadius: 55, borderTopLeftRadius: 55},
        ]}>
        <Text>hihi</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
