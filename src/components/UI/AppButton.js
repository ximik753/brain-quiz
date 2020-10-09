import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { fonts } from '../../utils/fonts'

const AppButton = ({ text, styleButton, styleText, pressHandler }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ ...styles.button, ...styleButton }}
            onPress={pressHandler}
        >
            <Text style={{ ...styles.text, ...styleText }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 290,
        backgroundColor: '#F1CF13',
        padding: 11,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontFamily: fonts.bold
    }
})

export default AppButton
