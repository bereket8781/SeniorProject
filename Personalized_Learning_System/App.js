import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPass from './components/ResetPass';
import EmailSignup from './components/EmailSignup';
import LaunchScreen from './components/LaunchScreen';
import ProfileCompletion from './components/ProfileCompletion';
import HomePage from './components/HomePage';
import AllCategories from './components/AllCategories';
import CourseDetails from './components/CourseDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Stack.Screen 
          name="HomePage" 
          component={HomePage} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="AllCategories" 
          component={AllCategories} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CourseDetails" 
          component={CourseDetails} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
