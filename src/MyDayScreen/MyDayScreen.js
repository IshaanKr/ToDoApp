import * as React from 'react';
import { View, Text, Image, Button, TextInput, ImageBackground } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

export default function MyDayScreen({ navigation }) {

  const username = useSelector((state) => state.username)

  return (
    <ImageBackground source={{uri: "https://i.pinimg.com/564x/a6/0e/64/a60e64c098ee31eb57ae1ab42217cc36.jpg" }} style={{flex:1, padding: 20}}>
      <View>
        <Text style={{color: 'white'}}>My Day</Text>
      </View>
    </ImageBackground>
  );
}