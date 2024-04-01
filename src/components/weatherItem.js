import React from 'react';
import tw from 'twrnc';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';

const WeatherItem = ({title, url, value, unit}) => {
  return (
    <View>
      <Text style={tw`text-black/55 self-center`}>{title}</Text>
      <View
        style={tw`my-2 h-16 w-16 bg-[#E0E8FB] rounded-2xl self-center items-center justify-center`}>
        <Image source={url} style={[tw`h-14 w-14`, {resizeMode: 'contain'}]} />
      </View>
      <Text style={tw`font-bold self-center`}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

export default WeatherItem;
