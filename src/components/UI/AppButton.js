import React from 'react'
import { StyleSheet } from 'react-native'
import { fonts } from '../../utils/fonts'
import { Button } from 'react-native-paper'
import { colors } from '../../utils/colors'

const AppButton = ({ text, pressHandler, disabled, loading, styleButton }) => {
    return (
        <Button
            style={{ ...styles.button, ...styleButton }}
            disabled={(disabled || loading) || false}
            loading={loading || false}
            onPress={pressHandler}
            uppercase={false}
            labelStyle={styles.text}
            color={colors.border.yellow}
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
        color: colors.font.black,
        fontSize: 18,
        fontFamily: fonts.bold
    }
})

export default AppButton
