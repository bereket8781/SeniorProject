import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../components/SplashScreen';
import Login from '../components/Login';



const Stack = createStackNavigator();

export default function App(): JSX.Element {
  return (

   
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
      />
{/*       <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  
   
  );
}

