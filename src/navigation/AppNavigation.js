import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackAuthNavigator } from './StackAuthNavigator'
import { useSelector } from 'react-redux'
import { TabsMainNavigation } from './TabsMainNavigation'
import { useLogin } from '../hooks/login.hook'
import { StackLoadingNavigator } from './StackLoadingNavigator'
import { StackQuizNavigator } from './StackQuizNavigator'
import { QuizState } from '../context/quiz/QuizState'

export const AppNavigation = () => {
    const token = useSelector(state => state.user.token)
    const status = useSelector(state => state.game.status)
    const { autoLogin, ready } = useLogin()

    useEffect(() => {
        autoLogin()
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

    if (status > 0) {
        content = (
            <QuizState>
                <StackQuizNavigator/>
            </QuizState>
        )
    }

    return (
        <NavigationContainer>
            {content}
        </NavigationContainer>
    )
}
