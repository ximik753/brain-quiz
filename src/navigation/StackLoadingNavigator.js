import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import LoadingScreen from '../screens/LoadingScreen'

const StackNavigator = createStackNavigator()

export const StackLoadingNavigator = () => (
    <StackNavigator.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <StackNavigator.Screen
            name="Loading"
            component={LoadingScreen}
        />
    </StackNavigator.Navigator>
)
