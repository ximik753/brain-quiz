import React from 'react'
import { StyleSheet } from 'react-native'
import AppInputText from '../components/UI/AppInputText'
import AuthContainer from '../components/AuthContainer'

const LoginScreen = () => {
    return (
        <AuthContainer
            textButton="Войти"
            styleInputsWrapper={styles.inputsWrapper}
            verticalOffset={-140}
        >
            <AppInputText
                label="Логин"
                maxLength={5}
            />
            <AppInputText
                label="Пароль"
                secureTextEntry={true}
            />
        </AuthContainer>
    )
}

const styles = StyleSheet.create({
    inputsWrapper: {
        marginTop: 50,
        height: 190
    }
})

export default LoginScreen
