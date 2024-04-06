import React, {useCallback, useState} from 'react';
import tw from 'twrnc';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import WeatherItem from '../../../components/weatherItem';
import WeatherCard from '../../../components/weatherCard';
import {debounce} from 'lodash';
import {fetchLocations, fetchWeatherForcast} from '../../../api/weather';
import {weatherImages} from '../../../constants';
import {useEffect} from 'react';

const HomeScreen = ({navigation}) => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

  const handleLocation = loc => {
    console.log('location:', loc);
    setLocations([]);
    toggleSearch(false);
    fetchWeatherForcast({
      cityName: loc.name,
      days: '7',
    }).then(data => {
      setWeather(data);
    });
  };

  const handleSearch = value => {
    // console.log('value:', value);
    if (value.length > 2) {
      fetchLocations({cityName: value}).then(data => {
        setLocations(data);
        console.log('got locations:', data);
      });
    }
  };

  const fetchMyWeatherData = async () => {
    try {
      const data = await fetchWeatherForcast({
        cityName: 'Mongolia',
        days: '7',
      });
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  const {current, location} = weather;

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`flex-row items-center mx-2 my-5`}>
        {showSearch ? null : (
          <IconButton
            icon={() => (
              <Image
                style={[tw`h-8 w-8`, {tintColor: '#90b2f9'}]}
                q
                source={require('../../../assets/images/user.png')}
              />
            )}
            size={30}
            onPress={() => navigation.navigate('sign-in')}
          />
        )}
        <SafeAreaView style={tw`flex flex-1`}>
          <View style={tw`mx-4 relative z-10`}>
            <View
              style={
                showSearch
                  ? tw`flex-row justify-end items-center rounded-full bg-[#90b2f9]/20`
                  : tw`flex-row justify-end items-center rounded-full bg-transparent`
              }>
              {showSearch ? (
                <TextInput
                  onChangeText={handleTextDebounce}
                  placeholder="Search city"
                  placeholderTextColor={'#90b2f9'}
                  style={tw`pl-6 h-10 flex-1 text-base text-[#90b2f9]`}
                  cursorColor="#90b2f9"
                />
              ) : null}
              <IconButton
                icon={() => (
                  <Image
                    style={[tw`h-7 w-7`, {tintColor: '#90b2f9'}]}
                    source={require('../../../assets/images/search.png')}
                  />
                )}
                size={30}
                onPress={() => toggleSearch(!showSearch)}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
      {locations.length > 0 && showSearch ? (
        <View
          style={tw`bg-[#90b2f9] right-6 left-6 self-center top-19.5 rounded-3xl absolute z-10`}>
          {locations.map((loc, index) => {
            let showBorder = index + 1 != locations.length;
            return (
              <TouchableOpacity
                onPress={() => handleLocation(loc)}
                key={index}
                style={[
                  tw`flex-row items-center border-0 p-3 px-4 mb-1`,
                  showBorder ? tw`border-b-2 border-b-white` : null,
                ]}>
                <Image
                  source={require('../../../assets/images/location.png')}
                  style={[tw`h-5 w-5`, {tintColor: 'white'}]}
                />
                <Text style={tw`text-white text-lg ml-2`}>{loc?.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
      <View style={tw`mx-5 mb-5`}>
        <Text style={tw`font-bold text-3xl`}>{location?.name}</Text>
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
                source={
                  weatherImages[current?.condition?.text] ||
                  weatherImages['other']
                }
                style={[tw`h-35 w-35`, {resizeMode: 'contain'}]}
              />
            </View>
          </View>
          <View style={tw`relative`}>
            <View style={tw`absolute top-36 left-6`}>
              <Text style={tw`text-white text-xl`}>
                {current?.condition?.text}
              </Text>
            </View>
          </View>
          <View style={tw`relative`}>
            <View style={tw`flex-row absolute top-9 right-10`}>
              <Text style={tw`text-7xl font-bold text-white/50`}>
                {current?.temp_c}
              </Text>
              <Text style={tw`text-5xl font-bold text-white/50`}>&#176;</Text>
            </View>
          </View>
        </View>
        <View style={tw`mt-7 flex flex-row justify-evenly`}>
          <WeatherItem
            textColor="black"
            title="Wind Speed"
            url={require('../../../assets/images/windspeed.png')}
            value={current?.wind_kph}
            unit="km/h"
          />
          <WeatherItem
            textColor="black"
            title="Humidity"
            url={require('../../../assets/images/humidity.png')}
            value={current?.humidity}
            unit=""
          />
          <WeatherItem
            textColor="black"
            title="Max Temp"
            url={require('../../../assets/images/max-temp.png')}
            value={weather?.forecast?.forecastday[0].day?.maxtemp_c}
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
          {weather?.forecast?.forecastday?.map((item, index) => {
            let date = new Date(item.date);
            let options = {weekday: 'long'};
            let dayName = date.toLocaleDateString('en-US', options);
            let shortDayName = dayName.substring(0, 3);

            let currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);

            let isToday =
              date.getDate() === currentDate.getDate() &&
              date.getMonth() === currentDate.getMonth() &&
              date.getFullYear() === currentDate.getFullYear();

            let color = isToday ? '#90b2f9' : '#bfdbfe';
            return (
              <WeatherCard
                key={index}
                onPress={() => {
                  if (index !== 0) {
                    navigation.navigate('detail', {
                      currentText: current?.condition?.text,
                      weatherImage:
                        weatherImages[current?.condition?.text] ||
                        weatherImages['other'],
                      humidity: current?.humidity,
                      currentTemp: current?.temp_c,
                      locationName: location?.name,
                      windKm: current?.wind_kph,
                      forecastday: weather?.forecast?.forecastday,
                      weatherFor:
                        weather?.forecast?.forecastday[0].day?.maxtemp_c,
                      clickedCardIndex: index,
                    });
                  }
                }}
                title={`${current?.temp_c} C`}
                url={
                  weatherImages[current?.condition?.text] ||
                  weatherImages['other']
                }
                subTitle={shortDayName}
                color={color}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
