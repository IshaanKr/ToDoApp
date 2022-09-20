import * as React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconF from 'react-native-vector-icons/Feather';
import IconAD from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';

export default function OTPScreen({ navigation }) {

  const username = useSelector((state) => state.username)

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'white' }}>
      
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
        <IconFA name="user-circle-o" size={30} />
        <Text style={{ flex: 1, fontSize: 25, paddingHorizontal: 10, color: 'black' }}>{username}</Text>
        <Icon name="search" size={28} />
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <IconF name="sun" size={20} />
        <Text style={{ flex: 1, fontSize: 15, paddingHorizontal: 10, paddingVertical: 15 }} onPress={() => { navigation.navigate('MyDay') }}>My Day</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconF name="star" size={20} color='red' />
        <Text style={{ flex: 1, fontSize: 15, paddingHorizontal: 10, paddingVertical: 15 }} onPress={() => { navigation.navigate('Important') }}>Important</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconF name="calendar" size={20} />
        <Text style={{ flex: 1, fontSize: 15, paddingHorizontal: 10, paddingVertical: 15 }} onPress={() => { navigation.navigate('Planned') }}>Planned</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconF name="user" size={20} color='green' />
        <Text style={{ flex: 1, fontSize: 15, paddingHorizontal: 10, paddingVertical: 15 }} onPress={() => { navigation.navigate('Assigned') }}>Assigned to me</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <IconAD name="home" size={20} color='blue' />
        <Text style={{ flex: 1, fontSize: 15, paddingHorizontal: 10, paddingVertical: 15 }} onPress={() => { navigation.navigate('Tasks') }}>Tasks</Text>
      </View>

    </View>
  );
}