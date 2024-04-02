import React from 'react';
import tw from 'twrnc';
import {Image, ScrollView, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import WeatherItem from '../../../components/weatherItem';
import WeatherCard from '../../../components/weatherCard';

const HomeScreen = ({navigation}) => {
  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`flex-row justify-between items-center mx-5 my-5`}>
        <IconButton
          icon={() => (
            <Image
              style={[tw`h-8 w-8`, {tintColor: '#90b2f9'}]}
              source={require('../../../assets/images/user.png')}
            />
          )}
          size={30}
          onPress={() => navigation.navigate('sign-in')}
        />
        <IconButton
          icon={() => (
            <Image
              style={[tw`h-8 w-8`, {tintColor: '#90b2f9'}]}
              source={require('../../../assets/images/menu.png')}
            />
          )}
          size={30}
          onPress={() => navigation.navigate('province')}
        />
      </View>
      <View style={tw`mx-5 mb-5`}>
        <Text style={tw`font-bold text-3xl`}>Ulan Bator</Text>
        <Text style={tw`text-base text-[#9e9e9e]`}>Monday, 2 May</Text>
        <View
          style={[
            tw`mt-12 h-52 bg-[#90b2f9] rounded-2xl`,
            {
              shadowColor: '#90b2f9',
              shadowOffset: {width: 0, height: 25},
              shadowRadius: 16,
              shadowOpacity: 0.5,
              elevation: 5,
            },
          ]}>
          <View style={tw`relative`}>
            <View style={tw`absolute top-[-10] left-10`}>
              <Image
                source={require(`../../../assets/images/clear.png`)}
                style={[tw`h-35 w-35`, {resizeMode: 'contain'}]}
              />
            </View>
          </View>
          <View style={tw`relative`}>
            <View style={tw`absolute top-36 left-6`}>
              <Text style={tw`text-white text-xl`}>Clear</Text>
            </View>
          </View>
          <View style={tw`relative`}>
            <View style={tw`flex-row absolute top-9 right-10`}>
              <Text style={tw`text-7xl font-bold text-white/50`}>40</Text>
              <Text style={tw`text-5xl font-bold text-white/50`}>°</Text>
            </View>
          </View>
        </View>
        <View style={tw`mt-7 flex flex-row justify-evenly`}>
          <WeatherItem
            textColor="black"
            title="Wind Speed"
            url={require('../../../assets/images/windspeed.png')}
            value="6"
            unit="km/h"
          />
          <WeatherItem
            textColor="black"
            title="Humidity"
            url={require('../../../assets/images/humidity.png')}
            value="28"
            unit=""
          />
          <WeatherItem
            textColor="black"
            title="Max Temp"
            url={require('../../../assets/images/max-temp.png')}
            value="42"
            unit="C"
          />
        </View>
        <View style={tw`mt-8 flex-row items-center justify-between`}>
          <Text style={tw`text-2xl font-bold`}>Today</Text>
          <Text style={tw`text-lg text-[#90b2f9] font-semibold`}>
            Next 7 Days
          </Text>
        </View>
        <ScrollView horizontal={true} style={tw`mt-2.5`}>
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#90b2f9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#90b2f9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#90b2f9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#90b2f9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#90b2f9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#90b2f9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#90b2f9'}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
