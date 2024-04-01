import tw from 'twrnc';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {FAB, Searchbar, Text} from 'react-native-paper';
import ProvinceListItem from '../../components/provinceListItem';

const ProvincesScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <View style={tw`flex-1`}>
      <View style={tw`bg-[#90b2f9] h-16 items-center justify-center`}>
        <Text style={tw`text-white text-xl font-semibold`}>
          Choose a Location
        </Text>
      </View>
      <Searchbar
        iconColor="white"
        value={searchQuery}
        placeholder="Search"
        placeholderTextColor="white"
        onChangeText={setSearchQuery}
        inputStyle={{color: 'white'}}
        style={tw`bg-[#90b2f9] h-16 rounded-b-xl rounded-t-none`}
        selectionColor="white"
      />
      <ScrollView>
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
        <ProvinceListItem children="Ulan Bator" />
      </ScrollView>
      <FAB
        color="white"
        icon="map-marker"
        onPress={() => navigation.navigate('home')}
        style={tw`absolute m-4 right-0 bottom-0 bg-[#90b2f9] rounded-full`}
      />
    </View>
  );
};

export default ProvincesScreen;
