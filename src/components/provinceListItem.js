import tw from 'twrnc';
import React from 'react';
import {View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

const ProvinceListItem = ({children}) => {
  const [checked, setChecked] = React.useState('');

  return (
    <View>
      <View
        style={tw`h-16 mt-4 mx-3.5 px-3 rounded-xl bg-white shadow-2xl shadow-[#90b2f9]/50 justify-center`}>
        <View style={tw`flex-row items-center`}>
          <RadioButton
            size={100}
            value="first"
            color="#90b2f9"
            onPress={() => setChecked('first')}
            uncheckedColor="rgba(0, 0, 0, 0.55)"
            status={checked === 'first' ? 'checked' : 'unchecked'}
          />
          <Text
            style={[
              tw`text-base`,
              checked === 'first' ? tw`text-[#90b2f9]` : tw`text-black/55`,
            ]}>
            {children}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProvinceListItem;
