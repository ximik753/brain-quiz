import React from 'react'
import { StyleSheet, ImageBackground, Text } from 'react-native'
import AppButton from '../AppButton'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'

const FaqItem = () => {
    return (
        <ImageBackground style={styles.item} source={require('../../../assets/images/main/carousel/faq.png')}>
            <Text style={styles.title}>Узнайте ответы на популярные вопросы</Text>
            <AppButton
                text="Открыть"
                styleButton={styles.button}
                styleText={styles.buttonText}
                pressHandler={() => {}}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    item: {
        width: 230,
        height: 127,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.bold,
        color: colors.font.default,
        marginBottom: 10,
        fontSize: 14,
        textAlign: 'center'
    },
    button: {
        width: 180
    },
    buttonText: {
        fontSize: 14,
        letterSpacing: 0.5
    }
})

export default FaqItem
