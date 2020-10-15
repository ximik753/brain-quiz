import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackAuthNavigator } from './StackAuthNavigator'
import { useSelector } from 'react-redux'
import { TabsMainNavigation } from './TabsMainNavigation'
import { useLogin } from '../hooks/login.hook'
import { StackLoadingNavigator } from './StackLoadingNavigator'

export const AppNavigation = () => {
    const token = useSelector(state => state.user.token)
    const { autoLogin, ready } = useLogin()

    useEffect(() => {
        autoLogin()
            .catch(error => console.log(error))
    }, [])

    let content = (
        <StackLoadingNavigator/>
    )

    if (ready) {
        content = (
            token
                ? <TabsMainNavigation/>
                : <StackAuthNavigator/>
        )
    }

    return (
        <NavigationContainer>
            {content}
        </NavigationContainer>
    )
}
