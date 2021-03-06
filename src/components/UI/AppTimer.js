import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { useDispatch, useSelector } from 'react-redux'
import { updateStatus } from '../../store/actions/game'

const AppTimer = () => {
    const { nextGameDate } = useSelector(state => state.user)
    const dispatch = useDispatch()

    const transformTime = () => {
        const time = new Date(nextGameDate * 1000)
        const hours = time.getHours()
        let minutes = time.getMinutes()

        return `${hours <= 9 ? `0${hours}` : hours}:${minutes <= 9 ? `0${minutes}` : minutes}`
    }

    useEffect(() => {
        if (nextGameDate) {
            const id = setInterval(() => {
                if (nextGameDate - (Date.now() / 1000) < 0) {
                    clearInterval(id)
                    dispatch(updateStatus({ id: 1 }))
                }
            }, 1000)
            return () => clearInterval(id)
        }
    }, [nextGameDate])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{'Следущая игра в:'}</Text>
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
        position: 'relative',
        justifyContent: 'center',
        width: 80
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
