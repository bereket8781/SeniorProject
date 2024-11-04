import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import Register from './components/Register';
import Login from './components/Login';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "SplashScreen" screenOptions = {{ headerShown: false}}>
                <Stack.Screen name = "SplashScreen" component={SplashScreen} />
                <Stack.Screen name = "Register" component={Register} />
                <Stack.Screen name = "Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}