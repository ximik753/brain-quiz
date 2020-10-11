import React from 'react'
import { StyleSheet } from 'react-native'
import { fonts } from '../../utils/fonts'
import { Button } from 'react-native-paper'
import { colors } from '../../utils/colors'

const AppButton = ({ text, pressHandler, disabled, loading, styleButton }) => {
    return (
        <Button
            style={{ ...styles.button, ...styleButton }}
            disabled={disabled || false}
            loading={loading || false}
            onPress={pressHandler}
            uppercase={false}
            labelStyle={styles.text}
            color={colors.yellowBorderColor}
            mode="contained"
        >
            {text}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 290,
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
