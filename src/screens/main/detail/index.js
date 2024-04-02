import React from 'react';
import tw from 'twrnc';
import {Image, ScrollView, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import WeatherCard from '../../../components/weatherCard';
import WeatherItem from '../../../components/weatherItem';
import DetailListItem from '../../../components/detailListItem';

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
      <View>
        <ScrollView horizontal={true} style={tw`mt-2.5 ml-4`}>
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#9ebcf9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#9ebcf9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#9ebcf9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#9ebcf9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#9ebcf9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#9ebcf9'}
          />
          <WeatherCard
            onPress={() => navigation.navigate('detail')}
            title="17C"
            url={require('../../../assets/images/clear.png')}
            subTitle="Mon"
            color={'#9ebcf9'}
          />
        </ScrollView>
      </View>
      <View
        style={[
          tw`absolute bottom-0 left-0 right-0 h-3/6 bg-white`,
          {borderTopRightRadius: 55, borderTopLeftRadius: 55},
        ]}>
        <View
          style={[
            tw`absolute top-[-30] left-5 right-5`,
            {
              zIndex: 1,
              shadowColor: '#90b2f9',
              shadowOffset: {width: 0, height: 25},
              shadowRadius: 16,
              shadowOpacity: 0.5,
              elevation: 5,
            },
          ]}>
          <View style={tw`h-80`}>
            <LinearGradient
              colors={['#a9c1f5', '#6696f5']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={tw`flex-1 rounded-xl`}>
              <View style={tw`absolute top-[-10] left-10`}>
                <Image
                  source={require(`../../../assets/images/clear.png`)}
                  style={[tw`h-35 w-35`, {resizeMode: 'contain'}]}
                />
              </View>
              <View style={tw`absolute top-35 left-6`}>
                <Text style={tw`text-white text-xl`}>Clear</Text>
              </View>

              <View style={tw`flex-row absolute top-9 right-10`}>
                <Text style={tw`text-7xl font-bold text-white/50`}>40</Text>
                <Text style={tw`text-5xl font-bold text-white/50`}>°</Text>
              </View>
              <View
                style={tw`flex-row absolute top-42 left-[-5] right-[-5] justify-evenly`}>
                <WeatherItem
                  title=""
                  textColor="white"
                  url={require('../../../assets/images/windspeed.png')}
                  value="6"
                  unit="km/h"
                />
                <WeatherItem
                  title=""
                  textColor="white"
                  url={require('../../../assets/images/humidity.png')}
                  value="28"
                  unit=""
                />
                <WeatherItem
                  title=""
                  textColor="white"
                  url={require('../../../assets/images/max-temp.png')}
                  value="42"
                  unit="C"
                />
              </View>
            </LinearGradient>
          </View>
        </View>
        <View style={{height: 200}}>
          <View style={[tw`top-50 mx-1.5`, {zIndex: 1}]}>
            <ScrollView>
              <DetailListItem
                currentDate="2 May, Monday"
                maxTemp="18"
                minTemp="8"
                url={require('../../../assets/images/clear.png')}
                weather="Heavy Cloud"
              />
              <DetailListItem
                currentDate="2 May, Monday"
                maxTemp="18"
                minTemp="8"
                url={require('../../../assets/images/clear.png')}
                weather="Heavy Cloud"
              />
              <DetailListItem
                currentDate="2 May, Monday"
                maxTemp="18"
                minTemp="8"
                url={require('../../../assets/images/clear.png')}
                weather="Heavy Cloud"
              />
              <DetailListItem
                currentDate="2 May, Monday"
                maxTemp="18"
                minTemp="8"
                url={require('../../../assets/images/clear.png')}
                weather="Heavy Cloud"
              />
              <DetailListItem
                currentDate="2 May, Monday"
                maxTemp="18"
                minTemp="8"
                url={require('../../../assets/images/clear.png')}
                weather="Heavy Cloud"
              />
              <DetailListItem
                currentDate="2 May, Monday"
                maxTemp="18"
                minTemp="8"
                url={require('../../../assets/images/clear.png')}
                weather="Heavy Cloud"
              />
              <DetailListItem
                currentDate="2 May, Monday"
                maxTemp="18"
                minTemp="8"
                url={require('../../../assets/images/clear.png')}
                weather="Heavy Cloud"
              />
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
