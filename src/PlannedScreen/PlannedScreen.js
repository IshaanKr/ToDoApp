import * as React from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

export default function MyDayScreen({ navigation }) {

  const username = useSelector((state) => state.username)

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}