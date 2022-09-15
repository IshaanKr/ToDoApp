import * as React from 'react';
import { View, StyleSheet, Text, Image, Button, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {

    const [username, onChangeUsername] = React.useState("");

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
        }}>

            <View style={{
                justifyContent: 'space-between',
                width: 500,
                height: 500,
            }}>

                <Text style={{
                    fontSize: 25,
                    textAlign: 'center',
                    color: 'black'
                }}>Welcome to Microsoft To Do</Text>

                <Image
                    source={require('./img/login-image.jpg')}
                    style={{
                        borderColor: 'black',
                        flex: 1,
                        width: '100%',
                        resizeMode: 'contain'
                    }} />


                <TextInput
                    style={{
                        backgroundColor: 'lightgrey',
                        paddingLeft: 15,
                        marginBottom: 10
                    }}
                    onChangeText={onChangeUsername}
                    placeholder="Email or phone number"
                    value={username} />

                <Button
                    styles={{ padding: 10 }}
                    title="Sign in"
                    onPress={() => navigation.navigate('OTP')} />

                <Text style={{
                    margin: 20,
                    fontSize: 15,
                    textAlign: 'center'
                }}>Sign in with a work, school, or Microsoft account.</Text>

                <Text style={{
                    margin: 20, color: 'blue', fontSize: 15,
                    textAlign: 'center'
                }}>Don't have a Microsoft account?</Text>

            </View>
        </View>
    );
}