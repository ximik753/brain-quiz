import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackAuthNavigator } from './StackAuthNavigator'

export const AppNavigation = () => (
    <NavigationContainer>
        <StackAuthNavigator/>
    </NavigationContainer>
)
