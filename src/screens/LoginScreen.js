import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import AppInputText from '../components/UI/AppInputText'
import AppButton from '../components/UI/AppButton'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import AppParticles from '../components/UI/AppParticles'

const LoginScreen = () => {
    return (
        <View style={styles.wrapper}>
            <AppParticles/>
            <View style={styles.container}>
                <Image source={require('../assets/images/authorization/logo.png')}/>
                <Text style={styles.title}>Онлайн виктрина для прокачки своих знаний</Text>
                <View style={styles.inputsWrapper}>
                    <AppInputText label="Логин"/>
                    <AppInputText label="Пароль"/>
                </View>
                <AppButton text="Войти" styleButton={styles.button}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.defaultBackgroundColor,
        position: 'relative'
    },
    container: {
        maxWidth: 290,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 45
    },
    title: {
        fontFamily: fonts.bold,
        color: '#FFF',
        fontSize: 21,
        textAlign: 'center',
        marginTop: 16
    },
    inputsWrapper: {
        marginTop: 50,
        height: 190,
        justifyContent: 'space-between'
    },
    button: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 35,
        left: 0
    }
})

export default LoginScreen
