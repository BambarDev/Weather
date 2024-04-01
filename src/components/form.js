import tw from 'twrnc';
import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';

const Form = ({
  children,
  // passClick,
  // passTitle,
  onClick,
  buttonTitle,
  accTitle,
  subClick,
  subTitle,
}) => {
  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-1 justify-center`}>
        {children}
        {/* <Text onPress={passClick} style={tw`ml-11 mt-1 text-black/55`}>
          {passTitle}
        </Text> */}
      </View>
      <View style={tw`items-center mb-8`}>
        <Button
          mode="contained"
          onPress={onClick}
          style={tw`w-80 h-14 bg-[#90b2f9] rounded-7`}>
          <Text style={tw`text-xl text-white font-bold text-center`}>
            {buttonTitle}
          </Text>
        </Button>
        <Text style={tw`pt-3 text-sm text-black/55 font-normal text-center`}>
          {accTitle}{' '}
          <Text
            onPress={subClick}
            style={tw`text-sm text-black/55 font-bold text-center`}>
            {subTitle}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Form;
