import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthScreen from '../screens/AuthScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'

const StackNavigator = createStackNavigator()

export const StackAuthNavigator = () => (
    <StackNavigator.Navigator
        initialRouteName="Auth"
        screenOptions={{
            headerShown: false
        }}
    >
        <StackNavigator.Screen
            name="Auth"
            component={AuthScreen}
        />
        <StackNavigator.Screen
            name="Login"
            component={LoginScreen}
        />
        <StackNavigator.Screen
            name="Register"
            component={RegisterScreen}
        />
    </StackNavigator.Navigator>
)
