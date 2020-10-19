import React from 'react'
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

const AnswerItem = ({ children, isActive }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={isActive ? styles.answerActive : styles.answer}>
                <Text style={styles.answerText}>{children}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    answer: {
        width: 290,
        height: 40,
        paddingHorizontal: 15,
        justifyContent: 'center',
        backgroundColor: 'rgba(239, 239, 239, .3)',
        borderRadius: 50,
        marginBottom: 15
    },
    answerActive: {
        backgroundColor: colors.background.quizAnswerItem,
        borderRadius: 50,
        marginBottom: 15,
        width: 290,
        height: 40,
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    answerText: {
        fontFamily: fonts.semiBold,
        color: colors.font.default,
        fontSize: 17
    }
})

export default AnswerItem
