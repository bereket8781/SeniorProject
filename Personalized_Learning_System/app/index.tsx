import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../components/SplashScreen';
import Login from '../components/Login';
import ForgotPassword from '../components/ForgotPassword';
import ResetPass from '../components/ResetPass';
import Register from '../components/Register';
import EmailSignup from '../components/EmailSignup';
import LaunchScreen from '../components/LaunchScreen';
import ProfileCompletion from '../components/ProfileCompletion';



const Stack = createStackNavigator();

export default function App(): JSX.Element {
  return (

   
    <Stack.Navigator initialRouteName="Launch">
        <Stack.Screen 
          name="Launch" 
          component={LaunchScreen} 
          options={{ headerShown: false }}
        />
      <Stack.Screen 
        name="SplashScreen" 
        component={SplashScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}
      />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPassword} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ResetPass" 
          component={ResetPass} 
          options={{ headerShown: false }}
        />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ headerShown: false }}
      /> 
        <Stack.Screen 
          name="EmailSignup" 
          component={EmailSignup} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProfileCompletion" 
          component={ProfileCompletion} 
          options={{ headerShown: false }}
        />
    </Stack.Navigator>
  
   
  );
}

