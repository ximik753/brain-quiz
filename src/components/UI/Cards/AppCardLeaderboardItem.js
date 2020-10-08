import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'

const AppCardLeaderboardItem = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.position}>1</Text>
            <Image
                style={styles.icon}
                source={{ uri: 'https://avatars3.githubusercontent.com/u/34097384?s=460&u=3b74d5a77b93a2f4ce535f68ec659f5e92772bc0&v=4' }}
            />
            <Text style={styles.name}>Dev</Text>
            <View style={styles.iqWrapper}>
                <Text style={styles.iq}>999</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: colors.leaderboardItemBackgroundColor,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 60
    },
    position: {
        fontFamily: fonts.bold,
        fontSize: 18,
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
        color: colors.defaultFontColor
    }
})

export default AppCardLeaderboardItem
