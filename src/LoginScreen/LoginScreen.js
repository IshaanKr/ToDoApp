import * as React from 'react';
import { View, Text, Image, Button, TextInput } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { setUsername } from '../store/action';

export default function LoginScreen({ navigation }) {

    const [username, onChangeUsername] = React.useState("")

    const dispatch = useDispatch()

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 40,
            paddingVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
        }}>

            <View style={{
                width: '100%',
                height: '100%',
            }}>

                <Text style={{
                    fontSize: 30,
                    textAlign: 'center',
                    color: 'black'
                }}>Welcome to Microsoft To Do</Text>

                <Image
                    source={require('./img/login-image.jpg')}
                    style={{
                        height: 200,
                        borderColor: 'black',
                        width: '100%',
                        resizeMode: 'contain'
                    }} />


                <TextInput
                    style={{
                        backgroundColor: 'whitesmoke',
                        paddingLeft: 15,
                        marginBottom: 10
                    }}
                    onChangeText={onChangeUsername}
                    placeholder="Email or phone number"
                    value={username} />

                <Button
                    styles={{ padding: 10 }}
                    title="Sign in"
                    onPress={() => { 
                        dispatch(setUsername(username))
                        navigation.navigate('OTP')
                         }} />

                <Text style={{
                    fontSize: 15,
                    paddingVertical: 10
                }}>Sign in with a work, school, or Microsoft account.</Text>

                <Text style={{
                    flex: 1,
                    margin: 20, color: 'blue', fontSize: 15,
                    textAlign: 'center',
                }}>Don't have a Microsoft account?</Text>

            </View>
        </View>
    );
}