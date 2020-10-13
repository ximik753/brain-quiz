import React from 'react'
import { StyleSheet } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { Button } from 'react-native-paper'

const AppButtonOutline = ({ text, pressHandler, loading, disabled }) => {
    return (
        <Button
            style={styles.button}
            onPress={pressHandler}
            uppercase={false}
            labelStyle={styles.text}
            loading={loading || false}
            disabled={(disabled || loading) || false}
            color="transparent"
            mode="contained"
        >
            {text}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.defaultFontColor,
        height: 27,
        width: 120
    },
    text: {
        fontFamily: fonts.semiBold,
        fontSize: 14,
        color: colors.defaultFontColor
    }
})

export default AppButtonOutline
