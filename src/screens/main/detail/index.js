import React, {useEffect, useState} from 'react';
import tw from 'twrnc';
import {Image, ScrollView, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import WeatherCard from '../../../components/weatherCard';
import WeatherItem from '../../../components/weatherItem';
import DetailListItem from '../../../components/detailListItem';
import {useRoute} from '@react-navigation/native';
import {fetchWeatherForcast} from '../../../api/weather';

const DetailScreen = ({navigation}) => {
  const [weather, setWeather] = useState(null);
  const route = useRoute();
  console.log(route.params);
  const {
    currentText,
    forecastday,
    currentTemp,
    locationName,
    clickedCardIndex,
    weatherImage,
    weatherFor,
    humidity,
    windKm,
  } = route.params;

  const fetchNewData = async () => {
    try {
      const data = await fetchWeatherForcast({
        cityName: 'Mongolia',
        days: '7',
      });
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardClick = async () => {
    if (route.name === 'detail') {
      await fetchNewData();
    }
  };

  useEffect(() => {
    if (route.name === 'detail') {
      fetchNewData();
    }
  }, []);

  return (
    <View style={tw`flex-1 bg-[#90b2f8] relative`}>
      <View style={tw`flex-row h-16 items-center`}>
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
        <Text style={tw`text-white text-xl font-semibold`}>{locationName}</Text>
      </View>
      <View>
        <ScrollView horizontal={true} style={tw`mt-2.5 ml-4`}>
          {forecastday?.map((item, index) => {
            let date = new Date(item.date);
            let options = {weekday: 'long'};
            let dayName = date.toLocaleDateString('en-US', options);
            let shortDayName = dayName.substring(0, 3);
            let color = index === clickedCardIndex ? '#93c5fd' : '#bfdbfe';
            return (
              <WeatherCard
                onPress={handleCardClick}
                key={index}
                title={`${currentTemp} C`}
                url={weatherImage}
                subTitle={shortDayName}
                color={color}
              />
            );
          })}
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
                  source={weatherImage}
                  style={[tw`h-35 w-35`, {resizeMode: 'contain'}]}
                />
              </View>
              <View style={tw`absolute top-35 left-6`}>
                <Text style={tw`text-white text-xl`}>{currentText}</Text>
              </View>

              <View style={tw`flex-row absolute top-9 right-10`}>
                <Text style={tw`text-7xl font-bold text-white/50`}>
                  {currentTemp}
                </Text>
                <Text style={tw`text-5xl font-bold text-white/50`}>&#176;</Text>
              </View>
              <View
                style={tw`flex-row absolute top-42 left-[-5] right-[-5] justify-evenly`}>
                <WeatherItem
                  textColor="white"
                  url={require('../../../assets/images/windspeed.png')}
                  value={windKm}
                  unit="km/h"
                />
                <WeatherItem
                  textColor="white"
                  url={require('../../../assets/images/humidity.png')}
                  value={humidity}
                  unit=""
                />
                <WeatherItem
                  textColor="white"
                  url={require('../../../assets/images/max-temp.png')}
                  value={weatherFor}
                  unit="C"
                />
              </View>
            </LinearGradient>
          </View>
        </View>
        <View style={{height: 200}}>
          <View style={[tw`top-50 mx-1.5`, {zIndex: 1}]}>
            <ScrollView>
              {forecastday?.map((item, index) => {
                return (
                  <DetailListItem
                    key={index}
                    currentDate={item.date}
                    maxTemp={item?.day?.maxtemp_c}
                    minTemp={item?.day?.mintemp_c}
                    url={weatherImage}
                    weather={currentText}
                  />
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
