import React from 'react'
import { Button } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'

const AppDropdownItem = ({ children, pressHandler }) => {
    return (
        <Button
            onPress={pressHandler}
            uppercase={false}
            color={colors.font.black}
            mode="text"
            labelStyle={styles.text}
        >{children}</Button>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.medium,
        fontSize: 12,
        letterSpacing: 0
    }
})

export default AppDropdownItem