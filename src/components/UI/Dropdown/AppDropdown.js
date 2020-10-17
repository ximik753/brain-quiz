import React from 'react'
import { View, StyleSheet } from 'react-native'
import { colors } from '../../../utils/colors'

const AppDropDown = ({ children, style }) => {
    return (
        <View style={{ ...styles.wrapper, ...style }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 80,
        backgroundColor: colors.background.dropdown,
        padding: 1,
        borderRadius: 3
    }
})

export default AppDropDown
