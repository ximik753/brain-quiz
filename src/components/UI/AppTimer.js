import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { fonts } from '../../utils/fonts'
import { colors } from '../../utils/colors'

const AppTimer = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Следущая игра в:</Text>
            <View style={styles.timerWrapper}>
                <Text style={styles.timer}>20:00</Text>
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
        color: colors.defaultFontColor
    },
    timerWrapper: {
        position: 'relative'
    },
    timer: {
        fontFamily: fonts.black,
        fontSize: 24,
        color: colors.defaultFontColor,
        zIndex: 2
    },
    particle: {
        position: 'absolute',
        bottom: -5,
        left: -9
    }
})

export default AppTimer
