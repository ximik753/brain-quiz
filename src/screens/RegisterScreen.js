import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { fonts } from '../utils/fonts'
import AppInputText from '../components/UI/AppInputText'
import AppButton from '../components/UI/AppButton'
import { colors } from '../utils/colors'
import AppParticles from '../components/UI/AppParticles'

const RegisterScreen = () => {
    return (
        <View style={styles.wrapper}>
            <AppParticles/>
            <View style={styles.container}>
                <Image source={require('../assets/images/authorization/logo.png')}/>
                <Text style={styles.title}>Онлайн виктрина для прокачки своих знаний</Text>
                <View style={styles.inputsWrapper}>
                    <AppInputText label="Логин"/>
                    <AppInputText label="Пароль"/>
                    <AppInputText label="Повторите пароль"/>
                </View>
                <AppButton text="Создать аккаунт" styleButton={styles.button}/>
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
        marginTop: 30,
        height: 250,
        justifyContent: 'space-between'
    },
    button: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 35,
        left: 0
    }
})

export default RegisterScreen
