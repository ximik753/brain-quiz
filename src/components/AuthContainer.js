import React, { useEffect, useState } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Image, Text, Keyboard } from 'react-native'
import AppButton from './UI/AppButton'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'

const AuthContainer = ({ children, textButton, pressHandler, styleInputsWrapper, verticalOffset, isValid, loading }) => {
    const [keyboardOpen, setKeyboardOpen] = useState(false)

    const handleKeyboardShowToggle = () => setKeyboardOpen(prevState => !prevState)
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', handleKeyboardShowToggle)
        Keyboard.addListener('keyboardDidHide', handleKeyboardShowToggle)

        return () => {
            Keyboard.removeListener('keyboardDidShow', handleKeyboardShowToggle)
            Keyboard.removeListener('keyboardDidHide', handleKeyboardShowToggle)
        }
    })

    return (
        <View style={styles.wrapper}>
            <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={verticalOffset || -60}
            >
                <View style={styles.container}>
                    <Image source={require('../assets/images/authorization/logo.png')}/>
                    <Text style={styles.title}>Онлайн виктрина для прокачки своих знаний</Text>
                    <View
                        style={{ ...styles.inputsWrapper, ...styleInputsWrapper }}
                    >
                        {children}
                    </View>
                    <AppButton
                        text={textButton}
                        styleButton={keyboardOpen ? styles.buttonKeyboardOpen : styles.button}
                        pressHandler={pressHandler}
                        disabled={!isValid}
                        loading={loading}
                    />
                </View>
            </KeyboardAvoidingView>
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
        position: 'absolute',
        bottom: 35,
        left: 0
    },
    buttonKeyboardOpen: {
        marginTop: 10
    }
})

export default AuthContainer
