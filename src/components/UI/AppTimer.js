import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { useSelector } from 'react-redux'

const AppTimer = () => {
    const nextGameDate = useSelector(state => state.user.nextGameDate)
    const time = new Date(nextGameDate * 1000)
    const hours = time.getHours()
    const minutes = time.getMinutes()

    const transformTime = () => `${hours <= 9 ? `0${hours}` : hours}:${minutes <= 9 ? `0${minutes}` : minutes}`

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Следущая игра в:</Text>
            <View style={styles.timerWrapper}>
                <Text style={styles.timer}>{transformTime()}</Text>
                <Image
                    style={styles.particle}
                    source={require('../../assets/images/main/particle.png')}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center'
    },
    title: {
        marginTop: 20,
        fontFamily: fonts.semiBold,
        fontSize: 18,
        color: colors.font.default
    },
    timerWrapper: {
        position: 'relative'
    },
    timer: {
        fontFamily: fonts.black,
        fontSize: 24,
        color: colors.font.default,
        zIndex: 2
    },
    particle: {
        position: 'absolute',
        bottom: -5,
        left: -9
    }
})

export default AppTimer
