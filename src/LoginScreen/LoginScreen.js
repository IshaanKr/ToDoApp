import * as React from 'react';
import { View, Text,Image, Button,TextInput } from 'react-native';

export default function LoginScreen() {

    const [username, onChangeUsername] = React.useState("Useless Text");
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: 'white' }}>
        <Text style={{ fontSize:25 }}>Welcome to Microsoft To Do</Text>
        <Image source={require('./img/login-image.jpg')} />
        <TextInput
        onChangeText={onChangeUsername}
        placeholder="Email or phone number"
        value={username}/>
        <Button title="Sign in"/>
        <Text style={{ margin: 20, fontSize:15}}>Sign in with a work, school, or Microsoft account.</Text>

        <Text style={{ margin: 20, color:'blue', fontSize:15}}>Don't have a Microsoft account?</Text>
      </View>
    );
  }