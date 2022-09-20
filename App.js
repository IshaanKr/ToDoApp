import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/LoginScreen/LoginScreen'
import OTPScreen from './src/OTPScreen/OTPScreen'
import MyDayScreen from './src/MyDayScreen/MyDayScreen'
import ImportantScreen from './src/ImportantScreen/ImportantScreen'
import PlannedScreen from './src/PlannedScreen/PlannedScreen'
import AssignedScreen from './src/AssignedScreen/AssignedScreen'
import TasksScreen from './src/TasksScreen/TasksScreen'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { store } from './src/store/store'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="OTP" component={OTPScreen} />
          <Stack.Screen name="MyDay" component={MyDayScreen} />
          <Stack.Screen name="Important" component={ImportantScreen} />
          <Stack.Screen name="Planned" component={PlannedScreen} />
          <Stack.Screen name="Assigned" component={AssignedScreen} />
          <Stack.Screen name="Tasks" component={TasksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
