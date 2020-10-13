import React from 'react'
import { View, StyleSheet, Image, Text, TouchableNativeFeedback } from 'react-native'
import AppCardStatsItem from './AppCardStatsItem'
import AppCard from './AppCard'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { fonts } from '../../../utils/fonts'
import { colors } from '../../../utils/colors'
import { useSelector } from 'react-redux'
import { avatars } from '../../../utils/avatars'

const CardStats = () => {
    const { name, stats, icon } = useSelector(state => state.user)
    const { gameTotal, gameWinner, iq } = stats

    return (
        <AppCard style={styles.cardStats}>
            <Image
                style={styles.avatar}
                source={avatars[icon]}
                resizeMode="contain"
            />
            <View style={[
                { transform: [{ translateX: 10 }, { translateY: -5 }] }
            ]}>
                <TouchableNativeFeedback
                    onPress={() => console.log(123)}
                >
                    <MaterialIcons
                        name="settings"
                        color={colors.defaultFontColor}
                        size={19}
                    />
                </TouchableNativeFeedback>
            </View>
            <Text style={styles.name}>{name}</Text>
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
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 100,
        position: 'absolute',
        top: '-12%'
    },
    name: {
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
