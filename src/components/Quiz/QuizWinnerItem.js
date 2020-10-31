import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { avatars } from '../../utils/avatars'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const QuizWinnerItem = ({ name, avatar }) => {
    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.avatar}
                source={avatars[avatar] || avatars[0]}
                resizeMode="contain"
            />
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        width: 70,
        marginBottom: 15
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100
    },
    name: {
        fontSize: 13,
        fontFamily: fonts.bold,
        color: colors.font.default
    }
})

export default QuizWinnerItem
