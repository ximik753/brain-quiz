import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const AppInputText = ({ label, autoFocus, keyboardType, changeHandler, placeholder, secureTextEntry, maxLength }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                autoFocus={autoFocus}
                keyboardType={keyboardType || 'default'}
                secureTextEntry={secureTextEntry || false}
                onChangeText={changeHandler}
                placeholder={placeholder || ''}
                maxLength={maxLength || 32}
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
        paddingLeft: 15,
        paddingRight: 15,
        color: colors.defaultFontColor
    }
})

export default AppInputText
