import tw from 'twrnc';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import Form from '../../../components/form';
// import {getAuth, signInWithPhoneNumber} from '@react-native-firebase/auth';
// import {LogBox} from 'react-native';

// const auth = getAuth();

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  // const countryCode = '+976';

  // LogBox.ignoreLogs([
  //   'Non-serializable values were found in the navigation state',
  // ]);

  // const signUp = async () => {
  //   try {
  //     const confirmation = await signInWithPhoneNumber(
  //       auth,
  //       countryCode + phone,
  //     );
  //     navigation.navigate('otp-verification', {confirmation, phone});
  //   } catch (error) {
  //     console.log('Error sending code: ', error);
  //   }
  // };

  return (
    <Form
      onClick={() => signUp()}
      buttonTitle="Sign Up"
      accTitle="Already got an account?"
      subClick={() => navigation.navigate('sign-in')}
      subTitle="Sign In">
      <TextInput
        mode="flat"
        label="Email"
        value={email}
        textColor="#90b2f9"
        onChangeText={setEmail}
        underlineColor="#90b2f9"
        activeUnderlineColor="#90b2f9"
        style={tw`w-80 h-14 bg-transparent text-sm font-semibold self-center`}
        theme={{
          colors: {
            onSurfaceVariant: '#90b2f9',
          },
        }}
        underlineStyle={tw`mx-4`}
      />
      <TextInput
        mode="flat"
        label="Password"
        value={password}
        textColor="#90b2f9"
        secureTextEntry={true}
        underlineColor="#90b2f9"
        onChangeText={setPassword}
        activeUnderlineColor="#90b2f9"
        style={tw`w-80 h-14 my-4 bg-transparent text-sm font-semibold self-center`}
        theme={{
          colors: {
            onSurfaceVariant: '#90b2f9',
          },
        }}
        underlineStyle={tw`mx-4`}
      />
      <TextInput
        mode="flat"
        label="Confirm password"
        value={conPassword}
        textColor="#90b2f9"
        secureTextEntry={true}
        underlineColor="#90b2f9"
        onChangeText={setConPassword}
        activeUnderlineColor="#90b2f9"
        style={tw`w-80 h-14 bg-transparent text-sm font-semibold self-center`}
        theme={{
          colors: {
            onSurfaceVariant: '#90b2f9',
          },
        }}
        underlineStyle={tw`mx-4`}
      />
    </Form>
  );
};

export default SignUpScreen;
