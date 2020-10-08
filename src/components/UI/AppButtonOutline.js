import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { fonts } from '../../utils/fonts'

const AppButtonOutline = ({ text }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.wrapper}>
            <View style={styles.button}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 26,
        paddingRight: 26,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    text: {
        fontFamily: fonts.semiBold,
        fontSize: 14,
        color: '#FFF'
    }
})

export default AppButtonOutline
