import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackAuthNavigator } from './StackAuthNavigator'
import { useSelector } from 'react-redux'
import { TabsMainNavigation } from './TabsMainNavigation'

export const AppNavigation = () => {
    const token = useSelector(state => state.user.token)

    return (
        <NavigationContainer>
            {
                token
                    ? <TabsMainNavigation/>
                    : <StackAuthNavigator/>
            }

        </NavigationContainer>
    )
}
