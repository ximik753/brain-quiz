import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import AppButton from '../components/UI/AppButton'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import AppParticles from '../components/UI/AppParticles'
import { useLinkTo } from '@react-navigation/native'

const AuthScreen = () => {
    const linkTo = useLinkTo()

    return (
        <View style={styles.wrapper}>
            <AppParticles/>
            <View style={styles.container}>
                <Image source={require('../assets/images/authorization/logo.png')}/>
                <Text style={styles.title}>Онлайн викторина для прокачки своих знаний</Text>
                <AppButton
                    text="Создать аккаунт"
                    styleButton={styles.buttonRegister}
                    pressHandler={() => linkTo('/Register')}
                />
                <View style={styles.loginWrapper}>
                    <Text style={styles.loginLabel}>Уже есть аккаунт?</Text>
                    <AppButton
                        text="Войти"
                        pressHandler={() => linkTo('/Login')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background.default,
        position: 'relative'
    },
    container: {
        maxWidth: 290,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: 150
    },
    title: {
        fontFamily: fonts.bold,
        color: colors.font.default,
        fontSize: 21,
        textAlign: 'center',
        marginTop: 15
    },
    buttonRegister: {
        marginTop: 70
    },
    loginWrapper: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 35,
        left: 0
    },
    loginLabel: {
        fontFamily: fonts.medium,
        color: colors.font.default,
        fontSize: 14,
        marginBottom: 10
    }
})

export default AuthScreen
