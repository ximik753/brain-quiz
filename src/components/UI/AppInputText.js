import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const AppInputText = ({ label }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 290
    },
    label: {
        fontFamily: fonts.medium,
        fontSize: 14,
        color: colors.defaultFontColor,
        marginBottom: 10
    },
    input: {
        borderWidth: 2,
        borderColor: colors.yellowBorderColor,
        borderRadius: 48,
        height: 38,
        color: colors.defaultBackgroundColor,
        paddingLeft: 15,
        paddingRight: 15
    }
})

export default AppInputText
