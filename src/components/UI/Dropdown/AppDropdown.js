import React from 'react'
import { View, StyleSheet } from 'react-native'

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
        backgroundColor: '#FFF',
        padding: 1,
        borderRadius: 3
    }
})

export default AppDropDown
