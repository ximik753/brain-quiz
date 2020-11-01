import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { fonts } from '../../../utils/fonts'

const AppDropdownItem = ({ children, pressHandler }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={pressHandler}
            style={styles.button}
        >
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.medium,
        fontSize: 12
    },
    button: {
        padding: 3
    }
})

export default AppDropdownItem
