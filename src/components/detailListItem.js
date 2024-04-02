import tw from 'twrnc';
import React from 'react';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';

const DetailListItem = ({currentDate, maxTemp, minTemp, url, weather}) => {
  return (
    <View>
      <View
        style={tw`h-20 mt-4 mx-3.5 p-3 rounded-xl bg-white shadow-2xl shadow-[#90b2f9]/50 justify-center`}>
        <View
          style={tw`flex-row absolute left-[-5] right-[-5] justify-evenly items-center`}>
          <Text style={tw`text-[#6696f5]`}>{currentDate}</Text>
          <View style={tw`flex-row`}>
            <Text style={tw`text-gray-500 text-3xl font-semibold`}>
              {maxTemp}
            </Text>
            <Text style={tw`text-gray-500 text-3xl`}>/</Text>
            <Text style={tw`text-gray-500 text-2xl`}>{minTemp}</Text>
          </View>
          <View style={tw`items-center`}>
            <Image
              source={url}
              style={[tw`h-7 w-7`, {resizeMode: 'contain'}]}
            />
            <Text>{weather}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailListItem;
