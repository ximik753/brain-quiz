import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import { avatars } from '../../../utils/avatars'

const AppCardLeaderboardItem = ({ avatar, name, iq, position }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.position}>{position}</Text>
            <Image
                style={styles.icon}
                source={avatars[avatar] || avatar[0]}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.iq}>{iq}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: colors.leaderboardItemBackgroundColor,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 60,
        width: 250,
        position: 'relative'
    },
    position: {
        fontFamily: fonts.bold,
        fontSize: 16,
        color: colors.defaultFontColor,
        marginRight: 13
    },
    icon: {
        width: 26,
        height: 26,
        borderRadius: 75,
        marginRight: 10
    },
    name: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.defaultFontColor,
        marginRight: 45
    },
    iqWrapper: {
        backgroundColor: colors.leaderboardItemIqLabelColor,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    },
    iq: {
        fontFamily: fonts.bold,
        fontSize: 14,
        color: colors.defaultFontColor,
        position: 'absolute',
        top: '30%',
        right: '15%'
    }
})

export default AppCardLeaderboardItem
