import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

const QuizEnding = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Викторина окончена!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '50%',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: colors.font.default,
        fontFamily: fonts.bold,
        fontSize: 31
    }
})

export default QuizEnding
