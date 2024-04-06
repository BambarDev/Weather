import React from 'react';
import tw from 'twrnc';
import {Image, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

const WeatherCard = ({color, title, url, subTitle, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        tw`p-5 w-24 mr-5 items-center rounded-xl`,
        {
          backgroundColor: color,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOffset: {width: 0, height: 1},
          shadowRadius: 5,
          shadowOpacity: 0.2,
          elevation: 5,
        },
      ]}
      onPress={onPress}>
      <Text style={tw`text-base font-medium text-white`}>{title}</Text>
      <Image source={url} style={[tw`h-7 w-7 my-1`, {resizeMode: 'contain'}]} />
      <Text style={tw`text-white`}>{subTitle}</Text>
    </TouchableOpacity>
  );
};

export default WeatherCard;
