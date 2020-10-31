import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import QuizScreen from '../screens/QuizScreen'

const StackNavigator = createStackNavigator()

export const StackQuizNavigator = () => (
    <StackNavigator.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <StackNavigator.Screen
            name="Quiz"
            component={QuizScreen}
        />
    </StackNavigator.Navigator>
)
