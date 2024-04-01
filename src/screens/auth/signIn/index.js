import tw from 'twrnc';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import Form from '../../../components/form';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Form
      passClick={() => console.log('Pressed')}
      passTitle="Forgot password?"
      onClick={() => console.log('Pressed')}
      buttonTitle="Sign In"
      accTitle="Don't have account?"
      subClick={() => navigation.navigate('sign-up')}
      subTitle="Sign Up">
      <TextInput
        mode="flat"
        value={email}
        label="Email"
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
        value={password}
        label="Password"
        textColor="#90b2f9"
        secureTextEntry={true}
        underlineColor="#90b2f9"
        onChangeText={setPassword}
        activeUnderlineColor="#90b2f9"
        style={tw`w-80 h-14 mt-4 bg-transparent text-sm font-semibold self-center`}
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

export default SignInScreen;
