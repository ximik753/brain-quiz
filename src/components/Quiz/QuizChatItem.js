import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { avatars } from '../../utils/avatars'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const QuizChatItem = ({ name, message, avatar }) => {
    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.avatar}
                source={avatars[avatar] || avatars[0]}
                resizeMode="contain"
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.message}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 290,
        flexDirection: 'row',
        marginTop: 8
    },
    avatar: {
        width: 27,
        height: 27,
        borderRadius: 50,
        marginRight: 5
    },
    name: {
        fontFamily: fonts.medium,
        color: colors.font.default,
        fontSize: 12,
        marginRight: 8
    },
    message: {
        fontFamily: fonts.semiBold,
        color: colors.font.default,
        fontSize: 12
    }
})

export default QuizChatItem
