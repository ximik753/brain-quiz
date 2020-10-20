import React from 'react'
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native'
import AppButton from './UI/AppButton'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'

const AuthContainer = ({ children, textButton, pressHandler, styleInputsWrapper, isValid, loading }) => {

    return (
        <View style={styles.wrapper}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <Image source={require('../assets/images/authorization/logo.png')}/>
                <Text style={styles.title}>Онлайн виктрина для прокачки своих знаний</Text>
                <View
                    style={{ ...styles.inputsWrapper, ...styleInputsWrapper }}
                >
                    {children}
                </View>
                <AppButton
                    text={textButton}
                    styleButton={styles.button}
                    pressHandler={pressHandler}
                    disabled={!isValid}
                    loading={loading}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background.default
    },
    container: {
        maxWidth: 290,
        alignItems: 'center',
        paddingTop: 45
    },
    title: {
        fontFamily: fonts.bold,
        color: colors.font.default,
        fontSize: 21,
        textAlign: 'center',
        marginTop: 16
    },
    inputsWrapper: {
        marginTop: 20,
        height: 300,
        justifyContent: 'space-between'
    },
    button: {
        marginTop: 80
    },
    buttonKeyboardOpen: {
        marginTop: 10
    }
})

export default AuthContainer
