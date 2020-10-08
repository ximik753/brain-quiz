import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import AppCardStatsItem from './AppCardStatsItem'
import AppCard from './AppCard'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'

const CardStats = () => {
    return (
        <AppCard style={styles.cardStats}>
            <Image
                style={styles.userIcon}
                source={{ uri: 'https://avatars3.githubusercontent.com/u/34097384?s=460&u=3b74d5a77b93a2f4ce535f68ec659f5e92772bc0&v=4' }}
            />
            <Text style={styles.userName}>Ximik</Text>
            <View style={styles.wrapper}>
                <AppCardStatsItem
                    label="Сыграно игр"
                    value={9}
                />
                <AppCardStatsItem
                    label="Сыграно игр"
                    value={9}
                />
                <AppCardStatsItem
                    label="Сыграно игр"
                    value={9}
                />
                <AppCardStatsItem
                    label="Сыграно игр"
                    value={9}
                />
            </View>
        </AppCard>
    )
}

const styles = StyleSheet.create({
    cardStats: {
        marginTop: 43
    },
    userIcon: {
        width: 45,
        height: 45,
        borderRadius: 100,
        position: 'absolute',
        top: '-12%'
    },
    userName: {
        marginTop: 15,
        fontFamily: fonts.semiBold,
        fontSize: 18,
        color: colors.defaultFontColor
    },
    wrapper: {
        marginTop: 7,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
})

export default CardStats
