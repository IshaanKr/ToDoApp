import * as React from 'react';
import { View, Text,Image, Button,TextInput } from 'react-native';

export default function OTPScreen({navigation}) {

    const [username, onChangeUsername] = React.useState("Useless Text");
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white' }}>
        <Text style={{ fontSize:25 }}>Enter OTP</Text>
      </View>
    );
  }