import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useHttp } from '../../hooks/http.hook'
import { updateStatus } from '../../store/actions/game'

const AppTimer = () => {
    const { nextGameDate } = useSelector(state => state.user)
    const [timer, setTimer] = useState(nextGameDate)
    const time = new Date(nextGameDate * 1000)
    const hours = time.getHours()
    let minutes = time.getMinutes()

    const transformTime = () => {
        if (timer > 1800) {
            return `${hours <= 9 ? `0${hours}` : hours}:${minutes <= 9 ? `0${minutes}` : minutes}`
        }

        minutes = Math.trunc(timer / 60)
        const seconds = timer % 60
        return `${minutes <= 9 ? `0${minutes}` : minutes}:${seconds <= 9 ? `0${seconds}` : seconds}`
    }

    useEffect(() => {
        if (nextGameDate) {
            const id = setInterval(() => {
                if (Date.now() / 1000 - nextGameDate < 1800) {
                    setTimer(Math.trunc(nextGameDate - (Date.now() / 1000)))
                    clearInterval(id)
                }
            }, 1000)
            return () => clearInterval(id)
        }
    }, [nextGameDate])

    useEffect(() => {
        if (timer) {
            const id = setInterval(() => {
                return setTimer(prevState => {
                    if (prevState > 0) {
                        return prevState - 1
                    }

                    clearInterval(id)
                    return prevState
                })
            }, 1000)

            return () => clearInterval(id)
        }
    }, [timer])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>{nextGameDate > 1800 ? 'Следущая игра в:' : 'Следущая игра через:'}</Text>
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
