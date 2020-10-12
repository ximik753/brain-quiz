import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import AppCardStatsItem from './AppCardStatsItem'
import AppCard from './AppCard'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import { useSelector } from 'react-redux'

const CardStats = () => {
    const { name, stats } = useSelector(state => state.user)
    const { gameTotal, gameWinner, iq } = stats

    return (
        <AppCard style={styles.cardStats}>
            <Image
                style={styles.userIcon}
                source={{ uri: 'https://avatars3.githubusercontent.com/u/34097384?s=460&u=3b74d5a77b93a2f4ce535f68ec659f5e92772bc0&v=4' }}
            />
            <Text style={styles.userName}>{name}</Text>
            <View style={styles.wrapper}>
                <AppCardStatsItem
                    label="Сыграно игр"
                    value={gameTotal}
                    icon={<Image source={require('../../../assets/images/main/stats/icon_games.png')}/>}
                />
                <AppCardStatsItem
                    label="Побед"
                    value={gameWinner}
                    icon={<MaterialIcons name="emoji-events" color={colors.defaultFontColor} size={19}/>}
                />
                <AppCardStatsItem
                    label="IQ"
                    value={iq}
                    icon={<Image source={require('../../../assets/images/main/stats/icon_brain.png')}/>}
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
